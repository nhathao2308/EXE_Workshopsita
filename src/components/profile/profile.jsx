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
  LockOutlined,
  ManOutlined,
  WomanOutlined,
} from '@ant-design/icons'
import './scss/profile.scss'
import dayjs from 'dayjs'

const { Content } = Layout
const { Option } = Select

const Profile = () => {
  const user = {
    fullname: 'John Doe',
    email: 'john.doe@example.com',
    dateOfBirth: '2023-01-01T12:00:00Z',
    phoneNumber: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    gender: 'male',
  }

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            hoverBorderColor: '#74512d',
            activeShadow: '$74512d',
          },
        },
        token: {
          colorPrimaryHover: '#74512D',
          colorPrimaryActive: '#74512D',
          colorFillSecondary: '#74512D',
        },
      }}
    >
      <Layout className="min-h-screen w-full flex justify-center items-center profile-container ">
        <Content className="w-full max-w-lg p-6">
          <Card className="rounded-lg shadow-lg">
            <h2 className="text-center text-2xl font-semibold mb-6">
              User Profile
            </h2>
            <Form
              name="profile"
              initialValues={{
                fullname: user.fullname,
                email: user.email,
                dateOfBirth: dayjs(user.dateOfBirth),
                phoneNumber: user.phoneNumber,
                address: user.address,
                gender: user.gender,
              }}
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                name="fullname"
                label="Full Name"
                rules={[
                  { required: true, message: 'Please input your full name!' },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="Full Name" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="dateOfBirth"
                label="Date of Birth"
                rules={[
                  {
                    required: true,
                    message: 'Please input your date of birth!',
                  },
                ]}
              >
                <DatePicker style={{ width: '100%' }} />
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
                name="address"
                label="Address"
                rules={[
                  { required: true, message: 'Please input your address!' },
                ]}
              >
                <Input prefix={<HomeOutlined />} placeholder="Address" />
              </Form.Item>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[
                  { required: true, message: 'Please select your gender!' },
                ]}
              >
                <Select placeholder="Select Gender">
                  <Option value="male">
                    <ManOutlined /> Male
                  </Option>
                  <Option value="female">
                    <WomanOutlined /> Female
                  </Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <button className="btn-submit ">Save Changes</button>
              </Form.Item>
            </Form>
          </Card>
        </Content>
      </Layout>
    </ConfigProvider>
  )
}

export default Profile
