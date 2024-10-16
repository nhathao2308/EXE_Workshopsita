import React from 'react'
import { Row } from 'antd'
import LandingPage from '../../components/LandingPage/LandingPage'
import CustomFooter from '../../components/Footer/CustomFooter'

function AboutUs() {
  return (
    <div
      style={{
        flex: 1,
        overflow: 'auto',
      }}
    >
      <Row style={{ marginTop: '80px' }}>
        <LandingPage />
      </Row>
      <CustomFooter />
    </div>
  )
}

export default AboutUs
