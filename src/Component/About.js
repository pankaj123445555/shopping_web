import React from 'react'

function About() {
  return (
    <div className='about make-div-column alg-itm just-cont-sp-ar'>
      <div className='w-80 make-div-row js-cont-spacebetween' style={{color: '#FFF'}}>
      <div className='make-div-column'>
      <div className='mr-btm-20'>
      <span className='fs-24-fw-600' style={{fontFamily: 'Montserrat'}}>Product Categories</span>
      </div>
      <div className='make-div-column about-text'>
      <span>Men</span>
      <span>Women</span>
      <span>Kids</span>
      <span>Accessories</span>
      </div>
      </div>
      <div className='make-div-column'>
      <div className='mr-btm-20'>
      <span className='fs-24-fw-600' style={{fontFamily: 'Montserrat'}}>Account</span>
      </div>
      <div className='make-div-column about-text'>
      <spn>My Profile</spn>
      <span>MY Order</span>
      <span>Track Order</span>
      <span>Order Status</span>
      <span>Shipping & Returns</span>
      <span>Payment</span>
      </div>
      </div>
      <div className='make-div-column'>
      <div className='mr-btm-20'>
      <span className='fs-24-fw-600 ' style={{fontFamily: 'Montserrat'}}>Donation</span>
      </div>
      <div className='make-div-column about-text'>
      <span>Balakant Samat</span>
      <span>Sri Lanka</span>
      </div>
      </div>
      </div>
      <div id='about-email' className='w-80 make-div-row alg-itm js-cont-spacebetween'>
      <span className='fs-24-fw-600'>Newsletter Sign Up</span>
      <span className='about-text' style={{color: 'rgba(0, 0, 0, 0.80)'}}>Enter your email here...</span>
      <span ><button style={{color: '#FFF'}} className='submit-btn font-18'>Submit</button></span>
      </div>
      <div className='w-80 make-div-row' style={{color: '#FFF'}}>
      <div  className='logo-content'>
      <span style={{color: '#FFF'}}>LOGO</span>
      </div>
      <div id='all-right-reserve'>
      <span>© 2023 • All Rights Reserved</span>
      </div>
      </div>
    </div>
  )
}

export default About
