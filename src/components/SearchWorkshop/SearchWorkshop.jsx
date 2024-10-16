import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../Animation/variant'
import { Input, Select, DatePicker, Button } from 'antd'
import {
  SearchOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
} from '@ant-design/icons'
import './SearchWorkshop.scss'

function SearchWorkshop() {
  const { Option } = Select

  return (
    <div className="search-container">
      <div className="search-title">
        <h1>Workshopista</h1>
        <h3>Search for you workshop</h3>
      </div>
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
            <CalendarOutlined style={{ fontSize: '20px', color: '#543310' }} />
          }
        />

        {/* Search Button */}
        <Button type="primary" size="large" className="search-btn">
          Search
        </Button>
      </motion.div>
    </div>
  )
}

export default SearchWorkshop
