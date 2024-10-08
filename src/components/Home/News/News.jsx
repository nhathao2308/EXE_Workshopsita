import { Row, Col } from 'antd'
import logo from '../../../assets/image/logo_square_bg.png'
import './News.scss'
import news1 from '../../../assets/image/news_1.jpg'
import { fadeIn } from '../../Animation/variant'
import { motion } from 'framer-motion'
import news2 from '../../../assets/image/news_2.jpg'
import news3 from '../../../assets/image/news_3.jpg'
const News = () => {
  return (
    <div className="news-container">
      <Row>
        <div className="intro">
          <img src={logo} alt="logo" />
          <p>Get latest updates and news</p>
          <h1> LATEST NEWS</h1>
        </div>
      </Row>

      <Row
        style={{
          margin: '80px',
          alignItems: 'start',
          justifyContent: 'center',
          gap: '50px',
        }}
        className="news-item"
      >
        <Col span={10}>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            className="news-image"
          >
            <img src={news1} alt="news1" />
          </motion.div>
        </Col>
        <Col span={10} justify="center" align="center">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            className="news-content"
            style={{ textAlign: 'right' }}
          >
            <p
              style={{
                backgroundColor: '#74512d',
                width: 'fit-content',
                padding: '2px 10px',
                color: '#ffffff',
              }}
            >
              Dec 26,2024
            </p>
            <h1>THE ULTIMATE GUIDE TO POTERY</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, doloremque.
            </p>
            <a>
              <p>Continue Reading</p>
            </a>
          </motion.div>
        </Col>
      </Row>
      <Row
        style={{
          margin: '80px',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '50px',
          textAlign: 'left',
        }}
        className="news-item"
      >
        <Col span={10} justify="center" align="center">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            className="news-content"
            style={{ textAlign: 'right' }}
          >
            <p
              style={{
                textAlign: 'left',
                backgroundColor: '#74512d',
                width: 'fit-content',
                padding: '2px 10px',
                color: '#ffffff',
              }}
            >
              Dec 26,2024
            </p>
            <h1>THE ULTIMATE GUIDE TO POTERY</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, doloremque.
            </p>
            <a>
              <p>Continue Reading</p>
            </a>
          </motion.div>
        </Col>
        <Col span={10}>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            className="news-image"
          >
            <img src={news2} alt="news1" />
          </motion.div>
        </Col>
      </Row>
      <Row
        style={{
          margin: '80px',
          alignItems: 'start',
          justifyContent: 'center',
          gap: '50px',
        }}
        className="news-item"
      >
        <Col span={10}>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            className="news-image"
          >
            <img src={news3} alt="news1" />
          </motion.div>
        </Col>
        <Col span={10} justify="center" align="center">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            className="news-content"
            style={{ textAlign: 'right' }}
          >
            <p
              style={{
                backgroundColor: '#74512d',
                width: 'fit-content',
                padding: '2px 10px',
                color: '#ffffff',
              }}
            >
              Dec 26,2024
            </p>
            <h1>THE ULTIMATE GUIDE TO POTERY</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, doloremque.
            </p>
            <a>
              <p>Continue Reading</p>
            </a>
          </motion.div>
        </Col>
      </Row>
      <Row style={{ marginBottom: '150px', marginTop: '100px' }}>
        <Col span={24}>
          <div
            className="book-event"
            style={{
              textAlign: 'center',
              marginLeft: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <a href="/workshop">Read more</a>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default News
