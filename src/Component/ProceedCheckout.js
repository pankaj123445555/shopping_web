import React from 'react'

function ProceedCheckout() {
  return (
    <div className='make-div-row just-cont pc-checkout'>
      <div className='pc-checkout-inner make-div-row'>
      <div className='make-div-column just-cont'>
      <div className='make-div-column js-cont-spaceAround discount'>
      <div className='make-div-column'>
      <span className='fs-24-fw-600' style={{color: '#3C4242'}}>Discount  Codes</span>
      <span className='text-font' style={{color:'#807D7E', fontWeight: '400'}}>Enter your coupon code if you have one</span>
      </div>
      <div className='apply-cupon make-div-row js-cont-end'>
      <span><img style={{height: '56px'}} src='/images/rectangle.svg'/></span>
      </div>
      <div className='cont-shp-btn'>
      <span className='fs-16-fw-500 wht-clr txt-alg-cnt'>Continue Shopping</span>
      </div>
      </div>
      </div>
      <div className='make-div-column just-cont'>
      <div className='make-div-column al-item checkout' >
     <div className='bill make-div-column js-cont-spaceAround price-text'>
      <div className='make-div-row js-cont-spacebetween'>
      <span>Sub Total </span>
      <span>$513.00</span>
      </div>
      <div className='make-div-row js-cont-spacebetween'>
      <span>Shipping</span>
      <span>$5.00</span>
      </div>
      <div className='make-div-row js-cont-spacebetween'>
      <span>Grand Total</span>
      <span>$518.00</span>
      </div>
     </div>
     <div className='checkout-btn make-div-row just-cont alg-itm mr-10'>
     <span className='font-18'>Proceed To Checkout</span>
     </div>
      </div>
      </div>
      </div> 
    </div>
  )
}

export default ProceedCheckout
