import React from 'react'
import Product from './Product'

function ProductList() {
  return (
    <div>
    <div className='w-100 mg-top-30 bg-black make-div-row'>
    <div  className='pr-details text-font just-cont al-item'>
    <span style={{color: '#FFF'}}>PRODUCT DETAILS</span>
    </div>
    <div className='other-content text-font'  style={{color: '#FFF'}}>
    <span>PRICE</span>
    <span>QUANTITY</span>
    <span>SHIPPING</span>
    <span>SUBTOTAL</span>
    <span>ACTION</span>
    </div>
    </div>
    <Product/>
    <Product/>
    <Product/>
    </div>
  )
}

export default ProductList
