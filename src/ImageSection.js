import React from 'react'

function ImageSection() {
  return (
    <div className='img-section'>
      <div style={{display: 'flex', justifyContent: 'space-around'}} className='add-line'>
      <span className='line' style={{ background: '#FFEBCA'}}>
       <img style={{top:'150px', left: '-10px'}} className='star-icon' src="/images/star1.svg" alt='star icon'/>
       <img style={{top:'250px', left: '-10px'}} className='star-icon' src="/images/star1.svg" alt='star icon'/>
      </span>
      <span className='line' style={{ background: '#D1F2FF'}}>
      <img style={{top:'124px', left: '-24px'}} className='star-icon' src="/images/star3.svg" alt='star icon'/>
      <img style={{top:'200px', left: '-20px', width: '42px',height: '42px'}} className='star-icon' src="/images/star4.svg" alt='star icon'/>
      </span>
      <span className='line' style={{ background: '#BCAFFF'}}></span>
      <span className='line' style={{ background: '#FFEBCA'}}></span>
      <span className='line' style={{ background: 'rgba(188, 175, 255, 0.78)'}}></span>
      <span className='line' style={{ background: '#FFEBCA'}}></span>
      <span className='line' style={{ background: '#FFEBCA'}}></span>
      <span className='line' style={{ background: 'rgba(188, 175, 255, 0.78)'}}></span>
      <span className='line' style={{ background: '#BCAFFF'}}></span>
      </div>
    </div>
  )
}

export default ImageSection
