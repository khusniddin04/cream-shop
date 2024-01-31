import React from 'react'
import "../style/atcres.css"
import ActresCard from './ActresCard'
import bg_img from "../images/actires1.png"
import bg_img2 from "../images/actires.png"
function Actres() {
  return (
    <section className='actres'>
        <div className="container">
            <div className="actres__wrapper">
                <ActresCard bg_img={bg_img} title="Nemo enim ipsam"/>
                <ActresCard bg_img={bg_img2} title="Temporibus autem"/>
            </div>
        </div>
    </section>
  )
}

export default Actres