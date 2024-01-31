import React from 'react'
import "../style/customer.css"
import arrow1 from "../images/left.png";
import arrow2 from "../images/blue-arrow.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import hand from "../images/hand-wash.png"
import hand2 from "../images/hand-wash2.png"
import cream from "../images/aspirine.png"
function Customer() {
  return (
    <section className='customer'>
        <div className="container">
            <div className="customer__wrapper">
                <div className="customer__content">
                    <h4>The results</h4>
                    <h2>From our customers</h2>
                    <div className="swiper-pagination"></div>
                    <div className="arrows">
                         <div className="swiper-button-prev">
                         <img src={arrow1} alt="arrow" />
                        </div>
                        <div className="swiper-button-next">
                         <img src={arrow2} alt="arrow" />
                        </div>
                    </div>
                       
                </div>
                <div className="customer__slider">
                <Swiper loop={true} slidesPerView={3}
        spaceBetween={10}  navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }}  modules={[Navigation]} className="mySwiper"
        breakpoints={{
          1000: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1100: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        >
        <SwiperSlide>
                <img src={hand} alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
                <img src={hand2} alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
                <img src={cream} alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
                <img src={cream} alt="slider-img" />
        </SwiperSlide>
        
      </Swiper>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Customer