import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { LockOutlined } from '@ant-design/icons'
import './scss/profile.scss'

const Privacy = () => {
  const [showForm, setShowForm] = useState(false)

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Privacy</h2>
      {!showForm ? (
        <button onClick={() => setShowForm(true)} className="btn-submit">
          Change Password
        </button>
      ) : (
        <Form name="change_password" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="currentPassword"
            label="Current Password"
            rules={[
              {
                required: true,
                message: 'Please input your current password!',
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Current Password"
            />
          </Form.Item>
          <Form.Item
            name="newPassword"
            label="New Password"
            rules={[
              { required: true, message: 'Please input your new password!' },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="New Password"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm New Password"
            rules={[
              { required: true, message: 'Please confirm your new password!' },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm New Password"
            />
          </Form.Item>
          <Form.Item>
            <button className="btn-submit">Save Changes</button>
          </Form.Item>
        </Form>
      )}
    </div>
  )
}

export default Privacy
