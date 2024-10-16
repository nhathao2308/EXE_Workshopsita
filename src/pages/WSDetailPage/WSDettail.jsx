import React from 'react'
import './WSDetail.scss'
import { Row } from 'antd'
import Detail from '../../components/WorkshopDetail/Detail/DEtail'
import CustomFooter from '../../components/Footer/CustomFooter'

function WSDettail() {
  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <Row style={{ marginTop: '150px' }}>
        <Detail />
      </Row>
      <CustomFooter />
    </div>
  )
}

export default WSDettail
