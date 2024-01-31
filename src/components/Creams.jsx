import React from 'react'
import "../style/creams.css"
import CreamsCard from './CreamsCard'
import cream_img from "../images/cream 1.svg"
import cream_img2 from "../images/cream2.svg"
import cream_img3 from "../images/cream3.svg"
import cream_img4 from "../images/cream4.svg"
function Creams() {
  return (
    <section className='creams'>
        <div className="container">
            <h5>Why brand name?</h5>
            <h2 className='creams__title1'>Sed ut perspiciatis unde omy </h2>
            <h2 className='creams__title2'> At vero eos et accusamus et iusto odio dignissimos</h2>
            <div className="creams__wrapper">
                <CreamsCard img={cream_img} title="Lorem ipsum" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum"/>
                <CreamsCard img={cream_img2} title="Sed ut perspiciatis unde" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."/>
                <CreamsCard img={cream_img3} title="Ut enim ad minim" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum"/>
                <CreamsCard img={cream_img4} title="At vero eos eaccusamus" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."/>
            </div>
        </div>
    </section>
  )
}

export default Creams