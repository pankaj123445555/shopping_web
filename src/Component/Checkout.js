import React from 'react'
import Header from '../Header'
import LogoTextComponent from './LogoTextComponent'
import ProductCategories from './ProductCategories'
import ProductDetails from './ProductDetails'
import ProductList from './ProductList'
import ProceedCheckout from './ProceedCheckout'
import About from './About'

function Checkout() {
  return (
    <div>
     <Header/>
     <ProductCategories/>
     <ProductDetails/>
     <ProductList/>
     <ProceedCheckout/>
     <About/>
    </div>
  )
}

export default Checkout
