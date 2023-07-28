import React from 'react'

function DonationCart() {
  return (
    <div className='make-div-row just-cont-sp-ar mg-top-30'>
      <div className='dn-cart make-div-column alg-itm space-evenly'>
      <div id='dn-cart-img1' className='dn-cart-img'></div>
      <div className='fs-24-fw-600 txt-alg-cnt' style={{fontWeight: '400px'}}>provide life changing surgeries for children worldwide</div>
      <div className='checkout-btn make-div-row just-cont alg-itm'>
      <span className='font-18' style={{color: '#FFF'}}>Donate</span>
      </div>
      </div>
      <div className='dn-cart make-div-column alg-itm space-evenly'>
      <div id='dn-cart-img2' className='dn-cart-img'></div>
      <div className='fs-24-fw-600 txt-alg-cnt' style={{fontWeight: '400px'}}>provide life changing surgeries for children worldwide</div>
      <div className='checkout-btn make-div-row just-cont alg-itm'>
      <span className='font-18' style={{color: '#FFF'}}>Donate</span>
      </div>
      </div>
    </div>
  )
}

export default DonationCart
