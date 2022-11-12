import React from 'react'
import "./Testimonial.css"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import avatar7 from "../../../assets/image/avatar-7.png"
import avatar8 from "../../../assets/image/avatar-8.png"
import avatar9 from "../../../assets/image/avatar-9.png"

const Testimonial = () => {
  return (
    <section className="about-testimonial">
        <div className="container">
            <div className="about-testimonial-title">
              <h2>Nhân Sự Chủ Chốt</h2>
            </div>
            <ul className="testimonial-slider">
                <Slider>
                    <li>
                        <div className="testimonial-content">
                            <div className="testimonial-img">
                                <img src={avatar7} alt=""/>
                            </div>
                            <div className="testimonial-quote">
                                <i className="fa-solid fa-quote-left"></i>
                                <p>Ông sinh năm 1959. Ông là thành viên HĐQT của Greeny và đảm nhiệm vị trí Chủ tịch HĐQT từ tháng 4/2022.</p>
                                <h4>Nguyễn Hạnh Phúc</h4>
                                <h6>Chủ tịch Hội đồng Quản trị </h6>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="testimonial-content">
                            <div className="testimonial-img">
                                <img src={avatar8} alt=""/>
                            </div>
                            <div className="testimonial-quote">
                                <i className="fa-solid fa-quote-left"></i>
                                <p>Bà sinh năm 1953. Bà là Chủ tịch HĐQT từ tháng 11/2003 đến năm 2015 và sau đó vẫn tiếp tục là thành viên HĐQT cho đến nay. Bà là Tổng Giám đốc Công ty Greeny từ tháng 12/1992.</p>
                                <h4>Mai Kiều Liên</h4>
                                <h6>Tổng Giám Đốc</h6>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="testimonial-content">
                            <div className="testimonial-img">
                                <img src={avatar9} alt=""/>
                            </div>
                            <div className="testimonial-quote">
                                <i className="fa-solid fa-quote-left"></i>
                                <p>Ông sinh năm 1962, gia nhập Greeny năm 2005.Kỹ sư Năng lượng và tự động hóa, Đại học Bách khoa Odessa, Liên Xô cũ (năm 1985).</p>
                                <h4>Ông Trịnh Quốc Dũng</h4>
                                <h6>Giám đốc Điều hành Phát triển
                                  vùng nguyên liệu</h6>
                            </div>
                        </div>
                    </li>
                </Slider>
            </ul>
        </div>
    </section>
  )
}

export default Testimonial