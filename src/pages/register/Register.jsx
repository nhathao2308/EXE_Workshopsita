import {
  Button,
  Col,
  Form,
  Image,
  Input,
  Layout,
  Row,
  message,
  Modal
} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
// import { useAddUserMutation } from '../../services/userAPI';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import './Register.scss'
import imager from '../../assets/image/register.jpg'
import { validationPatterns } from '@/utils/utils'
import { RegisterService, VerifyOtpService } from '@/services/authAPI'
import { useState } from 'react'

const Register = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')

  const [open, setOpen] = useState(false)

  const handleSubmitOtp = async () => {
    console.log(otp)
    console.log(email)
    await VerifyOtpService(otp, email)
    message.success('Register successfully')
    navigate('/login')
  }

  const handleSubmit = async (values) => {
    const user = await RegisterService(values)
    if (user.success == false) {
      message.error(user.errors[0])
      return
    }
    message.success(user.data)
    form.resetFields()
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <Layout className="register-layout">
      <Row className="row-layout" style={{}}>
        <Col>
          <div className="content-layout-register">
            <div className="form-register">
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2 className="title-login">Sign Up</h2>
              </div>
              <Form form={form} onFinish={handleSubmit}>
                {/* <Form form={form}> */}
                <Form.Item
                  hasFeedback
                  label="Email"
                  name="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                  }}
                  rules={[
                    {
                      required: true,
                      pattern: validationPatterns.email.pattern,
                      message: validationPatterns.email.message
                    }
                  ]}
                >
                  <Input type="" placeholder="Email" className="form-input" />
                </Form.Item>
                <Form.Item
                  hasFeedback
                  label="First name"
                  name="firstname"
                  rules={[
                    {
                      required: true,
                      pattern: validationPatterns.name.pattern,
                      message: validationPatterns.name.message
                    }
                  ]}
                >
                  <Input
                    type=""
                    placeholder="First name"
                    className="form-input"
                  />
                </Form.Item>
                <Form.Item
                  hasFeedback
                  label="Last name"
                  name="lastname"
                  rules={[
                    {
                      required: true,
                      pattern: validationPatterns.name.pattern,
                      message: validationPatterns.name.message
                    }
                  ]}
                >
                  <Input
                    type=""
                    placeholder="Last name"
                    className="form-input"
                  />
                </Form.Item>
                {/* <Form.Item
                  hasFeedback
                  label="Address"
                  name="address"
                  rules={[
                    {
                      required: true
                      //     pattern: validationPatterns.name.pattern,
                      //     message: validationPatterns.name.message,
                    }
                  ]}
                >
                  <Input type="" placeholder="Address" className="form-input" />
                </Form.Item> */}
                <Form.Item
                  hasFeedback
                  label="Phone number"
                  name="phonenumber"
                  rules={[
                    {
                      required: true,
                      pattern: validationPatterns.phoneNumber.pattern,
                      message: validationPatterns.phoneNumber.message
                    }
                  ]}
                >
                  <Input
                    type=""
                    placeholder="Phone number"
                    className="form-input"
                  />
                </Form.Item>

                {/* <Form.Item
                  hasFeedback
                  label="Gender"
                  name="gender"
                  rules={[{ required: true, message: 'Please select gender!' }]}
                >
                  <Radio.Group>
                    <Radio value={'Male'}>Male</Radio>
                    <Radio value={'Female'}>Female</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  hasFeedback
                  label="DOB"
                  name="dateOfBirth"
                  rules={[
                    // { required: true, message: "Please select your date of birth!" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value) {
                          return Promise.reject(
                            new Error('Please select a valid date of birth!')
                          )
                        }
                        const selectedYear = value.year()
                        const nowYear = new Date().getFullYear()
                        const yearChecked = nowYear - selectedYear
                        if (yearChecked >= 18 && yearChecked <= 100) {
                          return Promise.resolve()
                        } else {
                          if (yearChecked < 18) {
                            return Promise.reject(
                              new Error('You must be at least 18 years old!')
                            )
                          } else if (yearChecked > 100) {
                            return Promise.reject(
                              new Error(
                                'Invalid age! Please select a valid date of birth.'
                              )
                            )
                          }
                        }
                      }
                    })
                  ]}
                >
                  <DatePicker
                    format="DD/MM/YYYY"
                    placeholder="DD/MM/YYYY"
                    onChange={(date, dateString) => {
                      if (dateString) {
                        const formattedDate = dayjs(dateString, 'DD/MM/YYYY')
                        form.setFieldsValue({ dob: formattedDate })
                      }
                    }}
                    onBlur={() => {
                      const value = form.getFieldValue('dob')
                      if (value && dayjs(value, 'DD/MM/YYYY').isValid()) {
                        form.setFieldsValue({ dob: dayjs(value, 'DD/MM/YYYY') })
                      }
                    }}
                  />
                </Form.Item> */}
                <Form.Item
                  hasFeedback
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      pattern: validationPatterns.password.pattern,
                      message: validationPatterns.password.message
                    }
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    className="form-input"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>
                <Form.Item
                  hasFeedback
                  label="Re-Type Password"
                  name="retypePassword"
                  rules={[
                    { required: true, message: 'Please re-type the password!' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve()
                        }
                        return Promise.reject(
                          new Error('The passwords do not match!')
                        )
                      }
                    })
                  ]}
                >
                  <Input.Password
                    placeholder="Re-type password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>

                <Form.Item>
                  {/* {!isLoading ? (
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}>
                      <button
                        type="primary"
                        htmlType="submit"
                        className="submit-btn"
                      >
                        Register
                      </button>

                      <div style={{ marginLeft: '2rem' }}>
                        <span>Already have account ?</span>
                        <Link to={"/login"}><span style={{ fontSize: '16px', marginLeft: '16px' }}>Login</span> </Link>
                      </div>

                    </div>

                  ) : ( */}
                  <div className="flex items-center pt-6 mt-1">
                    <Button
                      style={{ backgroundColor: '#543310' }}
                      className="w-36  h-14"
                      htmlType="submit"
                      type="primary"
                      loading={false}
                    >
                      Register
                    </Button>

                    <div style={{ marginLeft: '2rem' }}>
                      <span>Already have account ?</span>
                      <Link to={'/login'}>
                        <span style={{ fontSize: '16px', marginLeft: '16px' }}>
                          Login
                        </span>{' '}
                      </Link>
                    </div>
                  </div>
                  {/* )} */}
                </Form.Item>
              </Form>
            </div>
            <div className="image-register">
              <Image preview={false} src={imager} height={660} width={450} />
            </div>
          </div>
        </Col>
      </Row>
      <Modal
        open={open}
        title="Please enter Otp that we sent to your email !!!"
        onCancel={handleCancel}
        footer={
          [
            // <Button key="back" onClick={handleCancel}>
            //   Return
            // </Button>,
            // <Button
            //   key="submit"
            //   type="primary"
            //   loading={loading}
            //   onClick={handleOk}
            // >
            //   Submit
            // </Button>
          ]
        }
      >
        <Form form={form} onFinish={handleSubmitOtp} className="mt-5">
          <Form.Item
            hasFeedback
            label="Otp"
            name="otp"
            value={otp}
            onChange={(event) => {
              setOtp(event.target.value)
            }}
            rules={[
              {
                required: true,
                pattern: validationPatterns.Otp.pattern,
                message: validationPatterns.Otp.message
              }
            ]}
          >
            <Input type="" placeholder="Otp" className="form-input" />
          </Form.Item>

          <Form.Item>
            <div className="flex items-center  align-baseline justify-end">
              <Button
                style={{ backgroundColor: '#543310' }}
                className="w-30  h-10 "
                htmlType="submit"
                type="primary"
                loading={false}
              >
                Submit
              </Button>
            </div>
            {/* )} */}
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  )
}

export default Register
