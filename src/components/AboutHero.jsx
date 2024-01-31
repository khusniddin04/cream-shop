import React from 'react'
import "../style/abouHero.css"
import bg_img from "../images/about-hero-img.png"
function AboutHero() {
  return (
    <section className='aboutHero' style={{backgroundImage:`url(${bg_img})`}}>
        <div className="container">
            <h1>Lorem ipsum</h1>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
        </div>
    </section>
  )
}

export default AboutHero