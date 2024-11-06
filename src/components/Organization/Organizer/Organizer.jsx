import React from 'react'
import {
  Layout,
  Card,
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  ConfigProvider,
} from 'antd'
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  LinkOutlined,
  FacebookOutlined,
} from '@ant-design/icons'
import { VietnameseProvinces } from '../../../utils/utils' // Import the provinces

const { Content } = Layout
const { Option } = Select
import './Organizer.scss'

function Organizer() {
  const user = {
    fullname: 'John Doe',
    email: 'john.doe@example.com',
    dateOfBirth: '2023-01-01',
    phoneNumber: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    gender: 'male',
  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }
  return (
    <>
      <h2 className="text-center text-2xl font-semibold mb-6">
        My organization
      </h2>
      <Content className="infor-container">
        <Card className="rounded-lg shadow-lg ">
          <Form
            name="profile"
            initialValues={{
              fullname: user.fullname,
              email: user.email,
              dateOfBirth: user.dateOfBirth,
              phoneNumber: user.phoneNumber,
              address: user.address,
              gender: user.gender,
            }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="fullname"
              label="Organization Name"
              rules={[
                { required: true, message: 'Please input your full name!' },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Full Name" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
              <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
            </Form.Item>
            <Form.Item
              name="website"
              label="Website"
              rules={[{ required: false }]}
            >
              <Input prefix={<LinkOutlined />} placeholder="Your website" />
            </Form.Item>
            <Form.Item
              name="social"
              label="Social Media"
              rules={[{ required: false }]}
            >
              <Input
                prefix={<FacebookOutlined />}
                placeholder="Your social media"
              />
            </Form.Item>

            <Form.Item name="createdDate" label="Created Date">
              <DatePicker
                style={{ width: '100%' }}
                disabled
                value={user.dateOfBirth}
                placeholder={user.dateOfBirth}
              />
            </Form.Item>

            <Form.Item>
              <button className="btn-submit ">Save Changes</button>
            </Form.Item>
          </Form>
        </Card>
      </Content>
    </>
  )
}

export default Organizer
