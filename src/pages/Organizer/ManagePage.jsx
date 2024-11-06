import React from 'react'
import { Collapse } from 'antd'
import '../../assets/font/font.scss'
import WorkshopInfor from '../../components/Organization/WorkshopTable/WorkshopInfor'
import { Content } from 'antd/es/layout/layout'
import TicketInfor from '../../components/Organization/WorkshopTable/TicketInfor'
import PromotionList from '../../components/Organization/WorkshopTable/PromotionList'
import { Tabs, ConfigProvider } from 'antd'
import ReviewTable from '../../components/Organization/WorkshopTable/ReviewTable'
import WorkshopAnalystics from '../../components/Organization/WorkshopTable/WorkshopAnalystics'
const onChange = (key) => {
  console.log(key)
}
const items = [
  {
    key: '1',
    label: 'Workshop Information',
    children: <WorkshopInfor />,
  },
  {
    key: '2',
    label: 'Ticket',
    children: <TicketInfor />,
  },
  {
    key: '3',
    label: 'Promotion',
    children: <PromotionList />,
  },
  {
    key: '4',
    label: 'Review',
    children: <ReviewTable />,
  },
  {
    key: '5',
    label: 'Analystics',
    children: <WorkshopAnalystics />,
  },
]
function ManagePage() {
  return (
    <>
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
        <div
          style={{
            padding: '40px',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F8F4E1',
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              padding: '50px',
              fontFamily: 'Raleway-Bold',
              fontSize: '45px',
              color: '#543310',
            }}
          >
            Manage Workshop
          </h1>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </ConfigProvider>
    </>
  )
}

export default ManagePage
