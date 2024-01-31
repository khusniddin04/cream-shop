import React from 'react'
import "../style/card.css"

function Card({img, span, title, price, text}) {
  return (
    <div className='cards'>
        <div className="cards__top">
          <span className='sale_new'>{span}</span>
        <img src={img} alt="" />
        <div className="border">
            <p>{text}</p>
        </div>
        
        </div>
        
        <div className="cards__content">
            <h4>{title}</h4>
            <h4>{price}</h4>
        </div>
    </div>
  )
}

export default Card