import React from 'react'

function DonationBanner() {
  return (
    <div id='dn-bnr'>
      <div id='bnr' className='make-div-row'>
      <div  className='make-div-column space-evenly'>
      <div className='make-div-column bn-text'>
      <span>Do Something Incredible Now...!</span>
      <span>"Donate today, make a difference</span>
      <span>tomorrow"</span>
      </div>
      <div className='make-div-row just-cont-end'>
      <div className='bn-box make-div-column just-cont txt-alg-cnt' style={{background: '#FFD249'}}>
      <span className='fs-42 mr-10'>20k+</span>
      <span className='fs-22'>Children are back to school</span>
      </div>
      </div>
      </div>
      <div  className='make-div-column space-evenly'>
       
      <div className='bn-box make-div-column just-cont txt-alg-cnt' style={{background: '#E5E5E5'}}>
      <span className='fs-42 mr-10'>$5M+</span>
      <span className='fs-22'>Total Money has been donated</span>
      </div>

      <div className='bn-box make-div-column just-cont txt-alg-cnt' style={{background: '#D1FFDE'}}>
      <span className='fs-42 mr-10'>200+</span>
      <span className='fs-22'>Monthly Donors that help us</span>
      </div>
      
      </div>
      <div id='rect-1'><img src='/images/REctangle3.png' alt='above recatngle'/></div>
      <div id='rect-2'><img src='/images/REctangle4.png' alt='above recatngle'/></div>
      </div>
     
    </div>
  )
}

export default DonationBanner
