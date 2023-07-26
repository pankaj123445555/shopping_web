import React from 'react'

function ProductDetails() {
  return (
    <div id='product-details'>
      <div className='make-div-column'  style={{borderBottom: '1px solid rgba(248, 124, 9, 0.24)', height: '100px', width: '85%', justifyContent: 'end'}}>
        <div className='make-div-row mg-l-50' style={{margin: '18px'}}>
        <span className='fsize-13-fw-400' style={{marginRight:'25px'}}><a style={{color:'#808080'}} className='anchor-tag'  href="URL">Home</a></span>
        <span className='fsize-13-fw-400 grey-color'>Categories</span>
        <span className='mg-top-2'><img src='/images/greater.svg' alt='frame'/></span>
        <span className='fsize-13-fw-400 grey-color'>Women</span>
        <span className='mg-top-2'><img src='/images/greater.svg' alt='frame'/></span>
        <span className='fsize-13-fw-400 black-color'>Checkout</span>
        </div>
      </div>
      <div className='make-div-row' style={{width:'85%', height:'81px', borderBottom: '1px solid rgba(248, 124, 9, 0.24)' , alignItems: 'center'}}>
       <span style={{marginLeft: '50px'}} className='light-bold'>Checkout</span>
      </div>
    </div>
  )
}

export default ProductDetails
