import { getInterfaceInfoById } from '@/services/zhixiang-backend/interfaceInfoController';

import { PageContainer } from '@ant-design/pro-components';
import {Button, Card, Descriptions, DescriptionsProps, Form, Input, message} from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

/**
 * 主页
 * @constructor
 */
const InterfaceInfo: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<API.InterfaceInfo>();
  const params = useParams();
  const loadData = async () => {
    if (!params.id) {
      message.error('参数不存在');
    }
    setLoading(true);
    try {
      const res = await getInterfaceInfoById({
        id: params.id,
      });

      setData(res?.data ?? []);
    } catch (error) {
      message.error('请求失败' + error.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const formatterTime = (val) => {
    return val ? moment(val).format('YYYY-MM-DD HH:mm:ss') : '';
  };

  const items: DescriptionsProps['items'] = [
    {
      label: '接口名称',
      children: data?.apiName,
    },
    {
      label: '接口地址',
      children: data?.apiUrl,
    },
    {
      label: '请求方法',
      children: data?.method,
    },
    {
      label: '状态',
      children: data?.status === 0 ? '停用' : '启用',
    },
    {
      label: '创建时间',
      span: { xl: 2, xxl: 2 },
      children: <div>{formatterTime(data?.createTime)}</div>,
    },
    {
      label: '更新时间',
      span: { xl: 2, xxl: 2 },
      children: <div>{formatterTime(data?.updateTime)}</div>,
    },
    {
      label: '请求头',
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
      children: data?.requestHeader,
    },
    {
      label: '响应头',
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
      children: data?.responseHeader,
    },
    {
      label: '请求参数',
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
      children: data?.requestParams,
    },
  ];

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };
  return (
    <PageContainer title="查看接口信息">
      <Card>
        <Descriptions
          bordered
          column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
          items={items}
        />
      </Card>
      <Card>
        <Form
            name="invoke"
            layout="horizontal"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
        >
          <Form.Item
              layout="vertical"
              label="请求参数"
              name="requestParams"
              rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <br/>
          <br/>
          <br/>
          <Form.Item wrapperCol={{ span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </PageContainer>
  );
};

export default InterfaceInfo;
