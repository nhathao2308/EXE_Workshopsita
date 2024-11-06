import React from 'react'
import { Table } from 'antd'
import ReviewAnalystics from './ReviewAnalystics'

function ReviewTable() {
  const { Column } = Table
  const data = [
    {
      key: '1',
      user: 'John Doe',
      rating: 5,
      comment: 'Excellent workshop!',
      created: '2023-10-01',
      updated: '2023-10-02',
      status: 'Completed',
    },
    {
      key: '2',
      user: 'Jane Smith',
      rating: 4,
      comment: 'Very informative.',
      created: '2023-10-03',
      updated: '2023-10-04',
      status: 'Completed',
    },
    {
      key: '3',
      user: 'Alice Johnson',
      rating: 3,
      comment: 'It was okay, could be better.',
      created: '2023-10-05',
      updated: '2023-10-06',
      status: 'Pending',
    },
    {
      key: '4',
      user: 'Bob Brown',
      rating: 2,
      comment: 'Not what I expected.',
      created: '2023-10-07',
      updated: '2023-10-08',
      status: 'Pending',
    },
    {
      key: '5',
      user: 'Charlie Davis',
      rating: 5,
      comment: 'Loved it! Highly recommend.',
      created: '2023-10-09',
      updated: '2023-10-10',
      status: 'Completed',
    },
  ]
  return (
    <>
      <ReviewAnalystics />

      <Table dataSource={data} style={{ padding: '20px' }}>
        <Column title="User" dataIndex="user" key="user" />
        <Column title="Rating" dataIndex="rating" key="rating" />
        <Column title="Comment" dataIndex="comment" key="comment" />
        <Column title="Created" dataIndex="created" key="created" />
        <Column title="Updated" dataIndex="updated" key="updated" />
        <Column title="Status" dataIndex="status" key="status" />
      </Table>
    </>
  )
}

export default ReviewTable
