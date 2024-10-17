import { Outlet } from 'react-router-dom'
import { Layout, theme } from 'antd'

const { Header, Sider, Content } = Layout

const AdminLayout = () => {
  return (
    <Layout id="layout-body" style={{ backgroundColor: '#ffffff' }}>
      <Content
        style={{
          display: 'flex',
          minHeight: 500,
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  )
}

export default AdminLayout
