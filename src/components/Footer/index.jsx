import React from 'react'
import './Footer.css'
import logo from "../../assets/image/logo.png"
import payment5 from '../../assets/image/payment-5.png'
import payment6 from '../../assets/image/payment-6.png'
import payment7 from '../../assets/image/payment-7.png'
import payment8 from '../../assets/image/payment-8.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-lg-3 col-xl-3 mb-4">
          <div className="footer-widget">
            <Link className="footer-logo" to="/">
              <img src={logo} alt=""/>
            </Link>
            <p>Tên công ty: CÔNG TY CỔ PHẦN ĐẦU TƯ GREENY</p>
            <p>Mã Số thuế: 0311428380</p>
            <ul className="footer-social">
              <li>
                <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
              </li>
              <li>
                <a href="https://www.pinterest.com/" target="_blank"><i className="fa-brands fa-pinterest-p"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 col-xl-3 mb-4">
          <div className="footer-contact">
            <h3 className="footer-title">Liên Hệ Chúng Tôi</h3>
            <ul>
              <li>
                <i className="fa-solid fa-at"></i>
                <p>
                  <span>support@gmail.com</span>
                  <span>sale@gmail.com</span>
                </p>
              </li>
              <li>
                <i className="fa-solid fa-mobile-screen-button"></i>
                <p>
                  <span>0336294777</span>
                  <span>0862669875</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 col-xl-3 mb-4">
          <div className="footer-links">
            <h3 className="footer-title">Đường Dẫn Nhanh</h3>
            <Link to="/">Trang Chủ</Link>
            <Link to="shop-page">Sản Phẩm</Link>
            <Link to="blog-page">Tin Tức</Link>
            <Link to="contact-page">Liên Hệ</Link>
            <Link to="about-page">Giới Thiệu</Link>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 col-xl-3 mb-4">
          <div className="footer-address">
            <h3 className="footer-title">Địa chỉ</h3>
            <p>Cơ sở 1: 14 ngõ 4, Nguyễn Đình Chiểu, Quận Hai Bà Trưng, Hà Nội</p>
            <p>Cơ sở 2: Tầng 12A, tòa nhà Viwaseen Tower, số 48, Tố Hữu, Lê Văn Lương kéo dài, Hà Nội</p>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-lg-12">
          <div className="footer-bottom">
            <p>
              ©2022 Bản quyền thuộc về  
              <Link to='/'>Greeny</Link>
            </p>
            <div className="footer-card">
              <Link to='/'>
                <img src={payment5} alt=""/>
              </Link>
              <Link to='/'>
                <img src={payment6} alt=""/>
              </Link>
              <Link to='/'>
                <img src={payment7} alt=""/>
              </Link>
              <Link to='/'>
                <img src={payment8} alt=""/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer