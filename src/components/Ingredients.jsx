import React from 'react'
import "../style/ingredients.css"
import girl from "../images/beautiful-girl.png"
import tomchi from "../images/tomchi.png"
import aloya from "../images/aloya.png"
import seamons from "../images/seamos.png"
import fourth_img from "../images/4chirasm.png"
import oil from "../images/oil.svg"
import uzum from "../images/uzum.png"
function Ingredients() {
  return (
    <section className='ingredients'>
        <div className="container">
            <div className="ingredients__wrapper">
                <div className="ingredients__content">
                    <h2>Ingredients</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <div className="content__cards__wrapper">
                        <div className="content__cards">
                            <img src={tomchi} alt="tomchi" />
                            <h4>Hydrating Nectar</h4>
                        </div>
                        <div className="content__cards">
                            <img src={aloya} alt="asd" />
                            <h4>Aloe steam cells</h4>
                        </div>
                        <div className="content__cards">
                            <img src={seamons} alt="" />
                            <h4>Seamoss</h4>
                        </div>
                        <div className="content__cards">
                            <img src={fourth_img} alt="" />
                            <h4>Niacinamide</h4>
                        </div>
                        <div className="content__cards">
                            <img src={oil} alt="" />
                            <h4>Almond oil</h4>
                        </div>
                        <div className="content__cards">
                            <img src={uzum} alt="" />
                            <h4>Grapeseed oil</h4>
                        </div>
                    </div>
                    <button>Full Ingredient glossary</button>
                </div>
                <div className="ingredients__img">
                    <img src={girl} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Ingredients