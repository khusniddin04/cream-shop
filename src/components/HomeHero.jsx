import React from 'react'
import "../style/homeHero.css"
import { NavLink } from 'react-router-dom'
import bg_img from "../images/bg_image.png"
function HomeHero() {
  return (
    <section className='homeHero' style={{backgroundImage:`url(${bg_img})`}}>
        <div className="container">
            <div className="homeHero__wrapper">
                <div className="homeHero__content">
                   <h4>At vero eoset</h4>
                    <h2>Lorem ipsum de dolor amet</h2> 
                </div>
                <NavLink to="/shop">SHOP NOW</NavLink>
            </div>
        </div>
    </section>
  )
}

export default HomeHero