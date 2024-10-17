import React from 'react'
import { Table } from 'antd'
import { Tag } from 'antd'
import { EditOutlined, UnorderedListOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'

const SubcriptionTable = () => {
  const { Column, ColumnGroup } = Table
  const data = [
    {
      key: 1,
      subscription_id: 'e1234567-89ab-cdef-0123-456789abcdef',
      user_id: 'f1234567-89ab-cdef-0123-456789abcdef',
      tier: 'free',
      start_date: '2023-01-01T12:00:00Z',
      end_date: '2024-01-01T12:00:00Z',
      auto_renew: true,
      created_at: '2023-01-01T12:00:00Z',
      updated_at: '2023-01-01T12:00:00Z',
    },
    {
      key: 2,
      subscription_id: 'e2234567-89ab-cdef-0123-456789abcdef',
      user_id: 'f2234567-89ab-cdef-0123-456789abcdef',
      tier: 'basic',
      start_date: '2023-02-01T12:00:00Z',
      end_date: '2024-02-01T12:00:00Z',
      auto_renew: false,
      created_at: '2023-02-01T12:00:00Z',
      updated_at: '2023-02-01T12:00:00Z',
    },
    {
      key: 3,
      subscription_id: 'e3234567-89ab-cdef-0123-456789abcdef',
      user_id: 'f3234567-89ab-cdef-0123-456789abcdef',
      tier: 'pro',
      start_date: '2023-03-01T12:00:00Z',
      end_date: '2024-03-01T12:00:00Z',
      auto_renew: true,
      created_at: '2023-03-01T12:00:00Z',
      updated_at: '2023-03-01T12:00:00Z',
    },
    {
      key: 4,
      subscription_id: 'e4234567-89ab-cdef-0123-456789abcdef',
      user_id: 'f4234567-89ab-cdef-0123-456789abcdef',
      tier: 'enterprise',
      start_date: '2023-04-01T12:00:00Z',
      end_date: '2024-04-01T12:00:00Z',
      auto_renew: false,
      created_at: '2023-04-01T12:00:00Z',
      updated_at: '2023-04-01T12:00:00Z',
    },
  ]
  return (
    <>
      <h2
        className="text-2xl font-semibold mb-6"
        style={{ color: '#74512D', marginLeft: '30px' }}
      >
        My Workshop
      </h2>

      <Table dataSource={data} style={{ padding: '20px' }}>
        <Column
          title="stt"
          key="stt"
          render={(_, __, index) => index + 1}
          rendering
        />
        <Column title="Tier" dataIndex="tier" key="tier" />
        <Column
          title="Start Date"
          dataIndex="start_date"
          key="start_date"
          render={(_, record) => {
            // Updated to display the start date as a formatted string
            return <Tag>{dayjs(record.start_date).format('DD-MM-YYYY')}</Tag>
          }}
        />
        <Column
          title="End Date"
          dataIndex="end_date"
          key="end_date"
          render={(_, record) => {
            // Updated to display the start date as a formatted string
            return <Tag>{dayjs(record.end_date).format('DD-MM-YYYY')}</Tag>
          }}
        />
        <Column
          title="Auto Renew"
          dataIndex="auto_renew"
          key="auto_renew"
          render={(text) => (text ? 'Yes' : 'No')}
        />

        <Column title="Created At" dataIndex="created_at" key="created_at" />
        <Column title="Updated At" dataIndex="updated_at" key="updated_at" />
        <Column
          title="Status"
          key="status"
          render={(_, record) => {
            const now = new Date()
            const startDate = new Date(record.start_date)
            const endDate = new Date(record.end_date)
            const status =
              startDate <= now && endDate >= now ? 'Active' : 'Inactive'
            const color = status === 'Active' ? 'green' : 'red'
            return <Tag color={color}>{status}</Tag>
          }}
        />
      </Table>
    </>
  )
}

export default SubcriptionTable
