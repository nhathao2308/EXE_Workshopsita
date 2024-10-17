import React, { useState } from 'react'
import { Table, Space, Modal } from 'antd'
import TicketDetail from '../TicketDetail/TicketDetail'
function TableTicket() {
  const [modal2Open, setModal2Open] = useState(false)

  const columns = [
    {
      title: 'Ticket ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Ticket Type',
      dataIndex: 'ticketType',
      key: 'ticketType',
    },
    {
      title: 'Workshop',
      dataIndex: 'workshop',
      key: 'workshop',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => {
        let color = 'black'
        if (text === 'Caceled') color = 'green'
        if (text === 'Paid') color = 'red'
        if (text === 'Completed') color = 'blue'
        return <span style={{ color }}>{text}</span>
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <button className="btn-submit" onClick={() => setModal2Open(true)}>
            Details
          </button>
          <Modal
            footer={false}
            title="Ticket Detail"
            centered
            open={modal2Open}
            onOk={() => setModal2Open(false)}
            onCancel={() => setModal2Open(false)}
          >
            <TicketDetail />
          </Modal>
          {record.status === 'Completed' && (
            <button
              className="btn-submit"
              style={{ backgroundColor: '#AF8F6F' }}
            >
              Feedback
            </button>
          )}
        </Space>
      ),
    },
  ]

  const data = [
    {
      key: '1',
      id: '12345',
      ticketType: 'Adult',
      workshop: 'Workshop 1',
      date: '2023-01-01',
      status: 'Completed',
    },
    {
      key: '1',
      id: '12345',
      ticketType: 'Adult',
      workshop: 'Workshop 1',
      date: '2023-01-01',
      status: 'Paid',
    },
    {
      key: '1',
      id: '12345',
      ticketType: 'Adult',
      workshop: 'Workshop 1',
      date: '2023-01-01',
      status: 'Canceled',
    },
  ]
  return <Table columns={columns} dataSource={data} pagination={true} />
}

export default TableTicket
