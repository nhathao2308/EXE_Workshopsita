import React from 'react'
import './Searchbox.scss'
import { Input, Button, DatePicker, Select, ConfigProvider } from 'antd'
import {
  SearchOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
} from '@ant-design/icons'
import { fadeIn } from '../../Animation/variant'
import { motion } from 'framer-motion'
const { Option } = Select

const Searchbox = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            activeBorderColor: '#543310',
            activeOutlineColor: 'rgba(175, 143, 111, 0.2)',
            hoverBorderColor: '#543310',
          },
        },
      }}
    >
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        className="search-container"
      >
        <p>Search for</p>
        <h1>Workshops</h1>

        <motion.div
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          whileInView={'show'}
          className="search-box"
        >
          {/* Service or establishment input */}
          <Input
            className="input-item"
            size="large"
            placeholder="Workshop"
            prefix={
              <SearchOutlined style={{ fontSize: '20px', color: '#543310' }} />
            }
          />
          {/* Location (Select Component) */}
          <Select
            className="input-item"
            size="large"
            placeholder="City"
            defaultValue="0"
            suffixIcon={
              <EnvironmentOutlined
                style={{ fontSize: '20px', color: '#543310' }}
              />
            }
          >
            <Option value="0">All</Option>
            <Option value="1">Ho Chi Minh</Option>
            <Option value="2">Ha Noi</Option>
            <Option value="3">Da Nang</Option>
          </Select>

          {/* Date Picker */}
          <DatePicker
            className="input-item"
            size="large"
            placeholder="Date"
            suffixIcon={
              <CalendarOutlined
                style={{ fontSize: '20px', color: '#543310' }}
              />
            }
          />

          {/* Search Button */}
          <Button type="primary" size="large" className="search-btn">
            Search
          </Button>
        </motion.div>
      </motion.div>
    </ConfigProvider>
  )
}

export default Searchbox
