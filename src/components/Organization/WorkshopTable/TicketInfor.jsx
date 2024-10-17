import React, { useState } from 'react'
import {
  Button,
  Space,
  Table,
  Modal,
  Form,
  Input,
  InputNumber,
  ConfigProvider,
} from 'antd'
import UpdateTicketModal from './UpdateTicketModal'
import ListTicketModal from './ListTicketModal'
import { UnorderedListOutlined, EditOutlined } from '@ant-design/icons'
import FormItem from 'antd/es/form/FormItem'

function TicketInfor() {
  const { Column, ColumnGroup } = Table
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 4,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  }
  const data = [
    {
      key: '1',
      rank: 'Rank 1',
      available: 10,
      sold: 5,
      price: 100,
      desc: 'First ticket description Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni deleniti tenetur commodi officiis incidunt nostrum ullam rerum iusto reprehenderit. Cumque blanditiis rerum, deserunt quia mollitia dolor error eius consequatur.',
    },
    {
      key: '2',
      rank: 'Rank 2',
      available: 20,
      sold: 15,
      price: 150,
      desc: 'Second ticket description',
    },
    {
      key: '3',
      rank: 'Rank 3',
      available: 5,
      sold: 3,
      price: 200,
      desc: 'Third ticket description',
    },
  ]

  const [activeModal, setActiveModal] = useState(null) // Use a single state to manage active modal
  const [selectedRecord, setSelectedRecord] = useState(null)
  const [currentPage, setCurrentPage] = useState(1) // Define currentPage and setCurrentPage

  const handleOpenModal = (modalType, record) => {
    setSelectedRecord(record)
    setActiveModal(modalType)
  }

  // Handler to close any active modal
  const handleCloseModal = () => {
    setActiveModal(null)
  }

  return (
    <>
      <button
        style={{
          marginLeft: '20px',
          padding: '10px 20px',
          background: '#543310',
          color: '#F8F4E1',
          borderRadius: '5px',
          border: 'none',
          boxShadow: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        Scan ticket
      </button>
      <button
        style={{
          marginLeft: '20px',
          padding: '10px 20px',
          background: '#543310',
          color: '#F8F4E1',
          borderRadius: '5px',
          border: 'none',
          boxShadow: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none'
        }}
        onClick={() => {
          handleOpenModal('newTicketRange')
        }}
      >
        New Ticket Range
      </button>
      {/* New ticket range modal*/}
      <Modal
        height="70vh"
        width="800px"
        title="New Ticket"
        centered
        footer={false}
        open={activeModal === 'newTicketRange'}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
      >
        <Form {...formItemLayout}>
          <Form.Item
            label="Rank Name"
            name="name"
            rules={[{ required: true, message: 'Rank Name is required' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="desc">
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: 'Price is required' }]}
          >
            <InputNumber min={10000} />
          </Form.Item>

          <Form.Item
            label="Capacity"
            name="cap"
            rules={[{ required: true, message: 'Capacity is required' }]}
          >
            <InputNumber min={0} />
          </Form.Item>
          <FormItem>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    defaultBg: '#543310',
                    defaultColor: '#F8F4E1',
                    defaultActiveBg: '#543310',
                    defaultHoverBg: '#543310',
                    defaultHoverColor: '#F8F4E1',
                  },
                },
              }}
            >
              <Button
                htmlType="submit"
                style={{ padding: '20px 30px', marginLeft: '50px' }}
              >
                Submit
              </Button>
            </ConfigProvider>
          </FormItem>
        </Form>
      </Modal>
      <Table dataSource={data} style={{ padding: '20px' }}>
        <Column title="Rank" dataIndex="rank" key="rank" />
        <ColumnGroup title="Capacity">
          <Column title="Available" dataIndex="available" key="available" />
          <Column title="Sold" dataIndex="sold" key="sold" />
        </ColumnGroup>
        <Column title="Price" dataIndex="price" key="price" />
        <Column title="Description" dataIndex="desc" key="desc" />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Button
                onClick={() => {
                  handleOpenModal('update', record)
                }}
              >
                <EditOutlined />
                Update
              </Button>
              <Button
                onClick={() => {
                  handleOpenModal('tickets', record)
                }}
              >
                <UnorderedListOutlined />
                Tickets
              </Button>
            </Space>
          )}
        />
      </Table>

      {/* Update Ticket Modal */}
      <Modal
        title="Ticket Rank"
        centered
        open={activeModal === 'update'}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
      >
        <UpdateTicketModal ticket={selectedRecord} />
      </Modal>

      {/* List Ticket Modal */}
      <Modal
        height="70vh"
        width="800px"
        title={selectedRecord?.rank || 'Ticket Details'}
        centered
        open={activeModal === 'tickets'}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
      >
        <ListTicketModal
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Modal>
    </>
  )
}

export default TicketInfor
