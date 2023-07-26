import React from 'react'

function LoginSignupButton() {
  return (
    <>
    <div className='login-signup'>
    <button className='login-button' style={{padding: '12.5px 21.7px 12.5px 20px', border: '1px solid #FFF', background: '#FFF'}}>LOGIN</button>
    <button className='signup-button' style={{background: 'var(--primary-button, #F87C09)', borderRadius: '50px',border: 'none'}}>Sign up</button>
    </div>
    </>
  )
}

export default LoginSignupButton
