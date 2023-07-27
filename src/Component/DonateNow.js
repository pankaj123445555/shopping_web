import React from 'react'

function DonateNow() {
  return (
    <div id='donate-now'>
      <div className='background-image make-div-row'>
      <span id='ellipse1'><img id='el1-img' src='/images/Ellipse656.png'/></span>
      <span id='ellipse2'><img id='el2-img' src='/images/Ellipse1.png'/></span>
      <span id='rectangle-span'><img src='/images/rectangle1.png'/></span>
      </div>
      <div className='text-image make-div-row'>
       <div id='children-image' className='make-div-column space-evenly'>
       <div className='make-div-row space-evenly'>
       <span id='children1'><img src='/images/children1.png' alt='children1'/></span>
       <span><img src='/images/children2.png' alt='children2'/></span>
       </div>
       <div className='make-div-row space-evenly'>
       <span><img src='/images/children3.png' alt='children3'/></span>
       <span><img src='/images/children4.png' alt='children4'/></span>
       </div>
       </div>
       <div id='donate-text' className='make-div-column space-evenly'>
       <div className='children-bold-text make-div-column'>
       <span>" Dress to give</span>
       <span>back. Change</span>
       <span>the world, one</span>
       <span>outfit at a</span>
       <span>time "</span>
       </div>
       <div>
       <span className='fs-22'>When you buy from us, you're not just getting a great product. You're also helping to make a difference in the lives of others.</span>
       </div>
       <div id='dn-btn' className='make-div-row just-cont alg-itm fs-22'>
       <span>Donate Now</span>
       <span><img src='/images/RightArrow.svg' alt='right-icon'/></span>
       </div>
       </div>
      </div>
    </div>
  )
}

export default DonateNow
