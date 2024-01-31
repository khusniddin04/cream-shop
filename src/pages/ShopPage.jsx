import React from 'react'
import ShopHero from '../components/ShopHero'
import Ingredients from '../components/Ingredients'
import Product from '../components/Product'
import Customer from '../components/Customer'

function ShopPage() {
  return (
    <main>
        <ShopHero/>
        <Ingredients/>
        <Product text="You might also like"/>
        <Customer/>
    </main>
  )
}

export default ShopPage