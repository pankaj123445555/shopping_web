import React from 'react'
import Header from '../Header'
import LogoTextComponent from './LogoTextComponent'
import ProductCategories from './ProductCategories'
import ProductDetails from './ProductDetails'

function Checkout() {
  return (
    <div>
     <Header/>
     <ProductCategories/>
     <ProductDetails/>
    </div>
  )
}

export default Checkout
