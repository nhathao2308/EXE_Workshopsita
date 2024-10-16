import React from 'react'
import './LandingPage.scss' // Import the CSS file for animations and styles
import Logo from '../../assets/image/login.jpg'
const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="aboutus-container">
        <div className="title">
          <h1>WORKSHOPISTA</h1>
          <p>
            We are a passionate team dedicated to connecting people through
            shared experiences. Our platform offers a diverse range of events,
            from entertainment and live performances to hands-on craft and DIY
            workshops.
            <br /> Whether you're looking to explore new skills or enjoy a night
            out, we aim to provide opportunities for everyone to create lasting
            memories.
          </p>
        </div>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <div className="our-vision"></div>
    </div>
  )
}

export default LandingPage
