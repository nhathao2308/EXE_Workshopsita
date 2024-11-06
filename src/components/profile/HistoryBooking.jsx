import React from 'react'
import { Table, Space, Tabs, ConfigProvider } from 'antd'
import { title } from 'framer-motion/client'
import TableTicket from './TableTicket'

const HistoryBooking = () => {
  const onChange = (key) => {
    console.log(key)
  }
  const items = [
    {
      key: '1',
      label: 'All',
      children: <TableTicket />,
    },
    {
      key: '2',
      label: 'On-going',
      children: <TableTicket />,
    },
    {
      key: '3',
      label: 'Completed',
      children: <TableTicket />,
    },
    {
      key: '4',
      label: 'Cancelled',
      children: <TableTicket />,
    },
  ]
  return (
    <ConfigProvider
      theme={{
        components: {
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
      <div style={{ color: '#74512D' }}>
        <h2 className="text-2xl font-semibold mb-6">My ticket</h2>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </ConfigProvider>
  )
}

export default HistoryBooking
