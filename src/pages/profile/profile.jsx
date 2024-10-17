import React, { useState } from 'react'
import { Layout, Menu, ConfigProvider } from 'antd'
import { UserOutlined, HistoryOutlined, LockOutlined } from '@ant-design/icons'
import HistoryBooking from '../../components/profile/HistoryBooking'
import Privacy from '../../components/profile/Privacy'
import Profile from '../../components/profile/profile'
import './profile.scss'

const { Sider, Content } = Layout

const ProfilePage = () => {
  const [selectedKey, setSelectedKey] = useState('1')
  const [collapsed, setCollapsed] = useState(false)

  const renderContent = () => {
    switch (selectedKey) {
      case '1':
        return <Profile />
      case '2':
        return <HistoryBooking />
      case '3':
        return <Privacy />
      default:
        return <Profile />
    }
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            triggerColor: '#f8f4e1',
            triggerBg: '#74512D',
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
      <Layout className="min-h-screen pt-[100px]">
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
              height: '100%',
              borderRight: 0,
              backgroundColor: '#74512D',
              color: '#F8F4E1',
              paddingTop: '80px',
            }}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              Profile
            </Menu.Item>
            <Menu.Item key="2" icon={<HistoryOutlined />}>
              My ticket
            </Menu.Item>
            <Menu.Item key="3" icon={<LockOutlined />}>
              Privacy
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="p-6 layout-container">
          <Content className="p-6 bg-white rounded-lg shadow-lg layout-content">
            {renderContent()}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default ProfilePage
