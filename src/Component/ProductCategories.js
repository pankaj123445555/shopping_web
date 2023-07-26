import React from 'react'
import LogoTextComponent from './LogoTextComponent'
import LoginSignupButton from './LoginSignupButton'

function ProductCategories() {
  return (
    <div className='make-div-row' style={{borderBottom: '1px solid #E5E5E5'}}>

    <div style={{display: 'flex',padding: '23.8px 33px 23.81px 33px', borderRight: '1px solid #E5E5E5', marginLeft:'97.5px', width: '10%', position: 'relative'}}>
    <span className='logo-content checkout-logo'>lOGO</span>
    </div>

     <div style={{width: '90%', marginTop: '15px'}}>
     <div className='make-div-row' style={{justifyContent: 'end', borderBottom: '1px solid #E5E5E5'}}>

     <div className='make-div-row' style={{borderRight: '1px solid #E5E5E5' , alignItems: 'center',width: '15%', justifyContent: 'space-between'}}>
     <span className='checkout-text' >HOW IT WORKS</span>
     <span className='checkout-text' style={{marginRight: '10px'}}>About</span>
     </div>
      <LoginSignupButton/>
     </div>

     <div className='make-div-row' style={{justifyContent: 'space-between',alignItems: 'center' }}>
     <div className='make-div-row menu-bar checkout-text' style={{fontSize: '12px', margin: '10px'}}>
     <span><a className='anchor-tag' href="URL">HOME</a></span>
     <span><a className='anchor-tag' href="URL">OUR PRODUCTS</a></span>
     <div className='make-div-row'>
     <span><a className='anchor-tag' href="URL">SHOP</a></span>
     <span><img style={{marginTop: '-7px', marginLeft: '5px'}} src='/images/shopicon.svg' alt='shop icon'/></span>
     </div>
     <span ><a style={{color: '#F87C09'}} className='anchor-tag' href="URL">CATEGORIES</a></span>
     <span><a className='anchor-tag' href="URL">DONATION</a></span>
     </div>
     <div className='img-btn'>
      <span><img src='/images/Frame.svg'/></span>
      <span><button className='bag-button'>3</button></span>
     </div>
     </div>
     </div>
    </div>
  )
}

export default ProductCategories
