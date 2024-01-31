import React from 'react'
import { NavLink } from 'react-router-dom'

function ActresCard({bg_img, title, btn_text}) {
  return (
    <div className='actresCard' style={{backgroundImage:`url(${bg_img})`}}>
        <h2>{title}</h2>
        <NavLink to="/shop">SHOP NOW</NavLink>
    </div>
  )
}

export default ActresCard