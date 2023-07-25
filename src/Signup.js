import React from 'react'
import Header from './Header'
import Logo from './Logo'
import ImageSection from './ImageSection'
import SignupForm from './SignupForm'

function Signup() {
  return (
    <div>
      <Header/>
      <Logo/>
      <div id = 'main-content'>
       <ImageSection/>
       <SignupForm/>
      </div>
    </div>
  )
}

export default Signup
