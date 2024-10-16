import React from 'react'

import { useState } from 'react'
import './WorkshopList.scss'
import { Col, Divider, Row, Pagination, ConfigProvider } from 'antd'
import { navigate } from '../../utils/navigate'
import logo from '../../assets/image/logo_square_bg.png'
import { FieldTimeOutlined, CompassOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import ws1 from '../../assets/image/wslist_1.jpg'
import ws2 from '../../assets/image/wslist_2.jpg'
import ws3 from '../../assets/image/wslist_3.jpg'

function WorkshopList() {
  const [current, setCurrent] = useState(3)
  const navigate = useNavigate()
  const onChange = (page) => {
    console.log(page)
    setCurrent(page)
  }
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: '#f8f4e1',
          colorBorder: '#543310',
          colorPrimary: '#543310',
          colorPrimaryText: '#543310',
          colorBgTextHover: '#f8f4e1',
        },
      }}
    >
      <div className="list-container">
        <Row>
          <div className="intro">
            <img src={logo} alt="logo" />
            <p>
              Unlock Your Potential: Join the Workshop and Learn from the Best!
            </p>
            <h1> OUR WORKSHOP</h1>
          </div>
        </Row>
        <div className="workshop-container">
          <Row justify={'space-around'} align={'top'}>
            <Col span={7} className="workshop-item">
              <div className="image">
                <img src={ws1} alt="logo" />
              </div>
              <div className="info">
                <h1>Potery hands workshops</h1>
                <h3>Date and time</h3>
                <p>
                  <FieldTimeOutlined style={{ marginRight: '5px' }} /> 04 Nov
                  2019, 10.00 to 15.00
                </p>
                <Divider />
                <h3>Location</h3>
                <p>
                  <CompassOutlined style={{ marginRight: '10px' }} />
                  1234 Main St, Anytown, USA
                </p>

                <button
                  className="workshop-btn"
                  onClick={() => navigate('/workshop-detail')}
                >
                  Book now
                </button>
              </div>
            </Col>
            <Col span={7} className="workshop-item">
              <div className="image">
                <img src={ws2} alt="logo" />
              </div>
              <div className="info">
                <h1>Potery hands workshops</h1>
                <h3>Date and time</h3>
                <p>
                  <FieldTimeOutlined style={{ marginRight: '5px' }} /> 04 Nov
                  2019, 10.00 to 15.00
                </p>
                <Divider />
                <h3>Location</h3>
                <p>
                  <CompassOutlined style={{ marginRight: '10px' }} />
                  1234 Main St, Anytown, USA
                </p>
                <button
                  className="workshop-btn"
                  onClick={() => navigate('/workshop-detail')}
                >
                  Book now
                </button>
              </div>
            </Col>
            <Col span={7} className="workshop-item">
              <div className="image">
                <img src={ws3} alt="logo" />
              </div>
              <div className="info">
                <h1>Potery hands workshops</h1>
                <h3>Date and time</h3>
                <p>
                  <FieldTimeOutlined style={{ marginRight: '5px' }} /> 04 Nov
                  2019, 10.00 to 15.00
                </p>
                <Divider />
                <h3>Location</h3>
                <p>
                  <CompassOutlined style={{ marginRight: '10px' }} />
                  1234 Main St, Anytown, USA
                </p>
                <button
                  className="workshop-btn"
                  onClick={() => navigate('/workshop-detail')}
                >
                  Book now
                </button>{' '}
              </div>
            </Col>
          </Row>
          <Row justify={'space-around'} align={'top'}>
            <Col span={7} className="workshop-item">
              <div className="image">
                <img src={ws1} alt="logo" />
              </div>
              <div className="info">
                <h1>Potery hands workshops</h1>
                <h3>Date and time</h3>
                <p>
                  <FieldTimeOutlined style={{ marginRight: '5px' }} /> 04 Nov
                  2019, 10.00 to 15.00
                </p>
                <Divider />
                <h3>Location</h3>
                <p>
                  <CompassOutlined style={{ marginRight: '10px' }} />
                  1234 Main St, Anytown, USA
                </p>
                <button
                  className="workshop-btn"
                  onClick={() => navigate('/workshop-detail')}
                >
                  Book now
                </button>{' '}
              </div>
            </Col>
            <Col span={7} className="workshop-item">
              <div className="image">
                <img src={ws2} alt="logo" />
              </div>
              <div className="info">
                <h1>Potery hands workshops</h1>
                <h3>Date and time</h3>
                <p>
                  <FieldTimeOutlined style={{ marginRight: '5px' }} /> 04 Nov
                  2019, 10.00 to 15.00
                </p>
                <Divider />
                <h3>Location</h3>
                <p>
                  <CompassOutlined style={{ marginRight: '10px' }} />
                  1234 Main St, Anytown, USA
                </p>
                <button
                  className="workshop-btn"
                  onClick={() => navigate('/workshop-detail')}
                >
                  Book now
                </button>{' '}
              </div>
            </Col>
            <Col span={7} className="workshop-item">
              <div className="image">
                <img src={ws3} alt="logo" />
              </div>
              <div className="info">
                <h1>Potery hands workshops</h1>
                <h3>Date and time</h3>
                <p>
                  <FieldTimeOutlined style={{ marginRight: '5px' }} /> 04 Nov
                  2019, 10.00 to 15.00
                </p>
                <Divider />
                <h3>Location</h3>
                <p>
                  <CompassOutlined style={{ marginRight: '10px' }} />
                  1234 Main St, Anytown, USA
                </p>
                <button
                  className="workshop-btn"
                  onClick={() => navigate('/workshop-detail')}
                >
                  Book now
                </button>{' '}
              </div>
            </Col>
          </Row>
          <Row justify={'center'} align={'middle'}>
            <Pagination
              style={{ marginTop: '100px' }}
              current={current}
              onChange={onChange}
              total={50}
            />
          </Row>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default WorkshopList
