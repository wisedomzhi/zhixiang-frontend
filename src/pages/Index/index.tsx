import { listInterfaceInfoByPage } from '@/services/zhixiang-backend/interfaceInfoController';
import { PageContainer } from '@ant-design/pro-components';
import { List, message } from 'antd';
import React, { useEffect, useState } from 'react';

/**
 * 主页
 * @constructor
 */
const Index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<API.InterfaceInfo[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [pageSize] = useState<number>(5);
  const loadData = async (current = 1, pageSize) => {
    setLoading(true);
    try {
      const res = await listInterfaceInfoByPage({
        current: current,
        pageSize: pageSize,
      });

      setList(res?.data?.records ?? []);
      setTotal(res?.data?.total ?? []);
    } catch (error) {
      message.error('请求失败' + error.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <PageContainer title="智享API开放平台">
      <List
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => {
          const apiRoute = `/user/interface-info/${item.id}`;
          return (
            <List.Item
              actions={[
                <a key={item.id} href={apiRoute}>
                  查看
                </a>,
              ]}
            >
              <List.Item.Meta
                title={<a href={apiRoute}>{item.apiName}</a>}
                description={item.apiDescription}
              />
            </List.Item>
          );
        }}
        pagination={{
          pageSize: pageSize,
          showTotal(total, range) {
            return `${range[0]}-${range[1]} of ${total} items`;
          },
          total,
          onChange(page, pageSize) {
            loadData(page, pageSize);
          },
        }}
      />
    </PageContainer>
  );
};

export default Index;
