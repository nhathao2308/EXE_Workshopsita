import { Layout, Row, Col, Image, Button } from 'antd'
import logo from './../../assets/image/logo_square_bg.png'
const { Footer } = Layout
import './Footer.scss'
import {
  FacebookFilled,
  InstagramFilled,
  PhoneFilled,
  SendOutlined,
} from '@ant-design/icons'

function CustomFooter() {
  return (
    <Footer
      style={{
        backgroundColor: '#f8f4e1',
        color: '#543310',
        padding: '100px 50px 80px 0px',
        marginLeft: -44,
      }}
    >
      <Row justify={'space-between'} style={{ margin: '0 100px' }}>
        <Col span={5} className="footer-logo">
          <Image style={{}} src={logo} preview={false} />
          <h1 style={{ fontSize: 22, marginTop: -100, textAlign: 'center' }}>
            Workshopista
          </h1>
        </Col>
        <Col span={5}>
          <div className="containerF">
            <p className="title">Contact us</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div>
                <p>
                  <PhoneFilled
                    style={{
                      fontSize: '22px',
                      color: '#fff',
                      padding: '12px',
                      backgroundColor: '#543310',
                      borderRadius: '50%',
                    }}
                  />
                </p>
              </div>
              <div>
                <p className="subtitle">Call us</p>
                <p>0911623890</p>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: '20px',
              }}
            >
              <div>
                <p>
                  <SendOutlined
                    style={{
                      fontSize: '22px',
                      color: '#fff',
                      padding: '12px',
                      backgroundColor: '#543310',
                      borderRadius: '50%',
                    }}
                  />
                </p>
              </div>
              <div>
                <p className="subtitle">Send us an Email</p>
                <p>worshopista@gmail.com</p>
              </div>
            </div>
          </div>
        </Col>

        <Col span={5}>
          <div className="containerF">
            <h4 className="title">Organize your workshop</h4>
            <p style={{ width: '280px' }} className="content">
              Sign up your own organization to Workshopista to create your
              workshop
            </p>

            <Button
              type="primary"
              style={{
                backgroundColor: '#543310 ',
                height: '45px',
                width: '120px',
                marginTop: '20px',
              }}
            >
              <p style={{ fontWeight: '600' }}>Sign up</p>
            </Button>
          </div>
        </Col>
        <Col span={5}>
          <div className="containerF">
            <p className="title">Social networks</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div>
                <p>
                  <FacebookFilled
                    style={{
                      fontSize: '22px',
                      color: '#fff',
                      padding: '10px',
                      backgroundColor: '#0866ff',
                      borderRadius: '50%',
                    }}
                  />
                </p>
              </div>
              <div>
                <p className="subtitle">Facebook</p>
                <p>https://www.facebook.com/workshopista</p>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: '20px',
              }}
            >
              <div>
                <p>
                  <InstagramFilled
                    style={{
                      fontSize: '22px',
                      color: '#fff',
                      padding: '12px',
                      backgroundColor: '#ff0268 ',
                      borderRadius: '50%',
                    }}
                  />
                </p>
              </div>
              <div>
                <p className="subtitle">Instagram</p>
                <p>https://www.instagram.com/workshopista</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Footer>
  )
}

export default CustomFooter
