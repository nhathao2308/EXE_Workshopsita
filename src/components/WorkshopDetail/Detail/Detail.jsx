import React from 'react'
import { Row, Col, Divider, InputNumber } from 'antd'
import {
  FieldTimeOutlined,
  CompassOutlined,
  UsergroupAddOutlined,
  MoneyCollectOutlined,
} from '@ant-design/icons'
import ws1 from '../../../assets/image/wslist_1.jpg'
import o1 from '../../../assets/image/oragnizer1.jpg'
import './Detail.scss'
function Detail() {
  return (
    <div className="detail-container">
      <div className="intro">
        <p>
          <a href="/workshop-list">Back to all workshops</a>
        </p>
        <h1>Blossom & Bloom Workshop</h1>
        <p>15 Feb 2024</p>
      </div>
      <div className="organizer">
        <div className="avatar">
          <img src={o1} alt="" />
        </div>
        <div className="name">
          <h1>
            <a>Art Museum</a>
          </h1>
          <p>Since 20022</p>
        </div>
      </div>
      <Divider />
      <div className="detail">
        <div className="item-container">
          <div className="infor">
            <h3>Date & Time</h3>
            <p>
              <FieldTimeOutlined style={{ marginRight: '10px' }} />
              04 Nov 2019, 10.00 to 15.00
            </p>
            <Divider />
            <h3>Location</h3>
            <p>
              <CompassOutlined style={{ marginRight: '10px' }} />
              1234 Main St, Anytown, USA
            </p>
            <Divider />
            <h3>Organizer</h3>
            <p>
              <UsergroupAddOutlined style={{ marginRight: '10px' }} />
              Egypt Historical Museum
            </p>
            <Divider />
            <h3>Ticket cost</h3>
            <p>
              <MoneyCollectOutlined style={{ marginRight: '10px' }} />
              Children: 10 VND
            </p>
            <p>
              <MoneyCollectOutlined style={{ marginRight: '10px' }} />
              Adults: 30 VND
            </p>
          </div>

          <div className="image">
            <img src={ws1} alt="" />
          </div>
        </div>
        <div className="booking">
          <h1>Tickets</h1>
          <Divider />
          <div className="ticket">
            <h3>Children ticket</h3>
            <InputNumber
              min={0}
              max={10}
              placeholder="0"
              defaultValue={0}
              style={{
                width: '100%',
              }}
            />
            <p>10 VND</p>
          </div>

          <div className="ticket">
            <h3>Adults ticket</h3>
            <InputNumber
              min={0}
              max={10}
              placeholder="0"
              defaultValue={0}
              style={{
                width: '100%',
              }}
            />
            <p>30 VND</p>
          </div>

          <Divider />
          <div className="total">
            <h3>Total: 40 VND</h3>
            <button>Buy now</button>
          </div>
        </div>
      </div>
      <div className="description">
        <h1>About this workshop</h1>
        <p>
          Join us for a vibrant and hands-on floral design workshop where nature
          meets creativity! Whether you're a gardening enthusiast, an aspiring
          florist, or simply looking for a fun, relaxing experience, this
          workshop is designed for all skill levels. During the session,
          participants will explore the fundamentals of flower arrangement,
          including color theory, flower selection, and composition techniques.
          Guided by a professional floral designer, you will learn how to create
          stunning centerpieces, elegant bouquets, and unique seasonal displays
          that bring the beauty of nature into your home. Participants will have
          access to a rich assortment of fresh, seasonal blooms, greenery, and
          all the necessary tools. Leave the workshop with your own handcrafted
          floral creation, plus tips and tricks to continue your floral journey
          at home.
        </p>
      </div>
    </div>
  )
}

export default Detail
