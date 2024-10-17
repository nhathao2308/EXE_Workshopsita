import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Import useNavigate

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { Avatar, Card, Descriptions } from 'antd'
import ws1 from '../../../assets/image/wslist_1.jpg'
import { style } from 'framer-motion/client'

function WorkshopCard() {
  const navigate = useNavigate() // Initialize useNavigate

  const actions = [
    <EditOutlined
      key="edit"
      onClick={() => navigate('/update-workshop')} // Navigate to update workshop
    />,
  ]
  const Workshop = {
    workshop_id: '234e5678-f90b-12d3-a456-426614174003', // Example UUID
    organizer_id: '678e5432-d21b-32d4-a456-426614174004', // Example UUID
    title: 'Potery Workshop for Beginer',
    slug: 'improv-comedy-basics',
    description:
      'Join us for a fun-filled workshop to learn the basics of improv comedy, perfect for beginners!',
    category: 'Art', // Example UUID
    location_city: 'Los Angeles',
    location_district: 'Hollywood',
    location_address: '456 Comedy Lane, Los Angeles, CA',
    latitude: 34.052235,
    longitude: -118.243683,
    start_time: new Date('2024-11-15T14:00:00Z'), // Example start time
    end_time: new Date('2024-11-15T17:00:00Z'), // Example end time
    price: 49.99,
    currency_code: 'USD',
    capacity: 20,
    video_url: 'https://example.com/improv-workshop-video',
    status: 'upcoming', // Default status
    created_at: new Date('2024-10-01T12:00:00Z'), // Example created date
    updated_at: new Date('2024-10-01T12:00:00Z'), // Example updated date
  }
  return (
    <Card
      hoverable // Added to enable hover effect
      actions={actions}
      style={{
        maxWidth: '350px',
        transition: 'box-shadow 0.3s', // Added for smooth transition
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)' // Shadow on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none' // Remove shadow when not hovering
      }}
      cover={
        <img
          src={ws1}
          style={{
            width: '100%',
            height: '150px',
            alignItems: 'center',
            padding: '5px',
          }}
        />
      }
    >
      <Card.Meta
        title={Workshop.title}
        description={
          <Descriptions
            column={1} // Added to ensure descriptions stack vertically
            style={{ wordWrap: 'break-word' }} // Added to allow text to wrap within the card
          >
            <Descriptions.Item label="Category">
              {Workshop.category}
            </Descriptions.Item>

            <Descriptions.Item label="Location">
              {Workshop.location_city}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              {Workshop.status}
            </Descriptions.Item>
            <Descriptions.Item label="Start time">
              {Workshop.start_time.toLocaleString()}
            </Descriptions.Item>
            <Descriptions.Item label="End time">
              {Workshop.end_time.toLocaleString()}
            </Descriptions.Item>
          </Descriptions>
        }
      />
    </Card>
  )
}

export default WorkshopCard
