import React from 'react'
import './Footer.css'
import footer_logo from '../assets/luxewear logo2.png'
import instagram_icon from '../assets/instagram_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import pinterest_icon from '../assets/pinterest_icon.png'


export const Footer = () => {
  return (
    <div className='footer'> 
        <div className="footer-logo">
            <img src={footer_logo} width='60' alt="" />
            <p>LuxeWear</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={pinterest_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copywrite">
            <hr />
           <p>copywrite @ 2024 - All Right Reserved.</p> 
        </div>


    </div>
  )
}
export default Footer