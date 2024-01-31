import React from 'react'
import "../style/banner.css"
import { NavLink } from 'react-router-dom'
import banner_img from "../images/banner-image1.png"
import banner_img2 from "../images/banner-image2.png"
function Banner() {
  return (
    <section className='banner'>
        <div className="container">
            <div className="banner__wrapper">
                <div className="content__wrapper">
                    <div className="banner__content">
                    <h2>Neque porro quisquam est, qui dolorem</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    <NavLink to="/about">Ingredient glossary</NavLink>
                </div>
                </div>
                
                <div className="banner__img">
                    <img src={banner_img} alt="banner-img" />
                </div>
            </div>
            <div className="banner__wrapper reverse">
                <div className="content__wrapper1">
                    <div className="banner__content1">
                        <h3>Our story</h3>
                    <h2>Ut enim ad minima</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    <NavLink to="/about">About Us</NavLink>
                </div>
                </div>
                
                <div className="banner__img">
                    <img src={banner_img2} alt="banner-img2" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner