import React from 'react'
import FormComponent from './Component/FormComponent'

function SignupForm() {
  return (
    <div className='signupForm'>
      <div className='form'>
      <div className='make-div-column'>
      <span id='signup-text'>Sign Up</span>  
      <span id='lwr-text'>Sign up for free to access to in any of our products </span>
      </div>
      <FormComponent/>
      </div>
    </div>
  )
}

export default SignupForm
