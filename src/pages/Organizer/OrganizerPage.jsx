import React, { useState, useCallback } from 'react'
import { Layout, Menu, ConfigProvider, Row } from 'antd'
import {
  HomeOutlined,
  UserOutlined,
  LogoutOutlined,
  PayCircleOutlined,
} from '@ant-design/icons'
import { notification } from 'antd'
import Organizer from '../../components/Organization/Organizer/Organizer'
import Profile from '../../components/profile/profile'

import Sider from 'antd/es/layout/Sider'
import { Content } from 'antd/es/layout/layout'
import { logOut, selectCurrentToken } from '../../slices/auth.slice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import WorkshopTable from '../../components/Organization/WorkshopTable/WorkshopTable'
import WorkshopTabs from '../../components/Organization/WorkshopTable/WorkshopTabs'
import SubcriptionTable from '../../components/Organization/WorkshopTable/SubcriptionTable'
import OrganizerIncome from '@/components/Organization/Organizer/OrganizerIncome'

const OrganizerPage = () => {
  const [selectedKey, setSelectedKey] = useState('1')
  const [collapsed, setCollapsed] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const ticket = (isSelected) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      style={{
        fontSize: '10px',
        fill: isSelected ? '#74512D' : '#F8F4E1', // Change fill color based on selection
        width: '15px',
        height: '15px',
      }}
    >
      <path d="M64 64C28.7 64 0 92.7 0 128l0 64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6l0-64c0-35.3-28.7-64-64-64L64 64zm64 112l0 160c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-320 0c-17.7 0-32-14.3-32-32l0-192z" />
    </svg>
  )
  const promotion = (isSelected) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      style={{
        fontSize: '10px',
        fill: isSelected === '3' ? '#74512D' : '#F8F4E1', // Change fill color based on selection
        width: '15px',
        height: '15px',
      }}
    >
      <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM229.5 173.3l72 144c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7L253.2 328l-90.3 0-5.4 10.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l72-144c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3zM208 237.7L186.8 280l42.3 0L208 237.7zM392 256a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm24-43.9l0-28.1c0-13.3 10.7-24 24-24s24 10.7 24 24l0 96 0 48c0 13.3-10.7 24-24 24c-6.6 0-12.6-2.7-17-7c-9.4 4.5-19.9 7-31 7c-39.8 0-72-32.2-72-72s32.2-72 72-72c8.4 0 16.5 1.4 24 4.1z" />
    </svg>
  )
  const handleLogout = useCallback(() => {
    dispatch(logOut())
    notification.success({
      message: 'Logout successfully',
      description: 'See you again!',
      duration: 1.5,
    })
    navigate('/login')
  }, [dispatch, navigate])

  const renderContent = () => {
    switch (selectedKey) {
      case '1':
        return <Organizer />
      case '2':
        return <WorkshopTabs />
      case '5':
        handleLogout()
        return null
      case '4':
        return <Profile />
      case '3':
        return <SubcriptionTable />
      case '6':
        return <OrganizerIncome />
      default:
        return <Organizer />
    }
  }
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            triggerColor: '#f8f4e1',
            triggerBg: '#74512D',
            siderBg: '#74512D',
          },
          Menu: {
            itemSelectedColor: '#74512d',
            itemSelectedBg: '#f8f4e1',
          },
        },
        token: {
          colorText: '##F8F4E1',
        },
      }}
    >
      <Sider
        width={200}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="sider-custom"
      >
        <Menu
          className="pt-10"
          mode="inline"
          defaultSelectedKeys={['1']}
          selectedKeys={[selectedKey]}
          onClick={(e) => setSelectedKey(e.key)}
          style={{
            height: '100vh',
            borderRight: 0,
            backgroundColor: '#74512D',
            color: '#F8F4E1',
            paddingTop: '80px',
          }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            My Organization
          </Menu.Item>
          <Menu.Item key="2" icon={ticket(selectedKey === '2')}>
            My Workshop
          </Menu.Item>
          <Menu.Item key="3" icon={promotion(selectedKey === '3')}>
            Subcription
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
          <Menu.Item key="6" icon={<PayCircleOutlined />}>
            Income
          </Menu.Item>
          <Menu.Item key="5" icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Content className="p-6  rounded-lg shadow-lg layout-content">
        {renderContent()}
      </Content>
    </ConfigProvider>
  )
}

export default OrganizerPage
