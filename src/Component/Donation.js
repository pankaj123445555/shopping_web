import React from 'react'
import Header from '../Header'
import ProductCategories from './ProductCategories'
import DonateNow from './DonateNow'
import DonationBanner from './DonationBanner'

function Donation() {
  return (
    <div>
    <Header/>
    <ProductCategories/>
    <DonateNow/>
    <DonationBanner/>
    </div>
  )
}

export default Donation
