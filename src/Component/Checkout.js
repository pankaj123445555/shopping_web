import React from 'react'
import Header from '../Header'
import LogoTextComponent from './LogoTextComponent'
import ProductCategories from './ProductCategories'
import ProductDetails from './ProductDetails'
import ProductList from './ProductList'

function Checkout() {
  return (
    <div>
     <Header/>
     <ProductCategories/>
     <ProductDetails/>
     <ProductList/>
    </div>
  )
}

export default Checkout
