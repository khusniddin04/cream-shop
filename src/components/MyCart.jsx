import React from 'react'
import "../style/myCard.css"
import img from "../images/product photo.png"
import icon from "../images/discount.svg"
function MyCart() {
  return (
    <section className='myCart'>
        <div className="container">
          <h2>My Cart</h2>
          <div className="range">
            <input type="range" />
          </div>
          
          <p className='myCart__text'>$12.00 away from Free Shipping</p>
          <div className="myCart__texts">
                  <h4>Product</h4>
                  <ul>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Total</li>
                  </ul>
              </div>

          <div className="myCart__wrapper">
              <div className="myCart__card">
                <div className="img_and_content__wrapper">
                   <div className="card__img">
                    <img src={img} alt="" />
                  </div>
                  <div className="card__content">
                    <h4 className='card__titl'>Universal mineral face lotion SPF55</h4>
                    <ul>
                      <li>Size: 1.7 fl oz</li>
                      <li>One Time Purchase</li>
                      <li>Remove</li>
                    </ul>
                  </div>
                </div>
                 
                  <div className="card__btns__and__prices">
                    <h4>$28.00</h4>
                    <div className="add3">
                            <button>-</button>
                            <button>1</button>
                            <button>+</button>
                        </div>
                        <h4>$28.00</h4>
                  </div>
              </div>
              <div className="myCart__card">
                <div className="img_and_content__wrapper">
                   <div className="card__img">
                    <img src={img} alt="" />
                  </div>
                  <div className="card__content">
                    <h4 className='card__titl'>Universal mineral face lotion SPF55</h4>
                    <ul>
                      <li>Size: 1.7 fl oz</li>
                      <li>One Time Purchase</li>
                      <li>Remove</li>
                    </ul>
                  </div>
                </div>
                 
                  <div className="card__btns__and__prices">
                    <h4>$28.00</h4>
                    <div className="add3">
                            <button>-</button>
                            <button>1</button>
                            <button>+</button>
                        </div>
                        <h4>$28.00</h4>
                  </div>
              </div>
              <div className="myCart__card">
                <div className="img_and_content__wrapper">
                   <div className="card__img">
                    <img src={img} alt="" />
                  </div>
                  <div className="card__content">
                    <h4 className='card__titl'>Universal mineral face lotion SPF55</h4>
                    <ul>
                      <li>Size: 1.7 fl oz</li>
                      <li>One Time Purchase</li>
                      <li>Remove</li>
                    </ul>
                  </div>
                </div>
                 
                  <div className="card__btns__and__prices">
                    <h4>$28.00</h4>
                    <div className="add3">
                            <button>-</button>
                            <button>1</button>
                            <button>+</button>
                        </div>
                        <h4>$28.00</h4>
                  </div>
              </div>
              <div className="myCart__card">
                <div className="img_and_content__wrapper">
                   <div className="card__img">
                    <img src={img} alt="" />
                  </div>
                  <div className="card__content">
                    <h4 className='card__titl'>Universal mineral face lotion SPF55</h4>
                    <ul>
                      <li>Size: 1.7 fl oz</li>
                      <li>One Time Purchase</li>
                      <li>Remove</li>
                    </ul>
                  </div>
                </div>
                 
                  <div className="card__btns__and__prices">
                    <h4>$28.00</h4>
                    <div className="add3">
                            <button>-</button>
                            <button>1</button>
                            <button>+</button>
                        </div>
                        <h4>$28.00</h4>
                  </div>
              </div>
          </div>
          <div className="message__wrapper">
          <div className="message">
            
            <h5>Type Message...</h5>
          <input type="message" placeholder='Type Message...'  />

          </div>
          <div className="subtotal">
            <div className="subtotal__title1">
              <h4>Subtotal</h4>
              <h4>$112.00</h4>
            </div>
            
            <p>Shipping and tax calculated at checkout.</p>
            <div className="subtotal__icons">
                <div className="subtotal__icon">
                  <img src={icon} alt="icon" />
                  <h4>Auto</h4>
                </div>
                <h4>-$10.00</h4>
            </div>
            <div className="subtotal__title2">
              <h3>Total</h3>
              <h3>$102.00</h3>
            </div>
            <button>Secure Checkout</button>
          </div>
          </div>
        </div>
    </section>
  )
}

export default MyCart