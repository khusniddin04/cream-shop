import React from 'react'
import "../style/brands.css"
import voluge from "../images/vogue.svg"
import allure from "../images/allure.svg"
import elle from "../images/elle.svg"
import womenh from "../images/womens.svg"
function Brands() {
  return (
    <section className='brands'>
        <div className="container">
            <h4>Featured</h4>
            <div className="brands__wrapper">
                <div className="brands__cards">
                    <img src={voluge} alt="brand" />
                </div>
                <div className="brands__cards">
                    <img src={allure} alt="brand" />
                </div>
                <div className="brands__cards">
                    <img src={elle} alt="brand" />
                </div>
                <div className="brands__cards">
                    <img src={womenh} alt="brand" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Brands