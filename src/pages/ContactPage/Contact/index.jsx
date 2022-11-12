import React from "react";
import "./Contact.css";
import Iframe from "react-iframe";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="contact-card">
              <i className="fa-solid fa-location-dot"></i>
              <h4>Địa Chỉ</h4>
              <p>Cơ sở 1: 14 ngõ 4, Nguyễn Đình Chiểu, Hai Bà Trưng, Hà Nội</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="contact-card">
              <i className="fa-solid fa-location-dot"></i>
              <h4>Số Điên Thoại</h4>
              <p>0336294777</p>
              <p>0862669875</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="contact-card">
              <i className="fa-solid fa-location-dot"></i>
              <h4>Email</h4>
              <p>support@gmail.com</p>
              <p>sale@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="contact-map">
            <Iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7449.724758644388!2d105.79431749999999!3d20.998153!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad5e6a49f693%3A0x13aeab8c73d00e0c!2sTechmaster!5e0!3m2!1svi!2s!4v1660186919368!5m2!1svi!2s"
                width="500"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="contact-form">
              <h4>Phản Hồi Của Bạn</h4>
              <div className="form-group">
                <div className="form-group-input">
                  <input type="text" placeholder="Tên" id="username" />
                  <i className="fa-solid fa-user"></i>
                  <small>Error message</small>
                </div>
              </div>
              <div className="form-group">
                <div className="form-group-input">
                  <input type="text" placeholder="Email" id="email" />
                  <i className="fa-solid fa-at"></i>
                  <small>Error message</small>
                </div>
              </div>
              <div className="form-group">
                <div className="form-group-input">
                  <input type="text" placeholder="Số Điện Thoại" id="phone" />
                  <i className="fa-solid fa-mobile-screen-button"></i>
                  <small>Error message</small>
                </div>
              </div>
              <div className="form-group">
                <div className="form-group-input">
                  <input type="text" placeholder="Tin Nhắn" id="message" />
                  <i className="fa-solid fa-envelope"></i>
                  <small>Error message</small>
                </div>
              </div>
              <button type="submit" className="form-group-btn">
                <i className="fa-solid fa-envelope"></i>
                <span>Gửi Tin Nhắn</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
