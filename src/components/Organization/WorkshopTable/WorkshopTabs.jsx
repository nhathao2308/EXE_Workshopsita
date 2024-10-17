import { Content } from 'antd/es/layout/layout'
import React from 'react'
import { useNavigate } from 'react-router-dom' // Import useNavigate

import WorkshopTable from './WorkshopTable'
import { Tabs, ConfigProvider, Button } from 'antd'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { style } from 'framer-motion/client'
import './WorkshopTabs.scss'
const { Search } = Input

const onChangeTab = (key) => {
  console.log(key)
}
const onSearch = (value, _e, info) => console.log(info?.source, value)

const items = [
  {
    key: '1',
    label: 'All',
    children: <WorkshopTable />,
  },
  {
    key: '2',
    label: 'Up-comming',
    children: <WorkshopTable />,
  },
  {
    key: '3',
    label: 'Completed',
    children: <WorkshopTable />,
  },
  {
    key: '4',
    label: 'Canceled',
    children: <WorkshopTable />,
  },
]

function WorkshopTabs() {
  const navigate = useNavigate()

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            // Customize the enterButton styles
            search: {
              button: {
                backgroundColor: '#AF8F6F',
                border: 'none',
                color: '#fff', // Optional: Change text color
              },
            },
          },
          Tabs: {
            itemColor: '#74512D',
            itemHoverColor: '#74512D',
            itemSelectedColor: '#74512d',
            itemSelectedBg: '#74512D',
            inkBarColor: '#74512D',
          },
        },
      }}
    >
      <Content>
        <div
          style={{
            color: '#74512D',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <h2 className="text-2xl font-semibold mb-6">My Workshop</h2>

          <Search
            className="custom-search"
            style={{ width: '50%' }}
            placeholder="Search by workshop title"
            onSearch={onSearch}
            enterButton
          />
        </div>
        <button
          className="btn-submit "
          onClick={() => {
            console.log('create workshop')
            navigate('/create-workshop')
          }}
        >
          New Workshop
        </button>
        <Tabs defaultActiveKey="1" items={items} onChange={onChangeTab} />
      </Content>
    </ConfigProvider>
  )
}

export default WorkshopTabs
