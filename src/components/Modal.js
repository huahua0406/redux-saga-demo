import React from 'react';
import { Modal } from 'antd'

function AddModal(props){
    return (
        <Modal
          title="新增"
          visible={props.visible}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
    )
}

export default AddModal