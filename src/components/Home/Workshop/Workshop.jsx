import React, { useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { fadeIn } from '../../Animation/variant'
import { Row, Col, Flex, Button, ConfigProvider } from 'antd'
import './Workshop.scss'
import logo from '../../../assets/image/logo_square_bg.png'
import ws1 from '../../../assets/image/ws_cafe.png'
import ws2 from '../../../assets/image/ws_coktail.png'
import ws3 from '../../../assets/image/ws_ncdt.png'

import { motion, useScroll, useTransform } from 'framer-motion'
const Workshop = () => {
  const ref = useRef(null)
  const navigate = useNavigate()
  // Use the scroll position of the element
  const { scrollYProgress } = useScroll({
    target: ref, // Track the scrolling within the 'component-container'
    offset: ['start end', 'end start'], // Start and end positions for the animation
  })

  // Animate opacity and position based on scroll progress

  const y = useTransform(scrollYProgress, [0, 1], [250, -80]) // Moves the component up as you scroll
  return (
    <div className="component-container">
      <Row className="intro">
        <Col className="logo-container" span={19}>
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
          >
            <img src={logo} alt="logo" />
            <p>Don't miss the opportunities</p>
            <h1>Upcoming Workshops</h1>
          </motion.div>
        </Col>
        <Col span={5}>
          <div className="book-event">
            <a href="/workshop-list">Book event</a>
          </div>
        </Col>
      </Row>
      <Row
        className="workshop"
        justify="space-around"
        align="middle"
        style={{ height: '80vh' }}
      >
        <Col span={7} className="workshop-container">
          <div className="workshop-poster">
            <img src={ws1} alt="ws1" />
          </div>
          <div className="workshop-title">
            <a href="/workshop-list">
              {' '}
              <h2>HARD DRIP DAY WORKSHOP IN HO CHI MINH CITY</h2>
            </a>
            <p>Saturday, 20th May 2024</p>
          </div>
        </Col>
        <Col
          span={7}
          className="workshop-container"
          style={{ alignSelf: 'end' }}
        >
          <motion.div
            ref={ref} // Attach ref to scroll tracking
            style={{
              y, // Y-position transforms based on scroll progress
              height: '100%',
              width: '100%',
            }}
          >
            <div className="workshop-poster">
              <img src={ws2} alt="ws1" />
            </div>
            <div className="workshop-title">
              <a href="/workshop-detail">
                {' '}
                <h2>HARD DRIP DAY WORKSHOP</h2>
              </a>
              <p>Saturday, 20th May 2024</p>
            </div>
          </motion.div>
        </Col>
        <Col span={7} className="workshop-container">
          <div style={{ height: '100%', width: '100%' }}>
            <div className="workshop-poster">
              <img src={ws3} alt="ws1" />
            </div>
            <div className="workshop-title">
              <a href="/workshop-detail">
                {' '}
                <h2>HARD DRIP DAY WORKSHOP</h2>
              </a>
              <p>Saturday, 20th May 2024</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          display: Flex,
          justifyContent: 'center ',
          alignItems: 'center',
        }}
      >
        <button
          className="workshop-btn"
          onClick={() => navigate('/workshop-list')}
        >
          View All Workshop
        </button>
      </Row>
    </div>
  )
}

export default Workshop
