import {ProColumns, ProFormInstance, ProTable} from '@ant-design/pro-components';

import '@umijs/max';
import { Modal } from 'antd';
import React, { useEffect, useRef } from 'react';

export type Props = {
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfo) => Promise<void>;
  visible: boolean;
  columns: ProColumns<API.InterfaceInfo>[];
  values: API.InterfaceInfo;
};
const UpdateModal: React.FC<Props> = (props) => {
  const { visible, columns, onCancel, onSubmit, values } = props;
  const formRef = useRef<ProFormInstance>();
  useEffect(() => {
    if (formRef) {
      formRef.current?.setFieldsValue(values);
    }
  }, [values]);
  return (
    <Modal open={visible} onCancel={() => onCancel?.()} footer={null}>
      <ProTable
        type="form"
        columns={columns}
        formRef={formRef}
        onSubmit={async (value) => {
          onSubmit?.(value);
        }}
      />
    </Modal>
  );
};
export default UpdateModal;
