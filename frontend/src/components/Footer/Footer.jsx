import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, cumque consectetur! Earum, beatae. Debitis omnis tempora eum optio reprehenderit quae. Doloribus eum illo qui pariatur autem numquam facere repellendus architecto.</p>
            <div className="footer-social-icons">
            <a href="https://www.facebook.com/share/a5mJWUyUPTcsxu9D/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                  <img src={assets.facebook_icon} alt="Facebook" />
                </a>
                <a href="https://www.twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                  <img src={assets.twitter_icon} alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/pramit-kumar-mandal/" target="_blank" rel="noopener noreferrer">
                  <img src={assets.linkedin_icon} alt="LinkedIn" />
                </a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>Ph-No: +91-9434645185</li>
                <li>Email: mandalpramit30@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
