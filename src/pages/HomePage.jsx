import React from 'react'
import HomeHero from '../components/HomeHero'
import Product from '../components/Product'
import Creams from '../components/Creams'
import Collection from '../components/Collection'
import Banner from '../components/Banner'
import Sed from '../components/Sed'
import Actres from '../components/Actres'
import Brands from '../components/Brands'
import "../style/homePage.css"
function HomePage() {
  return (
    <main>
        <HomeHero/>
        <Product text="Discover our products" p_text="SHOP ALL"/>
        <Creams/>
        <Collection/>
        <Banner/>
        <Sed/>
        <Actres/>
        <Brands/>
    </main>
  )
}

export default HomePage