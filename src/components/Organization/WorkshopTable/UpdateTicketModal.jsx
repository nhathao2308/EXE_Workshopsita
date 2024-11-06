import React from 'react'
import { Form, Input, InputNumber } from 'antd' // {{ edit_1 }}

// eslint-disable-next-line react/prop-types
function UpdateTicketModal({ ticket }) {
  return (
    <>
      <Form layout="vertical" initialValues={ticket}>
        <Form.Item label="Rank" name="rank">
          <Input disabled />
        </Form.Item>
        <Form.Item
          label="Capacity"
          name="capacity"
          rules={[
            {
              required: true,
              message: 'Please provide the capacity!',
            },
            {
              type: 'number',
              min: 1,
              message: 'Capacity must be at least 1',
            },
          ]}
        >
          <InputNumber
            style={{
              width: '100%',
            }}
          />
        </Form.Item>

        <Form.Item label="Price" name="price">
          <Input type="number" disabled />
        </Form.Item>
        <Form.Item label="Description" name="desc">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </>
  )
}

export default UpdateTicketModal
