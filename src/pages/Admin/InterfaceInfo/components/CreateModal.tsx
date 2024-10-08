import { ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Modal } from 'antd';
import React from 'react';

export type Props = {
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfo) => Promise<void>;
  visible: boolean;
  columns: ProColumns<API.InterfaceInfo>[];
};
const CreateModal: React.FC<Props> = (props) => {
  const { visible, columns, onCancel, onSubmit } = props;
  return (
    <Modal open={visible} onCancel={() => onCancel?.()} footer={null}>
      <ProTable type="form" columns={columns} onSubmit={async (value) => {
      onSubmit?.(value)
      }}/>
    </Modal>
  );
};
export default CreateModal;
