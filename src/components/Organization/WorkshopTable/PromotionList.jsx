import { useState } from 'react'
import React from 'react'
import { Table, Tag, Modal, Form, Checkbox, Card } from 'antd'
import { useEffect } from 'react'

function PromotionList() {
  const { Column } = Table

  const data = [
    {
      key: '1',
      promotion_type: 'banner',
      start_date: new Date('2023-10-01T00:00:00').toLocaleString(), // Adjusted to current date
      end_date: new Date('2023-12-31T23:59:59Z').toLocaleString(),
      price: 100.0,
      currency_code: 'USD',
      created_at: new Date('2023-01-01T00:00:00').toLocaleString(),
      updated_at: new Date('2023-01-01T00:00:00').toLocaleString(),
    },
    {
      key: '2',
      promotion_type: 'highlight',
      start_date: new Date('2023-10-01T00:00:00').toLocaleString(), // Adjusted to current date
      end_date: new Date('2023-10-31T23:59:Z').toLocaleString(),
      price: 150.0,
      currency_code: 'EUR',
      created_at: new Date('2023-01-01T00:00:00').toLocaleString(),
      updated_at: new Date('2023-01-01T00:00:00').toLocaleString(),
    },
    {
      key: '3',
      promotion_type: 'featured',
      start_date: new Date('2024-01-01T00:00:00').toLocaleString(), // Future date, not active
      end_date: new Date('2024-12-31T23:59:59Z').toLocaleString(),
      price: 200.0,
      currency_code: 'GBP',
      created_at: new Date('2023-01-01T00:00:00').toLocaleString(),
      updated_at: new Date('2023-01-01T00:00:00').toLocaleString(),
    },
  ]

  // Get the current date and time
  const now = new Date()

  // Function to determine the row class name
  const rowClassName = (record) => {
    const startDate = new Date(record.start_date)
    const endDate = new Date(record.end_date)
    // Check if the current date is within the promotion date range
    if (startDate <= now && endDate >= now) {
      return 'highlight-row' // Return a class name to highlight the row
    }
    return '' // No additional class
  }

  // Function to determine the tags for the status
  const renderTags = (record) => {
    const startDate = new Date(record.start_date)
    const endDate = new Date(record.end_date)
    console.log(now)
    console.log(endDate)
    console.log(endDate >= now)
    if (startDate <= now && endDate >= now) {
      console.log(startDate)
      return <Tag color="green">Active</Tag>
    } else {
      console.log(startDate)
      return <Tag color="red">Inactive</Tag>
    }
  }
  const [modal2Open, setModal2Open] = useState(false)
  const [checkedPromotions, setCheckedPromotions] = useState([])
  const promotions = [
    {
      id: 1,
      type: 'Discount',
      startDate: '2024-10-12',
      endDate: '2024-10-20',
      price: 50,
    },
    {
      id: 2,
      type: 'Early Bird',
      startDate: '2024-10-01',
      endDate: '2024-10-05',
      price: 40,
    },
    {
      id: 3,
      type: 'Group',
      startDate: '2024-10-15',
      endDate: '2024-10-25',
      price: 30,
    },
  ]
  const checkPromotion = (e, promotion) => {
    if (e.target.checked) {
      setCheckedPromotions((prev) => [...prev, promotion])
    } else {
      setCheckedPromotions((prev) => prev.filter((p) => p.id !== promotion.id))
    }
  }

  useEffect(() => {
    console.log('Checked promotions:', checkedPromotions)
  }, [checkedPromotions])
  return (
    <>
      <Table dataSource={data} style={{ padding: '20px' }}>
        <Column
          title="Promotion Type"
          dataIndex="promotion_type"
          key="promotion_type"
        />
        <Column title="Start Date" dataIndex="start_date" key="start_date" />
        <Column title="End Date" dataIndex="end_date" key="end_date" />
        <Column title="Price" dataIndex="price" key="price" />
        <Column
          title="Currency Code"
          dataIndex="currency_code"
          key="currency_code"
        />
        <Column title="Created At" dataIndex="created_at" key="created_at" />
        <Column title="Updated At" dataIndex="updated_at" key="updated_at" />
        <Column title="Status" key="status" render={renderTags} />{' '}
        {/* New Status Column */}
      </Table>

      <button
        style={{
          marginLeft: '20px',
          padding: '10px 20px',
          background: '#543310',
          color: '#F8F4E1',
          borderRadius: '5px',
          border: 'none', // {{ edit_1 }} - Initial border style
          boxShadow: 'none', // {{ edit_2 }} - Initial box shadow style
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)' // {{ edit_4 }} - Add box shadow on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none' // {{ edit_6 }} - Remove box shadow on mouse leave
        }}
        onClick={() => setModal2Open(true)}
      >
        {' '}
        Purchase Promotion
      </button>
      <Modal
        title="Promotion List"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <Form
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
        >
          {promotions.map((promotion) => (
            <Checkbox
              key={promotion.id}
              onChange={(e) => checkPromotion(e, promotion)}
            >
              <Card
                title={promotion.type}
                style={{ marginBottom: 16, width: '100%' }}
              >
                <p>
                  <strong>Start Date:</strong> {promotion.startDate}
                </p>
                <p>
                  <strong>End Date:</strong> {promotion.endDate}
                </p>
                <p>
                  <strong>Price:</strong> ${promotion.price}
                </p>
              </Card>
            </Checkbox>
          ))}
        </Form>
      </Modal>
    </>
  )
}

export default PromotionList
