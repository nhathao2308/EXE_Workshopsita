import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Button,
  Layout,
  Menu,
  Drawer,
  Grid,
  Image,
  Dropdown,
  notification,
} from 'antd'
import './CustomHeader.scss'
import {
  DoubleRightOutlined,
  FacebookOutlined,
  FormOutlined,
  InstagramOutlined,
  LoginOutlined,
  LogoutOutlined,
  MenuOutlined,
  UserOutlined,
} from '@ant-design/icons'
import NameWeb from '../../../src/assets/image/logo_bg_remover.png'
import { logOut, selectCurrentToken } from '../../slices/auth.slice'
import { useDispatch, useSelector } from 'react-redux'
import { ConfigProvider } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Corrected import
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons' // Import the ticket icon

const { Header } = Layout
const { useBreakpoint } = Grid

const CustomHeader = () => {
  const screens = useBreakpoint()
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const user = useSelector(selectCurrentToken)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const handleLogout = useCallback(() => {
    dispatch(logOut())
    notification.success({
      message: 'Logout successfully',
      description: 'See you again!',
      duration: 1.5,
    })
    navigate('/login')
  }, [dispatch, navigate])

  const itemsNoLogin = useMemo(
    () => [
      {
        key: '1',
        label: (
          <Link
            to="/login"
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <p style={{ paddingRight: '20px' }}>Login</p> <LoginOutlined />
          </Link>
        ),
      },
      {
        key: '2',
        label: (
          <Link
            to="/register"
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <p style={{ paddingRight: '20px' }}>Register</p>{' '}
            <DoubleRightOutlined />
          </Link>
        ),
      },
    ],
    []
  )

  const items = useMemo(
    () => [
      {
        key: '1',
        label: (
          <p
            onClick={handleLogout}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <p style={{ paddingRight: '20px' }}>Profile</p>{' '}
            <DoubleRightOutlined />
          </p>
        ),
      },
      {
        key: '2',
        label: (
          <p
            onClick={handleLogout}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <p style={{ paddingRight: '20px' }}>Logout</p> <LogoutOutlined />
          </p>
        ),
      },
    ],
    [handleLogout]
  )

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemHoverBg: '#f8f4e1',
            itemSelectedColor: '#74512d',
            itemSelectedBg: '#f8f4e1',
          },
        },
      }}
    >
      <Header
        id="header"
        className={visible ? 'show' : 'hidden'}
        style={{ zIndex: '1000' }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Link to={'/'} style={{ marginLeft: '1rem' }}>
            <div className="header-logo">
              <Image src={NameWeb} preview={false} />
            </div>
          </Link>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['2']}
            overflowedIndicator={null} // Prevent overflow indicator
            style={{
              width: '40vw',
              backgroundColor: 'none',
              marginLeft: '10rem',
            }}
          >
            <Menu.Item key="2" className="menu-item">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.SubMenu key="sub1" title="Workshop" className="menu-item">
              <Menu.Item key="1-1">
                <Link to="/workshop-list">Art</Link>
              </Menu.Item>
              <Menu.Item key="1-2">
                <Link to="/workshop-list">Music</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="3" className="menu-item">
              <Link to="/">News</Link>
            </Menu.Item>
            <Menu.Item key="4" className="menu-item">
              <Link to="/about-us">About us</Link>
            </Menu.Item>
            <Menu.Item key="5" className="menu-item">
              <Link to="/about-us">Organizer</Link>
            </Menu.Item>
          </Menu>
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', zIndex: '110000' }}
        >
          <Dropdown
            menu={{ items: user ? items : itemsNoLogin }}
            placement="bottom"
            onOpenChange={(open) => setIsActive(open)}
          >
            <Button
              className={`btn-user ${isActive ? 'active' : ''}`}
              aria-label="User menu"
            >
              <UserOutlined
                style={{
                  fontSize: '20px',
                  color: isActive ? '#f8f4e1' : '#74512d',
                }}
              />
            </Button>
          </Dropdown>
        </div>
      </Header>
    </ConfigProvider>
  )
}

export default CustomHeader
