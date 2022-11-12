import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import avatar1 from "../../../assets/image/avatar-1.jpg";
import avatar3 from "../../../assets/image/avatar-3.jpg";
import avatar4 from "../../../assets/image/avatar-4.jpg";
import avatar5 from "../../../assets/image/avatar-5.jpg";
import avatar6 from "../../../assets/image/avatar-6.jpg";

const Testimonial = () => {

    const settings = {
        classNameName: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "250px",
        slidesToShow: 1,
        speed: 500,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '150px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
              }
            }
          ]
      };

    return (
        <section className="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="testimonial-title">
                            <h2>Phản Hồi Khách Hàng</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 testimonial-slick">
                        <Slider {...settings}>
                            <div className="testimonial-card">
                                <i className="fa-solid fa-quote-left"></i>
                                <p>
                                    Sản phẩm tươi sạch, ngon, đóng gói đẹp cẩn
                                    thận xứng đáng với đồng tiền bỏ ra.Sẽ mua
                                    ủng hộ nhiều lần
                                </p>
                                <h5>Vũ Việt Cường</h5>
                                <ul>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                </ul>
                                <img src={avatar3} alt="" />
                            </div>
                            <div className="testimonial-card">
                                <i className="fa-solid fa-quote-left"></i>
                                <p>
                                    Sản phẩm tươi sạch, ngon, đóng gói đẹp cẩn
                                    thận xứng đáng với đồng tiền bỏ ra.Sẽ mua
                                    ủng hộ nhiều lần
                                </p>
                                <h5>Vũ Việt Cường</h5>
                                <ul>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                </ul>
                                <img src={avatar4} alt="" />
                            </div>
                            <div className="testimonial-card">
                                <i className="fa-solid fa-quote-left"></i>
                                <p>
                                    Sản phẩm tươi sạch, ngon, đóng gói đẹp cẩn
                                    thận xứng đáng với đồng tiền bỏ ra.Sẽ mua
                                    ủng hộ nhiều lần
                                </p>
                                <h5>Vũ Việt Cường</h5>
                                <ul>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                </ul>
                                <img src={avatar5} alt="" />
                            </div>
                            <div className="testimonial-card">
                                <i className="fa-solid fa-quote-left"></i>
                                <p>
                                    Sản phẩm tươi sạch, ngon, đóng gói đẹp cẩn
                                    thận xứng đáng với đồng tiền bỏ ra.Sẽ mua
                                    ủng hộ nhiều lần
                                </p>
                                <h5>Vũ Việt Cường</h5>
                                <ul>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                </ul>
                                <img src={avatar6} alt="" />
                            </div>
                            <div className="testimonial-card">
                                <i className="fa-solid fa-quote-left"></i>
                                <p>
                                    Sản phẩm tươi sạch, ngon, đóng gói đẹp cẩn
                                    thận xứng đáng với đồng tiền bỏ ra.Sẽ mua
                                    ủng hộ nhiều lần
                                </p>
                                <h5>Vũ Việt Cường</h5>
                                <ul>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                </ul>
                                <img src={avatar1} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
