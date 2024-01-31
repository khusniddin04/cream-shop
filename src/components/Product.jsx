import React from "react";
import "../style/product.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

import arrow1 from "../images/left.png";
import arrow2 from "../images/rigth.png";
import Card from "./Card";
import card_image1 from "../images/card1-image.svg";
import card_image2 from "../images/cardimages.png";
import card_image3 from "../images/imagecard-removebg-preview.png";
function Product({text, p_text}) {
  return (
    <section className="product">
      <div className="container">
       

          
        <div className="product__wrapper">
          <div className="product__content">
          <h2>{text}</h2>

          
        <div className="btns">
            <p className="after_text">{p_text}</p> 
            <div className="swiper-pagination"></div>
            <div className="gap">
              <div className="swiper-button-prev">
            <img src={arrow1} alt="arrow" />
          </div>
           <div className="swiper-button-next">
            <img src={arrow2} alt="arrow" />
          </div>
            </div>
          
         </div>
        </div>

       
        <Swiper  loop={true} slidesPerView={3}
        spaceBetween={30}  navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }}  modules={[Navigation]} className="mySwiper"
        breakpoints={{
        
          300: {
            slidesPerView:1
          },
          400: {
            slidesPerView:1
          },
          500: {
            slidesPerView:1
          },
          600: {
            slidesPerView:2
          },
          700: {
            slidesPerView:2
          },
          850: {
            slidesPerView:2
          },
         1020: {
          slidesPerView:3
         }
         
        }}>
        <SwiperSlide>
            <Card  span="New" img={card_image1} text="+ Quick Shop" title="Your Skin But Better CC+ Cream with SPF50 12" price="$28.00"/>
        </SwiperSlide>
        <SwiperSlide>
           <Card  span="Sale" img={card_image2} text="+ Quick Shop" title="KEM DUONG VT CICA - VT CICA CREAM" price="$28.00"/>
        </SwiperSlide>
        <SwiperSlide>
           <Card span="New" img={card_image3} text="+ Quick Shop" title="KEM DUONG VT CICA - VT CICA CREAM" price="$28.00"/>
        </SwiperSlide>
        
        <SwiperSlide>
            <Card  span="New" img={card_image1} text="+ Quick Shop" title="Your Skin But Better CC+ Cream with SPF50 12ml" price="$28.00"/>
        </SwiperSlide>
         
        
        
       
      </Swiper>

        


       
        </div>
       
        
        
      </div>
    </section>
  );
}

export default Product;
