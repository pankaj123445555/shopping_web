import React from 'react'

function Logo() {
  return (
    <div className='logo-header'>
      <div style={{display: 'flex',padding: '23.8px 33px 23.81px 33px', borderRight: '1px solid #E5E5E5', marginLeft:'97.5px'}}>
      <span className='logo-content'>lOGO</span>
      </div>
    <div className='login-signup'>
    <button className='login-button' style={{padding: '12.5px 21.7px 12.5px 20px', border: '1px solid #FFF', background: '#FFF'}}>LOGIN</button>
    <button className='signup-button' style={{background: 'var(--primary-button, #F87C09)', borderRadius: '50px',border: 'none'}}>Sign up</button>
    </div>
    </div>
  )
}

export default Logo
