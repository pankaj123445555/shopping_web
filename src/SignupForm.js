import React from 'react'

function SignupForm() {
  return (
    <div className='signupForm'>
      <div className='form'>
      <div className='make-div-column'>
      <span id='signup-text'>Sign Up</span>  
      <span id='lwr-text'>Sign up for free to access to in any of our products </span>
      </div>
      <div className='make-div-column'>
      <span className='form-field-text'>Email</span>
      <span><input placeholder='pankaj@123' type="text" className='form-input-tag' name="email"/></span>
      </div>
      <div className='make-div-column'>
      <span className='form-field-text'>Password</span>
      <span><input placeholder='password' type="password" className='form-input-tag' name="password"/></span>
      <span className='forget-password'>Forgot Password ?</span>
      </div>
      <div>
      <button className='form-signup-btn text-font'>Sign Up</button>
      </div>
      <div className='make-div-row'>
      <span><input style={{border: '0.795px solid var(--text-slate-color-20, #CBD1D8)', background: '#FAFAFC'}} type='checkbox'/></span>
      <span style={{color: 'var(--text-slate-color-50, #7E8B9E)', marginLeft: '5px'}} className='text-font'>Remember Me </span>
      </div>
      <div>
      <span className='text-font'>Already have an account</span>
      <span className='text-font' style={{color: '#0E5DF6'}}> Log in </span>
      </div>
      <div className='make-div-row'>
      <span><img className='lines ' src='/images/line.svg' alt='line'/></span>
      <span className='make-div-column text-font' style={{color: 'var(--text-slate-color-50, #7E8B9E)'}}>OR</span>
      <span><img className='lines' src='/images/line.svg' alt='line'/></span>
      </div>
      <div className='form-input-tag' style={{background:'#FFF', borderRadius: '24px', border: '1px solid #00111A' , padding: '3px 7px', justifyContent: 'center'}}>
      <div className='make-div-row' style={{justifyContent: 'center'}}>
       <span><img src='/images/googleIcon.svg' alt='google icon'/></span>
       <span className='make-div-column text-font' style={{justifyContent: 'center', marginTop: '-4px', color: '#00111A'}}>Login with Google</span>
      </div>
      </div>
      </div>
    </div>
  )
}

export default SignupForm
