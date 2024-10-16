import { Row } from 'antd'
import CustomFooter from '../../components/Footer/CustomFooter'
import React, { useState, useEffect } from 'react'
import SearchWorkshop from '../../components/SearchWorkshop/SearchWorkshop'
import WorkshopList from '../../components/WorkshopList/WorkshopList'
import './WorkshopList.scss'
const WorkshopListPage = () => {
  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <Row style={{ marginTop: '150px' }}>
        <SearchWorkshop />
        <WorkshopList />
      </Row>
      <CustomFooter />
    </div>
  )
}

export default WorkshopListPage
