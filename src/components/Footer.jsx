import React from 'react'
import "../style/footer.css"
import socials from "../images/socials.png"
import icon from "../images/icon.svg"
function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
          <div className="footer__grid">
            <div className="footer__left">
            <h3>Join the club</h3>
            <p>Keep up with our new releases, beauty tips and what Winnie’s been up to.</p>
            <input type="text"  placeholder='Email Address'/>
            <div className="left__icons">
              <img src={socials} alt="" />
            </div>
              <ul>
                <li>© 2021 Cream Shop</li>
                <li>Terms and conditions</li>
                <li>Privacy Policy</li>
              </ul>
          </div>
          <div className="footer__right">
            <ul>
              <li>Shop</li>
              <li>Shop All</li>
              <li>Best Sellers</li>
              <li>Universal Mineral</li>
              <li>Isie Glow to Isle</li>
              <li>Deepwater</li>
              <li>Winne Selects</li>
            </ul>
            <ul>
              <li>Learn</li>
              <li>About Us</li>
              <li>Ingredient Glossary</li>
              <li>Sun Care 101</li>
              <li>Our Journey</li>
            </ul>
            <ul>
              <li>Customer</li>
              <li>Contact Us</li>
              <li>Help/FAQ</li>
              <li>My Account</li>
              <li>Shipping and Return</li>
            </ul>
          <div className="chat">
              <img src={icon} alt="" />
          </div>
          </div>
          
          </div>
            
          
        </div>
    </footer>
  )
}

export default Footer