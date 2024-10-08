import { Row } from 'antd'

import './Dashboard.scss'

import CustomFooter from '../../components/Footer/CustomFooter'
import Searchbox from '../../components/Home/Search/Searchbox'
import HomeSlider from '../../components/Home/HomeSlider/HomeSlider'
import Workshop from '../../components/Home/Workshop/Workshop'
import Guide from '../../components/Home/Guide/Guide'
import News from '../../components/Home/News/News'
function Dashboard() {
  return (
    <div
      style={{
        flex: 1,
        overflow: 'auto',
      }}
    >
      <Row style={{ marginTop: '80px' }}>
        <HomeSlider />
        <Searchbox />
        <Workshop />
        <Guide />
        <News />
      </Row>
      <CustomFooter />
    </div>
  )
}

export default Dashboard
