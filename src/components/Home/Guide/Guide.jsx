import React from 'react'

import './Guide.scss'
import { Row, Col } from 'antd'
import logo from '../../../assets/image/logo_square_bg.png'
import guide1 from '../../../assets/image/guide_1.jpg'
import guide2 from '../../../assets/image/guide_2.jpg'
import { fadeIn } from '../../Animation/variant'
import { motion } from 'framer-motion'

const Guide = () => {
  return (
    <div className="guide-container">
      <Row>
        <div className="intro">
          <img src={logo} alt="logo" />
          <p>Buy ticket on Workshopista</p>
          <h1>3 STEPS TO BE SAFE</h1>
        </div>
      </Row>
      <Row justify="start">
        <Col span={8}>
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            className="guide-item"
          >
            <div className="guide-image">
              <img src={guide1} alt="guide1" />
            </div>
            <div className="guide-content">
              <h1>01.</h1>
              <h1 style={{ marginBottom: '60px' }}>Check available workshop</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                veniam deserunt eos labore magnam at fuga est illo adipisci
                voluptates sequi, provident odio perspiciatis ex, architecto
                deleniti itaque id cumque.
              </p>
            </div>
          </motion.div>
        </Col>
        <Col span={8}>
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="guide-item"
          >
            <div className="guide-image">
              <img src={guide2} alt="guide1" />
            </div>
            <div className="guide-content">
              <h1>02.</h1>
              <h1 style={{ marginBottom: '60px' }}>
                Buy ticket on Workshopista
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                veniam deserunt eos labore magnam at fuga est illo adipisci
                voluptates sequi, provident odio perspiciatis ex, architecto
                deleniti itaque id cumque.
              </p>
            </div>
          </motion.div>
        </Col>
        <Col span={8}>
          <motion.div
            variants={fadeIn('right', 0.8)}
            initial="hidden"
            whileInView={'show'}
            className="guide-item"
          >
            <div className="guide-image">
              <img src={guide1} alt="guide1" />
            </div>
            <div className="guide-content">
              <h1>03.</h1>
              <h1 style={{ marginBottom: '60px', marginTop: '20px' }}>
                Send feedback to us
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                veniam deserunt eos labore magnam at fuga est illo adipisci
                voluptates sequi, provident odio perspiciatis ex, architecto
                deleniti itaque id cumque.
              </p>
            </div>
          </motion.div>
        </Col>
      </Row>
    </div>
  )
}

export default Guide
