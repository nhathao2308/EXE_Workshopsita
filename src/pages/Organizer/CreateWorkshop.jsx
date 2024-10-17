import React, { useState } from 'react'
import { Button, message, Steps, theme, TimePicker } from 'antd'
import {
  Form,
  Input,
  DatePicker,
  Select,
  Space,
  Upload,
  InputNumber,
  ConfigProvider,
  Card,
  Typography,
  Checkbox,
} from 'antd'
import {
  UploadOutlined,
  CloseOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  LeftOutlined,
} from '@ant-design/icons'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function CreateWorkshop() {
  const { Option } = Select
  const [current, setCurrent] = useState(0)
  const [stepStatus, setStepStatus] = useState(['process', 'wait', 'wait'])
  const [checkedPromotions, setCheckedPromotions] = useState([])
  const navigate = useNavigate()
  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }
  const [form] = Form.useForm() // Use form instance
  const submitForm = () => {
    form
      .validateFields()
      .then(() => {
        // If validation succeeds, move to the next step and mark the current step as finished
        const updatedStatus = [...stepStatus]
        updatedStatus[current] = 'finish'
        setStepStatus(updatedStatus)
        console.log('Submit')
        next()
      })
      .catch(() => {
        // If validation fails, mark the current step as error
        message.error('Validation fail')
        const updatedStatus = [...stepStatus]
        updatedStatus[current] = 'error'
        setStepStatus(updatedStatus)
      })
  }
  const promotions = [
    {
      id: 1,
      type: 'Discount',
      startDate: '2024-10-12',
      endDate: '2024-10-20',
      price: 50,
    },
    {
      id: 2,
      type: 'Early Bird',
      startDate: '2024-10-01',
      endDate: '2024-10-05',
      price: 40,
    },
    {
      id: 3,
      type: 'Group',
      startDate: '2024-10-15',
      endDate: '2024-10-25',
      price: 30,
    },
  ]
  const checkPromotion = (e, promotion) => {
    if (e.target.checked) {
      setCheckedPromotions((prev) => [...prev, promotion])
    } else {
      setCheckedPromotions((prev) => prev.filter((p) => p.id !== promotion.id))
    }
  }

  useEffect(() => {
    console.log('Checked promotions:', checkedPromotions)
  }, [checkedPromotions])

  const steps = [
    {
      title: 'Workshop',
      content: (
        <div>
          <Form
            form={form}
            variant="outlined"
            style={{ maxWidth: '90%' }}
            initialValues={
              {
                /* Add initial workshop values here if needed */
              }
            }
          >
            {/* id */}
            <Form.Item label="Workshop Id" name="WorkshopId">
              <Input disabled />
            </Form.Item>

            {/* title */}
            <Form.Item
              label="Workshop Title"
              name="WorkshopTitle"
              rules={[
                { required: true, message: 'Please fill in Workshop Title' },
              ]}
            >
              <Input />
            </Form.Item>
            {/* category */}
            <Form.Item
              label="Category"
              name="category"
              rules={[{ required: true, message: 'Please choose a category' }]}
            >
              <Select placeholder="Category">
                {['Art', 'Craft', 'DIY'].map((c) => (
                  <Option key={c} value={c}>
                    {c}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            {/* address */}
            <Form.Item label="Address" rules={[{ required: true }]}>
              <Space.Compact>
                <Form.Item
                  name={['address', 'province']}
                  noStyle
                  rules={[{ required: true, message: 'Province is required' }]}
                >
                  <Select placeholder="Province" style={{ width: '150px' }}>
                    {['Hanoi', 'Saigon', 'Danang'].map((province) => (
                      <Option key={province} value={province}>
                        {province}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name={['address', 'street']}
                  noStyle
                  rules={[{ required: true, message: 'Street is required' }]}
                >
                  <Input style={{ width: '490px' }} placeholder="Street" />
                </Form.Item>
              </Space.Compact>
            </Form.Item>
            {/* date */}
            <Form.Item
              label="Workshop Date"
              name="WSDate"
              rules={[
                { required: true, message: 'Please fill in workshop date!' },
              ]}
            >
              <DatePicker />
            </Form.Item>
            {/* time */}
            <Form.Item
              label="Workshop Time"
              name="WSTime"
              rules={[{ required: true, message: 'Workshop Time is required' }]}
            >
              <TimePicker.RangePicker />
            </Form.Item>

            {/* Banner */}
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
            {/* Description */}
            <Form.Item
              name="desc"
              label="Description"
              rules={[{ required: true, message: 'Please input Description' }]}
            >
              <Input.TextArea
                style={{ height: 150, resize: 'none' }}
                showCount
                maxLength={500}
              />
            </Form.Item>
            <Form.Item name="imagedesc" label="Description Image">
              <Upload listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      title: 'Ticket',
      content: (
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          form={form}
          name="dynamic_form_complex"
        >
          <Form.List name="items">
            {(fields, { add, remove }) => (
              <div
                style={{
                  display: 'flex',
                  rowGap: 16,
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {fields.map((field) => (
                  <Card
                    size="small"
                    style={{ width: '80%' }}
                    title={`Ticket Range ${field.key + 1}`} // Label each card uniquely
                    key={field.key}
                    extra={
                      <CloseOutlined
                        onClick={() => {
                          remove(field.name)
                        }}
                      />
                    }
                  >
                    <Form.Item
                      {...field} // Spread field properties to uniquely link the item to the form
                      label="Rank Name"
                      name={[field.name, 'name']}
                      rules={[
                        { required: true, message: 'Rank Name is required' },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      label="Description"
                      name={[field.name, 'desc']}
                    >
                      <Input.TextArea />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      label="Price"
                      name={[field.name, 'price']}
                      rules={[{ required: true, message: 'Price is required' }]}
                    >
                      <InputNumber min={10000} />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      label="Capacity"
                      name={[field.name, 'cap']}
                      rules={[
                        { required: true, message: 'Capacity is required' },
                      ]}
                    >
                      <InputNumber min={0} />
                    </Form.Item>
                  </Card>
                ))}

                <Button type="dashed" onClick={() => add()} block>
                  + Add Ticket Range
                </Button>
              </div>
            )}
          </Form.List>
        </Form>
      ),
    },
    {
      title: 'Promotion',
      content: (
        <Form
          form={form}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
        >
          {promotions.map((promotion) => (
            <Checkbox
              key={promotion.id}
              onChange={(e) => checkPromotion(e, promotion)}
            >
              <Card
                title={promotion.type}
                style={{ marginBottom: 16, width: '100%' }}
              >
                <p>
                  <strong>Start Date:</strong> {promotion.startDate}
                </p>
                <p>
                  <strong>End Date:</strong> {promotion.endDate}
                </p>
                <p>
                  <strong>Price:</strong> ${promotion.price}
                </p>
              </Card>
            </Checkbox>
          ))}
        </Form>
      ),
    },
  ]
  const { token } = theme.useToken()

  const items = steps.map((item, index) => ({
    key: item.title,
    title: item.title,
    status: stepStatus[index],
  }))

  const contentStyle = {
    lineHeight: '26px',
    color: token.colorTextTertiary,
    backgroundColor: '#F5F5F7',
    borderRadius: token.borderRadiusLG,
    border: `1px dash #000 `,
    marginTop: 16,
    padding: 20,
  }

  return (
    <>
      <div
        style={{
          height: '100%',
          width: '100vw',
          padding: '30px',
        }}
      >
        <a href="/organizerhome">
          <LeftOutlined />
          Back to Organizer Home
        </a>
        <h1
          style={{
            textAlign: 'center',
            padding: '50px',
            fontFamily: 'Raleway-Bold',
            fontSize: '45px',
          }}
        >
          Create Workshop
        </h1>
        <Steps current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>

        <div style={{ marginTop: 24 }}>
          {current > 0 && (
            <Button
              style={{ margin: '0 8px', padding: '20px 30px' }}
              onClick={() => prev()}
            >
              <StepBackwardOutlined />
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button
              htmlType="submit"
              style={{ padding: '20px 30px' }}
              onClick={submitForm}
            >
              Next
              <StepForwardOutlined />
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button style={{ padding: '20px 30px' }}>Create workshop</Button>
          )}
        </div>
      </div>
    </>
  )
}

export default CreateWorkshop
