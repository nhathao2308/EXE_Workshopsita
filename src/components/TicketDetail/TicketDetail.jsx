import React from 'react'
import './TicketDetail.scss'
import { Container } from 'postcss'
import { CompassOutlined } from '@ant-design/icons'
import { Col, Row, Space, QRCode } from 'antd'
import { Divider } from 'antd'
import ws1 from '../../assets/image/wslist_1.jpg'
import qr from '../../assets/image/qr.jpg'
function TicketDetail() {
  const [text, setText] = React.useState('https://ant.design/')

  return (
    <div className="ticket-container">
      <Row justify="space-around">
        <Col span={10}>
          <img src={ws1} alt="" />
        </Col>
        <Col span={10}>
          <div className="infor">
            <div className="title">Potery frame workshop</div>
            <div className="date">
              <p>
                <strong>Date:</strong> 2024-05-01
              </p>
              <p>
                <strong>Time:</strong> 10:00 - 12:00
              </p>
            </div>
            <p>
              <CompassOutlined style={{ marginRight: '10px' }} />
              <span>16 Nguyen Thi Minh Khai District 1 HCM</span>
            </p>
          </div>
        </Col>
      </Row>
      <Divider />
      <div className="description">
        <div className="name">
          <p>
            <strong>Ticket name:</strong>
          </p>
          <p>
            <strong> Ticket price:</strong>
          </p>
          <p>
            <strong>Status:</strong>
          </p>
        </div>
        <div className="price">
          <p>Adults ticket</p>
          <p>100.000 VND</p>
          <p>On-going</p>
        </div>
      </div>
      <Divider />
      <div className="qrCode">
        {/* <Space direction="vertical" align="center">
          <QRCode value={text || '-'} />
        </Space> */}
        <img src={qr} alt="" style={{ width: '200px', height: '200px' }} />
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>123456</h1>
      </div>
    </div>
  )
}

export default TicketDetail
