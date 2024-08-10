import CreateModal from '@/pages/Admin/InterfaceInfo/components/CreateModal';
import UpdateModal from '@/pages/Admin/InterfaceInfo/components/UpdateModal';
import {
  activateInterfaceInfo,
  addInterfaceInfo,
  deleteInterfaceInfo, forbidInterfaceInfo,
  listInterfaceInfoByPage,
  updateInterfaceInfo,
} from '@/services/zhixiang-backend/interfaceInfoController';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  FooterToolbar,
  PageContainer,
  ProDescriptions,
  ProTable,
} from '@ant-design/pro-components';
import '@umijs/max';
import { Button, Drawer, Input, message } from 'antd';
import { SortOrder } from 'antd/lib/table/interface';
import React, { useRef, useState } from 'react';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */

/**
 * @en-US Update node
 * @zh-CN 更新节点
 *
 * @param fields
 */

/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */

const InterfaceInfo: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.RuleListItem>();
  const [selectedRowsState, setSelectedRows] = useState<API.RuleListItem[]>([]);

  const handleAdd = async (fields: API.InterfaceInfo) => {
    const hide = message.loading('正在添加');
    try {
      await addInterfaceInfo({
        ...fields,
      });
      hide();
      message.success('Added successfully');
      handleModalOpen(false);
      return true;
    } catch (error) {
      hide();
      message.error(error.message);
      return false;
    }
  };

  const handleUpdate = async (fields: API.InterfaceInfo) => {
    const hide = message.loading('修改中');
    try {
      await updateInterfaceInfo({
        ...fields,
      });
      hide();
      handleUpdateModalOpen(false);
      message.success('修改成功!');
      return true;
    } catch (error) {
      hide();
      message.error('修改失败!');
      return false;
    }
  };

  // todo 修改为批量删除
  const handleRemove = async (record: API.InterfaceInfo) => {
    const hide = message.loading('正在删除');
    if (!record) return true;
    try {
      await deleteInterfaceInfo({
        id: record.id,
      });
      hide();
      actionRef.current?.reload();
      message.success('删除成功');
      return true;
    } catch (error) {
      hide();
      message.error('删除失败');
      return false;
    }
  };

  const handleActivate = async (record: API.InterfaceInfo) => {
    const hide = message.loading('正在启用');
    if (!record) return true;
    try {
      await activateInterfaceInfo({
        id: record.id,
      });
      hide();
      actionRef.current?.reload();
      message.success('启用成功');
      return true;
    } catch (error) {
      hide();
      message.error('启用失败');
      return false;
    }
  };

  const handleForbid = async (record: API.InterfaceInfo) => {
    const hide = message.loading('正在停用');
    if (!record) return true;
    try {
      await forbidInterfaceInfo({
        id: record.id,
      });
      hide();
      actionRef.current?.reload();
      message.success('停用成功');
      return true;
    } catch (error) {
      hide();
      message.error('停用失败');
      return false;
    }
  };
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */

  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: 'id',
      dataIndex: 'id',
      hidden: true,
    },
    {
      title: '接口名称',
      dataIndex: 'apiName',
      valueType: 'text',
      formItemProps: {
        rules: [
          {
            required: true,
          },
        ],
      },
    },
    {
      title: '接口地址',
      dataIndex: 'apiUrl',
      valueType: 'text',
    },
    {
      title: '描述',
      dataIndex: 'apiDescription',
      valueType: 'textarea',
    },
    {
      title: '请求头',
      dataIndex: 'requestHeader',
      valueType: 'jsonCode',
    },
    {
      title: '响应头',
      dataIndex: 'responseHeader',
      valueType: 'jsonCode',
    },{
      title: '请求参数',
      dataIndex: 'requestParams',
      valueType: 'jsonCode',
    },
    {
      title: '请求方法',
      dataIndex: 'method',
      valueType: 'text',
    },
    {
      title: '创建者',
      dataIndex: 'userId',
      valueType: 'textarea',
      hideInForm: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        0: {
          text: '关闭',
          status: 'Default',
        },
        1: {
          text: '已上线',
          status: 'Success',
        },
      },
    },
    {
      title: '创建时间',
      sorter: true,
      dataIndex: 'createTime',
      valueType: 'dateTime',
      hideInForm: true,
      renderFormItem: (item, { defaultRender, ...rest }, form) => {
        const status = form.getFieldValue('status');
        if (`${status}` === '0') {
          return false;
        }
        if (`${status}` === '3') {
          return <Input {...rest} placeholder={'请输入异常原因！'} />;
        }
        return defaultRender(item);
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            handleUpdateModalOpen(true);
            setCurrentRow(record);
          }}
        >
          修改
        </a>,
          record.status === 0 ? <a
              key="config"
              onClick={() => {
                handleActivate(record);
              }}
          >
            启用
          </a> : <a
              key="config"
              onClick={() => {
                handleForbid(record);
              }}
          >
            停用
          </a>,
        <a
          key="config"
          onClick={() => {
            handleRemove(record);
          }}
        >
          删除
        </a>,
      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable<API.RuleListItem, API.PageParams>
        headerTitle={'查询表格'}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalOpen(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={async (
          params: U & {
            pageSize?: number;
            current?: number;
            keyword?: string;
          },
          sort: Record<string, SortOrder>,
          filter: Record<string, (string | number)[] | null>,
        ) => {
          const res = await listInterfaceInfoByPage({ ...params });
          if (res.data) {
            return {
              data: res.data?.records || [],
              success: true,
              total: res.data?.total,
            };
          }
        }}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              项 &nbsp;&nbsp;
              <span>
                服务调用次数总计 {selectedRowsState.reduce((pre, item) => pre + item.callNo!, 0)} 万
              </span>
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量删除
          </Button>
          <Button type="primary">批量审批</Button>
        </FooterToolbar>
      )}

      <CreateModal
        onCancel={() => {
          handleModalOpen(false);
        }}
        onSubmit={(values) => {
          handleAdd(values);
        }}
        visible={createModalOpen}
        columns={columns}
      />
      <UpdateModal
        onSubmit={async (value) => {
          const success = await handleUpdate(value);
          if (success) {
            handleUpdateModalOpen(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalOpen(false);
          if (!showDetail) {
            setCurrentRow(undefined);
          }
        }}
        visible={updateModalOpen}
        values={currentRow || {}}
        columns={columns}
      />

      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<API.RuleListItem>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<API.RuleListItem>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};
export default InterfaceInfo;
