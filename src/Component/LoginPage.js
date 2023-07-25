import React from 'react'
import Header from '../Header'
import Logo from '../Logo'
import ImageSection from '../ImageSection'
import LoginForm from './LoginForm'

function LoginPage() {
  return (
    <div>
      <Header/>
      <Logo/>
      <div id='main-content'>
      <ImageSection/>
      <LoginForm value = "login"/>
      </div>
    </div>
  )
}

export default LoginPage
