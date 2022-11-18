import React from 'react'
import Intro from '../HomePage/Intro'
import ShopBanner from '../ShopPage/ShopBanner'
import Introduce from './Introduce'
import Team from './Team'
import Testimonial from './Testimonial'

const AboutPage = () => {
  return (
    <>
        <section className="shop-banner">
        <div className="container">
            <h2>Giới thiệu</h2>
            <ol className="content">
                <li className="content-item">Trang chủ</li>
                <li className="content-item active">Giới thiệu</li>
            </ol>
        </div>
    </section>
        <Introduce/>
        <Testimonial/>
        <Team/>
        <Intro/>
    </>
  )
}

export default AboutPage