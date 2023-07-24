import React from 'react'
import Header from './Header'
import Logo from './Logo'
import ImageSection from './ImageSection'

function LogIn() {
  return (
    <div>
      <Header/>
      <Logo/>
      <div id = 'main-content'>
       <ImageSection/>
      </div>
    </div>
  )
}

export default LogIn
