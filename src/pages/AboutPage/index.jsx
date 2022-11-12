import React from 'react'
import Intro from '../HomePage/Intro'
import ShopBanner from '../ShopPage/ShopBanner'
import Introduce from './Introduce'
import Team from './Team'
import Testimonial from './Testimonial'

const AboutPage = () => {
  return (
    <>
        <ShopBanner/>
        <Introduce/>
        <Testimonial/>
        <Team/>
        <Intro/>
    </>
  )
}

export default AboutPage