import React, { useState, useEffect } from 'react'
import './HomeSlider.scss'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons' // Import icons
import { ConfigProvider } from 'antd'
import home from '../../../assets/image/thenest_cover.jpg'
import home2 from '../../../assets/image/hien_cover.jpg'
import home3 from '../../../assets/image/thocamco_cover.jpg'
import home4 from '../../../assets/image/candle_cover.jpg'

const contentStyle = {
  margin: 0,
  height: '300px', // Increased height
  color: '#fff',
  lineHeight: '300px',
  textAlign: 'center',
  background: '#364d79',
}

const HomeSlider = () => {
  const [key, setKey] = useState(0)

  useEffect(() => {
    setKey((prevKey) => prevKey + 1) // This forces re-render
  }, [])

  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            arrowSize: 30,
          },
        },
      }}
    >
      <div className="carousel-container mt-10">
        <Carousel
          key={key}
          afterChange={onChange}
          autoplay={true}
          autoplaySpeed={3000}
          arrows={true}
          dots={false}
        >
          <div className="image-container">
            <img className="image" src={home} alt="home" />
          </div>
          <div className="image-container">
            <img className="image" src={home2} alt="home" />
          </div>
          <div className="image-container">
            <img className="image" src={home3} alt="home" />
          </div>
          <div className="image-container">
            <img className="image" src={home4} alt="home" />
          </div>
        </Carousel>
      </div>
    </ConfigProvider>
  )
}

export default HomeSlider
