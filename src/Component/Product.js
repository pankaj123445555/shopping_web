import React from 'react'

function Product() {
  return (
    <>
    <div className='list make-div-row'>
    <div className='pr-details just-cont'>
    <div className='make-div-column just-cont'>
    <div id='bg-image'></div>
    </div>
    <div className='make-div-column just-cont mr-10'>
     <span className='text-font'>Blue Flower Print Crop Top</span>
     <span className='fsize-13-fw-400 grey-color'>Color : Pink</span>
     <span className='fsize-13-fw-400 grey-color'>Size : M</span>
    </div>
    </div>
    <div className='other-content make-div-row'>
    <div id='price' className='font-18'>
    <span style={{color: '#3C4242'}}>$29.00</span>
    </div>
    <div id='quantity'>
    <span><img src='/images/minus.svg' alt='minus'/></span>
    <span>1</span>
    <span><img style={{verticalAlign: 'middle'}} src='/images/plus.svg' alt='plus'/></span>
    </div>
    <div id='shipping' >
    <span className='font-18 grey-color'>FREE</span>
    </div>
    <div id='subtotal'>
    <span className='font-18'>$29.00</span>
    </div>
    <div id='action'>
    <span style={{marginRight: '10px'}}><img src='/images/delete.svg' alt='delete icon'/></span>
    <span className='font-18' style={{color: '#ED0000', fontWeight: '400'}}>Remove</span>
    </div>
    </div>
    </div>
    </>
  )
}

export default Product
