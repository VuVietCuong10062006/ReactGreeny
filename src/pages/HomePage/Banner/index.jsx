import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./Banner.css";
import banner1 from "../../../assets/image/banner-1.png";
import banner2 from "../../../assets/image/banner-2.png";

const Banner = () => {
    return (
        <section className="banner">
            <Slider>
                <div className="banner-part banner-1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-6">
                                <div className="banner-content">
                                    <h1>Giao Hàng Tận Nhà Miễn Phí Trong 24h</h1>
                                    <p>
                                        Green có dịch vụ giao hàng tận nơi trên toàn
                                        quốc, áp dụng cho khách mua hàng trên
                                        website, fanpage và gọi điện thoại,...
                                    </p>
                                    <div className="banner-btn">
                                        <a
                                            className="btn btn-inline"
                                            href="./page/shop.html"
                                        >
                                            <i className="fa-solid fa-basket-shopping"></i>
                                            <span>MUA NGAY</span>
                                        </a>
                                        <a className="btn btn-outline" href="">
                                            <i className="fa-solid fa-basket-shopping"></i>
                                            <span>NHẬN CODE</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="banner-img">
                                    <img src={banner1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-part banner-1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-6">
                                <div className="banner-img">
                                    <img src={banner2} alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="banner-content">
                                    <h1>Giao Hàng Tận Nhà Miễn Phí Trong 24h</h1>
                                    <p>
                                        Green có dịch vụ giao hàng tận nơi trên toàn
                                        quốc, áp dụng cho khách mua hàng trên
                                        website, fanpage và gọi điện thoại,...
                                    </p>
                                    <div className="banner-btn">
                                        <a
                                            className="btn btn-inline"
                                            href="./page/shop.html"
                                        >
                                            <i className="fa-solid fa-basket-shopping"></i>
                                            <span>MUA NGAY</span>
                                        </a>
                                        <a className="btn btn-outline" href="">
                                            <i className="fa-solid fa-basket-shopping"></i>
                                            <span>NHẬN CODE</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );
};

export default Banner;
