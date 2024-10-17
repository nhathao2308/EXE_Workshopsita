import React from 'react'
import WorkshopCard from './WorkshopCard'
import { Content } from 'antd/es/layout/layout'
import { useNavigate } from 'react-router-dom'

import { Row, Col, Pagination, ConfigProvider, Tabs } from 'antd'
import { useState } from 'react'

function WorkshopTable() {
  const [current, setCurrent] = useState(3)
  const navigate = useNavigate()
  const onChange = (page) => {
    console.log(page)
    setCurrent(page)
  }

  return (
    <>
      <Row justify="space-around" align="stretch" gutter={[8, 16]}>
        <Col span={7}>
          <WorkshopCard />
        </Col>
        <Col span={7}>
          <WorkshopCard />
        </Col>
        <Col span={7}>
          <WorkshopCard />
        </Col>
        <Col span={7}>
          <WorkshopCard />
        </Col>
        <Col span={7}>
          <WorkshopCard />
        </Col>
        <Col span={7}>
          <WorkshopCard />
        </Col>
      </Row>
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
        <Row justify={'center'} align={'middle'}>
          <Pagination
            style={{ marginTop: '100px' }}
            current={current}
            onChange={onChange}
            total={50}
          />
        </Row>
      </ConfigProvider>
    </>
  )
}

export default WorkshopTable
