import React from 'react'

function DonationPopUp() {
  return (
    <div className='make-div-row just-cont mr-10'>
       <div id='pop-up' className='make-div-column alg-itm js-cont-spaceAround'>
       <div className='fs-24-fw-600 txt-alg-cnt'>How much would you like to donate ?</div>
       <div className='make-div-row w-80 js-cont-spaceAround'>
       <div className='pop-up-box make-div-row just-cont alg-itm'>$50</div>
       <div style={{background: 'rgba(248, 124, 9, 0.12)', border: '1px solid #F87C09', color: '#F87C09'}} className='pop-up-box make-div-row just-cont alg-itm'>$25</div>
       <div className='pop-up-box make-div-row just-cont alg-itm'>$10</div>
       <div className='pop-up-box make-div-row just-cont alg-itm'>$5</div>
       </div>
       <div className='txt-alg-cnt fs-24-fw-500 cst-dn'>Enter custom donation</div>
       <div className='fs-24-fw-500 txt-alg-cnt'>Support Us Today...!</div>
       <div>
       </div>
       <div className='make-div-row just-cont alg-itm' id='per-btn' style={{color: '#FFF'}}>10%(%2.50)</div>
       <div className='make-div-row alg-itm fs-24-fw-600' style={{color: '#CACACA'}}>
       <div>0%</div>
       <div id='roller'></div>
       <div>30%</div>
       </div>
       <div className='fs-24-fw-500 txt-alg-cnt cst-dn'>Enter custom Tip</div>
       <div className='donation-total w-80 make-div-column js-cont-spaceAround'>
       <div className='make-div-row js-cont-spacebetween'>
       <span className='fs-24-fw-500' style={{fontSize: '32px' , color: '#3D3D3D'}}>Donation</span>
       <span className='text-font fs-24-fw-600' style={{fontSize: '32px' , color: '#090909'}}>$20.00</span>
       </div>
       <div className='make-div-row js-cont-spacebetween'>
       <span className='fs-24-fw-500' style={{fontSize: '32px' , color: '#3D3D3D'}}>Tip(Thank You)</span>
       <span className='text-font fs-24-fw-600' style={{fontSize: '32px' , color: '#090909'}}>$2.50</span>
       </div>
       </div>
       <div style={{color: '#F87C09', fontSize: '32px'}} className='w-80 make-div-row js-cont-end font-18'>
       $27.50
       </div>
       <div id='donate-now-btn' className='make-div-row just-cont alg-itm fs-24-fw-600' style={{color: '#FFF'}}>
       Donate Now
       </div>
       <div className='make-div-column alg-itm fs-24-fw-500' style={{color: '#101010'}}>
       <span>By Continuing, you agree to terms of</span>
       <span>service & privacy policy</span>
       </div>
       </div>
    </div>
  )
}

export default DonationPopUp
