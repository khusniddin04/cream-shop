import React from 'react'
import "../style/collection.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import arrow1 from "../images/left.png";
import arrow2 from "../images/blue-arrow.png";
import collection_img from "../images/collection-img.png"
import collection_img2 from "../images/collection-img2.png"
import CollectionCard from './CollectionCard';
function Collection() {
  return (
    <section className='collection'>
        <div className="container">
            <div className="collection__content">
                <div className="content__words">
                    <h2>Collections</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum, Cream Shop</p>
                </div>
                <div className="swiper-pagination"></div>
                <div className="btns2">
                   <div className="swiper-button-prev1">
                     <img src={arrow1} alt="arrow" />
                 </div>

                 <div className="swiper-button-next1">
                    <img src={arrow2} alt="arrow" />
                 </div> 
                </div>
                
                
            </div>
            <div className="collection__wrapper">
            <Swiper loop={true} slidesPerView={2.1}
        spaceBetween={30}  navigation={{ nextEl: '.swiper-button-next1', prevEl: '.swiper-button-prev1', }}  modules={[Navigation]} className="mySwiper"
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
            slidesPerView:1.5
          },
          700: {
            slidesPerView:2
          },
          800: {
            slidesPerView:2
          },
          1290: {
            spaceBetween: 10,
            slidesPerView: 2,
          }
        }}>
        <SwiperSlide>
           <CollectionCard img={collection_img} title="Sed ut perspiciatis"/> 
        </SwiperSlide>
        
        <SwiperSlide>
        <CollectionCard img={collection_img2} title="Lorem ipsum dolor"/> 
        </SwiperSlide>

        <SwiperSlide>
        <CollectionCard img={collection_img2} title="Lorem ipsum dolor"/> 
        </SwiperSlide>
        
         

      </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Collection