import React from 'react'
import Header from '../Header'
import ProductCategories from './ProductCategories'
import DonateNow from './DonateNow'
import DonationBanner from './DonationBanner'
import DonationCart from './DonationCart'
import DImages from './DImages'
import About from './About'

function Donation() {
  return (
    <div>
    <Header/>
    <ProductCategories/>
    <DonateNow/>
    <DonationBanner/>
    <DonationCart/>
    <DImages/>
    <About/>
    </div>
  )
}

export default Donation
