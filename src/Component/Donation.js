import React from 'react'
import Header from '../Header'
import ProductCategories from './ProductCategories'
import DonateNow from './DonateNow'
import DonationBanner from './DonationBanner'
import DonationCart from './DonationCart'
import DImages from './DImages'

function Donation() {
  return (
    <div>
    <Header/>
    <ProductCategories/>
    <DonateNow/>
    <DonationBanner/>
    <DonationCart/>
    <DImages/>
    </div>
  )
}

export default Donation
