import React from 'react'
import "../style/aboutCard.css"
import down from "../images/down.svg"
import Card from './Card'
import card_image1 from "../images/card1-image.svg";
import card_image2 from "../images/cardimages.png";
import card_image3 from "../images/imagecard-removebg-preview.png";
function AboutCards() {
  return (
    <section className='aboutCard'>
        <div className="container">
            <div className="aboutCard__text">
               <span>Sort by</span> 
               <span><img src={down} alt="down" /></span>
            </div>
            <div className="aboutCard__wrapper">
            <Card  span="New" img={card_image1} text="+ Quick Shop" title="Your Skin But Better CC+ Cream with SPF50 12" price="$28.00"/>
            <Card  span="Sale" img={card_image2} text="+ Quick Shop" title="KEM DUONG VT CICA - VT CICA CREAM" price="$28.00"/>
            <Card span="New" img={card_image3} text="+ Quick Shop" title="KEM DUONG VT CICA - VT CICA CREAM" price="$28.00"/>
            <Card  span="New" img={card_image1} text="+ Quick Shop" title="Your Skin But Better CC+ Cream with SPF50 12ml" price="$28.00"/>
            <Card  span="Sale" img={card_image2} text="+ Quick Shop" title="KEM DUONG VT CICA - VT CICA CREAM" price="$28.00"/>
            <Card span="New" img={card_image3} text="+ Quick Shop" title="KEM DUONG VT CICA - VT CICA CREAM" price="$28.00"/>
            </div>
        </div>
    </section>
  )
}

export default AboutCards