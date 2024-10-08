import {
  Button,
  Col,
  Divider,
  Form,
  Image,
  Input,
  Layout,
  Row,
} from 'antd'
import './../../components/login/Login.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { BackwardOutlined, LoadingOutlined } from '@ant-design/icons'
import imager from '../../assets/image/login.jpg'
import LoginForm from '../../components/login/FormLogin.jsx'
import { useForm } from 'react-hook-form'

function Login() {
  const navigate = useNavigate()
  const [isSendOTP, setIsSendOTP] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingSendOTP, setIsLoadingSendOTP] = useState(false)
  const [isLoadingResetPassword, setIsLoadingResetPassword] = useState(false)
  const [isFogotPasswords, setIsFogotPasswords] = useState(false)
  // const [form] = useForm()

  const setFogotPassword = () => {
    setIsFogotPasswords(!isFogotPasswords)
  }

  return (
    <>
      {isLoading ? (
        <div>
          <LoadingOutlined />
        </div>
      ) : (
        <>
          <Layout className="Layout-login">
            <div
              className="login-page"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Row
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Col
                  span={14}
                  style={{
                    padding: ' 6rem 14rem',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  {isFogotPasswords ? (
                    <>
                      <div className="p-[43px]">
                        <Button
                          className="absolute left-7 top-16"
                          icon={<BackwardOutlined />}
                          onClick={setFogotPassword}
                        >
                          Back to Login
                        </Button>
                        <h1 className="title-login">Forgot Password</h1>
                        <div className="form-login">
                          {!isSendOTP ? (
                            <Form>
                              <Form.Item
                                name="email"
                                rules={[
                                  {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                  },
                                ]}
                              >
                                <Input placeholder="Email" />
                              </Form.Item>

                              <Button
                                style={{ backgroundColor: '#543310' }}
                                type="primary"
                                htmlType="submit"
                                loading={isLoadingSendOTP}
                              >
                                Send reset link
                              </Button>
                            </Form>
                          ) : (
                            <Form>
                              <Form.Item
                                name="otp"
                                rules={[
                                  {
                                    required: true,
                                    message: 'Please input the OTP!',
                                  },
                                ]}
                              >
                                <Input placeholder="Enter OTP" />
                              </Form.Item>
                              <Form.Item
                                name="newPassword"
                                rules={[
                                  {
                                    required: true,
                                    message: 'Please input your new password!',
                                  },
                                ]}
                              >
                                <Input.Password placeholder="New Password" />
                              </Form.Item>
                              <Form.Item
                                name="confirmPassword"
                                dependencies={['newPassword']}
                                hasFeedback
                                rules={[
                                  {
                                    required: true,
                                    message: 'Please confirm your password!',
                                  },
                                  ({ getFieldValue }) => ({
                                    validator(_, value) {
                                      if (
                                        !value ||
                                        getFieldValue('newPassword') === value
                                      ) {
                                        return Promise.resolve()
                                      }
                                      return Promise.reject(
                                        new Error(
                                          'The two passwords do not match!'
                                        )
                                      )
                                    },
                                  }),
                                ]}
                              >
                                <Input.Password placeholder="Confirm Password" />
                              </Form.Item>

                              <Button
                                type="primary"
                                htmlType="submit"
                                loading={isLoadingResetPassword}
                              >
                                Verify OTP and Reset Password
                              </Button>
                            </Form>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <h1 className="title-login" style={{ width: '300px' }}>
                        Sign in
                      </h1>
                      <div className="form-login">
                        <LoginForm handleFogot={setFogotPassword} />
                        <Divider plain style={{ padding: '15px' }}>
                          <span>Or</span>
                        </Divider>

                        <div style={{ textAlign: 'center' }}>
                          <p>
                            You don't have an account?{' '}
                            <Link
                              style={{ fontSize: '16px', padding: '10px' }}
                              to={'/register'}
                            >
                              {' '}
                              Sign up
                            </Link>{' '}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </Col>
                <Col span={8} className="image-login" style={{ padding: 0 }}>
                  <Image
                    preview={false}
                    src={imager}
                    style={{ height: '60vh' }}
                  />
                </Col>
              </Row>
            </div>
          </Layout>
        </>
      )}
    </>
  )
}

export default Login
