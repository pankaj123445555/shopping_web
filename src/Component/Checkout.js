import React from 'react'
import Header from '../Header'
import LogoTextComponent from './LogoTextComponent'
import ProductCategories from './ProductCategories'
import ProductDetails from './ProductDetails'
import ProductList from './ProductList'
import ProceedCheckout from './ProceedCheckout'

function Checkout() {
  return (
    <div>
     <Header/>
     <ProductCategories/>
     <ProductDetails/>
     <ProductList/>
     <ProceedCheckout/>
    </div>
  )
}

export default Checkout
