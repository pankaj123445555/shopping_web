import React from 'react'
import Header from '../Header'
import ProductCategories from './ProductCategories'
import DonateNow from './DonateNow'
import DonationBanner from './DonationBanner'
import DonationCart from './DonationCart'

function Donation() {
  return (
    <div>
    <Header/>
    <ProductCategories/>
    <DonateNow/>
    <DonationBanner/>
    <DonationCart/>
    </div>
  )
}

export default Donation
