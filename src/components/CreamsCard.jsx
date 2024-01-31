import React from 'react'

function CreamsCard({img, title, text}) {
  return (
    <div className='creamsCard'>
        <div className="creamsCard__img">
        <img src={img} alt="img" />

        </div>
        <div className="creamCard__content">
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
        
    </div>
  )
}

export default CreamsCard