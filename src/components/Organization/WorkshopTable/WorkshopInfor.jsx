import { Form, Input, Select, ConfigProvider } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import React from 'react'
import { Option } from 'antd/es/mentions'
import {
  Space,
  DatePicker,
  TimePicker,
  InputNumber,
  Upload,
  Button,
} from 'antd' // Add this line to import Space
import { VietnameseProvinces } from '../../../utils/utils'
import { UploadOutlined } from '@ant-design/icons'
import moment from 'moment'

import ws from '../../../assets/image/wslist_1.jpg'

function WorkshopInfor() {
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 4,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  }
  const { RangePicker } = TimePicker

  const categories = [
    'Art',
    'Music',
    'Technology',
    'Craft',
    'DIY',
    'Entertainment',
  ]
  const normFile = (e) => {
    console.log('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e?.fileList
  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }
  const defaultFileList = [
    {
      uid: '-1', // Unique ID for the file
      name: 'example.png', // File name
      status: 'done', // Status can be: uploading, done, error, removed
      url: 'https://www.facebook.com/photo/?fbid=3768477830040621&set=a.1383853121836449', // URL to the file
    },
    {
      uid: '-2',
      name: 'sample.jpg',
      status: 'done',
      url: 'https://www.facebook.com/photo/?fbid=3768477830040621&set=a.1383853121836449',
    },
  ]
  const workshop = {
    WorkshopId: 'W12345',
    'date-time-picker': moment(),
    updatedDate: moment(),
    category: categories[1],
    address: {
      province: VietnameseProvinces[2],
      street: '123 Main St',
    },
    WSDate: moment('2023-12-01'),
    WSTime: [moment('2023-12-01 10:00'), moment('2023-12-01 12:00')],
    capacity: 20,
    desc: 'This is a sample workshop description.',
    imagedesc: defaultFileList, // Set this to defaultFileList
  }

  return (
    <>
      <Form
        variant="outlined"
        {...formItemLayout}
        style={{
          maxWidth: '90%',
        }}
        initialValues={workshop} // Set workshop object as default values
      >
        {/*id */}
        <Form.Item label="Workshop Id" name="WorkshopId">
          <Input disabled />
        </Form.Item>
        {/*ceated date */}
        <Form.Item name="date-time-picker" label="Create Date" disabled>
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" disabled />
        </Form.Item>
        {/*updated date */}
        <Form.Item name="date-time-picker" label="Updated Date" disabled>
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" disabled />
        </Form.Item>
        {/*title */}
        <Form.Item
          label="Workshop Title"
          name="WorkshopId"
          rules={[
            {
              required: true,
              message: 'Please fill in Workshop Title',
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/*category */}
        <Form.Item
          label="Category"
          name="category"
          rules={[
            {
              required: true,
              message: 'Please choose category',
            },
          ]}
        >
          <Select placeholder="Category">
            {categories.map((c) => (
              <Option key={c} value={c}>
                {c}
              </Option>
            ))}
          </Select>
        </Form.Item>
        {/*address */}
        <Form.Item
          label="Address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Space.Compact>
            <Form.Item
              name={['address', 'province']}
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Province is required',
                },
              ]}
            >
              <Select
                rules={[
                  {
                    required: true,
                    message: 'Street is required',
                  },
                ]}
                placeholder="Province"
                style={{
                  width: '150px',
                }}
              >
                {VietnameseProvinces.map((province) => (
                  <Option key={province} value={province}>
                    {province}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name={['address', 'street']}
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Street is required',
                },
              ]}
            >
              <Input
                style={{
                  width: '490px',
                }}
                placeholder="Street"
              />
            </Form.Item>
          </Space.Compact>
        </Form.Item>
        {/*date */}
        <Form.Item
          label="Workshop Date"
          name="WSDate"
          rules={[
            {
              required: true,
              message: 'Please fill in workshop date!',
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        {/*time */}
        <Form.Item
          label="Workshop Time"
          name="WSTime"
          rules={[
            {
              required: true,
              message: 'Workshop Time is required',
            },
          ]}
        >
          <RangePicker />
        </Form.Item>
        {/*capacity */}
        <Form.Item
          label="Capacity"
          name="capacity"
          disabled
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
            disabled
            style={{
              width: '100%',
            }}
          />
        </Form.Item>
        {/*Banner */}
        <Form.Item name="banner" label="Banner Image">
          <Upload
            name="bannerImage"
            action="/upload.do"
            listType="picture"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        {/*description */}
        <Form.Item
          name="desc"
          label="Description"
          rules={[
            {
              required: true,
              message: 'Please input Description',
            },
          ]}
        >
          <Input.TextArea
            style={{
              height: 150,
              resize: 'none',
            }}
            showCount
            maxLength={500}
          />
        </Form.Item>
        {/*Image */}
        <Form.Item
          name="imagedesc"
          label="Description Image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            defaultFileList={defaultFileList}
            action="/upload.do"
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
      </Form>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              defaultBg: '#543310',
              defaultColor: '#F8F4E1',
              defaultActiveBg: '#543310',
              defaultHoverBg: '#543310',
              defaultHoverColor: '#F8F4E1',
            },
          },
        }}
      >
        <Button style={{ padding: '20px 30px', marginLeft: '170px' }}>
          Submit
        </Button>
      </ConfigProvider>
    </>
  )
}

export default WorkshopInfor
