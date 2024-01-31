import React from 'react'
import "../style/sed.css"
import sed_img from "../images/furaturing-img.png"
import { NavLink } from 'react-router-dom'

function Sed() {
  return (
    <section className='sed1' style={{backgroundImage:`url(${sed_img})`}}>
        <div className="container">
            <div className="faeturing">
                <h5>Featuring</h5>
                <h2>Sed ut perspiciatis</h2>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                <NavLink to="/shop">SHOP NOW</NavLink>
            </div>
        </div>
    </section>
  )
}

export default Sed