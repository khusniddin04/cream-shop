import React, { useRef, useState } from 'react'
import "../style/header.css"
import { NavLink, useLocation } from 'react-router-dom'
import logo from "../images/logo.png"
import logo_dark from "../images/Headline.svg"
function Header() {
    const[navbar, setNavbar] = useState(false)
    let location = useLocation()
    window.addEventListener("scroll", ()=> {
        if(window.scrollY >= 80) {
            setNavbar(true)
        }else {
            setNavbar(false)
        }
    })
    let modal = useRef()
    function openModal() {
        modal.current.classList.add("openModal")
        
    }
    function closeModal() {
        modal.current.classList.remove("openModal")
    }
  return (
    <header className={navbar ? 'home' : 'header'} id={location.pathname === "/" ? "home" : "header" && location.pathname === "/shop"  ? "home" : "header"} >
        <div className="container">
            <nav className='header__nav'>
                <h4 onClick={openModal}>MENU</h4>
                <div className="modal" ref={modal}>
                     <ul onClick={closeModal}>
                    <li>
                        <NavLink to="/shop" >Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" >About</NavLink>
                    </li>
                </ul>
                </div>
               
                <NavLink>
                    <img src={location.pathname === "/" ? logo : logo_dark && location.pathname === "/shop" ? logo : logo_dark} alt="logo" />
                </NavLink>
                <ul>
                    <li>
                        <NavLink to="/cart">Cart(0)</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
            
    </header>
  )
}

export default Header