import React from 'react'
import { Button, Space, Table } from 'antd'

function ListTicketModal() {
  const { Column, ColumnGroup } = Table
  const [currentPage, setCurrentPage] = React.useState(1) // {{ edit_1 }} - Added state for current page

  const data = [
    {
      key: '1',
      ticketId: 'TICKET-001', // {{ edit_1 }} - Added ticket Id
      customerId: 'CUST-001', // {{ edit_2 }} - Added customer Id
      customerName: 'Alice', // {{ edit_3 }} - Added customer Name
      status: 'Paid', // {{ edit_4 }} - Added status
      paymentTime: '2023-10-01 10:00 AM', // {{ edit_5 }} - Added payment time
    },
    {
      key: '2',
      ticketId: 'TICKET-002', // {{ edit_1 }} - Added ticket Id
      customerId: 'CUST-002', // {{ edit_2 }} - Added customer Id
      customerName: 'Bob', // {{ edit_3 }} - Added customer Name
      status: 'Used', // {{ edit_4 }} - Added status
      paymentTime: '2023-10-02 11:00 AM', // {{ edit_5 }} - Added payment time
    },
    {
      key: '3',
      ticketId: 'TICKET-003', // {{ edit_1 }} - Added ticket Id
      customerId: 'CUST-003', // {{ edit_2 }} - Added customer Id
      customerName: 'Charlie', // {{ edit_3 }} - Added customer Name
      status: 'Paid', // {{ edit_4 }} - Added status
      paymentTime: '2023-10-03 09:30 AM', // {{ edit_5 }} - Added payment time
    },
    {
      key: '4',
      ticketId: 'TICKET-004', // {{ edit_1 }} - Added ticket Id
      customerId: 'CUST-004', // {{ edit_2 }} - Added customer Id
      customerName: 'Diana', // {{ edit_3 }} - Added customer Name
      status: 'Used', // {{ edit_4 }} - Added status
      paymentTime: '2023-10-04 01:00 PM', // {{ edit_5 }} - Added payment time
    },
    {
      key: '5',
      ticketId: 'TICKET-005', // {{ edit_1 }} - Added ticket Id
      customerId: 'CUST-005', // {{ edit_2 }} - Added customer Id
      customerName: 'Ethan', // {{ edit_3 }} - Added customer Name
      status: 'Paid', // {{ edit_4 }} - Added status
      paymentTime: '2023-10-05 03:45 PM', // {{ edit_5 }} - Added payment time
    },
    // ... more records as needed ...
  ]

  const handleTableChange = (pagination) => {
    setCurrentPage(pagination.current)
  }

  return (
    <>
      <Table
        dataSource={data}
        style={{ padding: '20px' }}
        pagination={{
          pageSize: 3,
          current: currentPage, // {{ edit_3 }} - Set current page for pagination
          onChange: handleTableChange, // {{ edit_4 }} - Handle page change
        }}
      >
        <ColumnGroup>
          <Column title="Ticket ID" dataIndex="ticketId" key="ticketId" />
          <Column title="Customer ID" dataIndex="customerId" key="customerId" />
        </ColumnGroup>

        <Column
          title="Customer Name"
          dataIndex="customerName"
          key="customerName"
        />
        <Column
          title="Status"
          dataIndex="status"
          key="status"
          filters={[
            { text: 'Paid', value: 'Paid' },
            { text: 'Used', value: 'Used' },
          ]}
          onFilter={(value, record) => record.status.indexOf(value) === 0}
        />
        <Column
          title="Payment Time"
          dataIndex="paymentTime"
          key="paymentTime"
        />
      </Table>
    </>
  )
}

export default ListTicketModal
