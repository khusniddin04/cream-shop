import React, { useState } from 'react'
import "../style/shopHero.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import img from "../images/product photo.png"
import collection_img from "../images/collection-img.png"
import bg_img from "../images/actires1.png"
import bg_img2 from "../images/actires.png"
import affirm from "../images/affirm.svg"
function ShopHero() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className='shopHero'>
        <div className="container">
            <div className="shopHero__wrapper">
                <div className="slider__wrapper">
                     <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={5}
        freeMode={true}
        direction='vertical'
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <div className="horizontal_slider">
             <SwiperSlide>
            <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={collection_img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={bg_img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={bg_img2} alt="" />
        </SwiperSlide>
        </div>
       
        
        </Swiper>

        <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null, }}
        modules={[FreeMode,  Thumbs]}
        className="mySwiper2"
      >
          <SwiperSlide>
            <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={collection_img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={bg_img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={bg_img2} alt="" />
        </SwiperSlide>
        
      </Swiper> 
                </div>
                <div className="shopHero__content">
                    <h3>Niche Beauty CCC Cream – Niche Beauty</h3>
                    <h5>$28.00</h5>
                    <p><span>The original, weightless, scentless sunscreen with SPF 55 that leaves a shinny finish.</span> Formulated with the most sensitive and vulnerable in mind, with a custom blend of natural, gentle and hydrating island ingredients mixed with the most effective skincare-grade actives.</p>
                    <div className="size">
                        <h6>Size</h6> <span>50ml</span>
                    </div>
                    
                    <div className="content__btns">
                        <button>1.7 fl oz</button>
                        <button>2.5 fl oz</button>
                        <button>3.4 fl oz</button>
                    </div>
                    <div className="content__radio">
                        <div>
                              <input type="radio" name='1' checked />
                        <p>$28.00 One time purchase</p>
                        </div>
                      
                        <div>
                        <input type="radio" name='1' />
                        <p>$25.99 Subscribe and save. </p>
                        </div>
                    </div>
                    <div className="content__add">
                        <div className="add">
                            <button>-</button>
                            <button>1</button>
                            <button>+</button>
                        </div>
                        <button>Add to cart - $28.00</button>
                    </div>
                    <ul>
                        <li>Starting at $20/mo with <img src={affirm} alt="pic" /> <span>Learn more</span></li>
                        <li>Use Instruction  <span>+</span></li>
                        <li>Ingredients  <span>+</span></li>
                        <li>Shipping and Returns <span>+</span></li>
                        <li>How to Recycle <span>+</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShopHero