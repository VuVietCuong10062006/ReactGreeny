import React from "react";
import "./Team.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import avatar10 from "../../../assets/image/avatar-10.jpg";
import avatar11 from "../../../assets/image/avatar-11.jpg";
import avatar12 from "../../../assets/image/avatar-12.jpg";
import avatar13 from "../../../assets/image/avatar-13.jpg";
import avatar14 from "../../../assets/image/avatar-14.jpg";

const Team = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                arrows: false,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                arrows: false,
                slidesToShow: 1
              }
            }
          ]
      };

    return (
        <section className="about-team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about-team-title">
                            <h2>Đội ngũ phát triển</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="about-team-slider">
                            <Slider {...settings}>
                                <li>
                                    <div className="about-team-media">
                                        <img src={avatar10} alt="" />
                                        <div className="about-team-overlay">
                                            <a href="">
                                                <i className="fa-brands fa-facebook"></i>
                                            </a>
                                            <a href="">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                            <a href="">
                                                <i className="fa-brands fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="about-team-info">
                                        <h5>Huỳnh Thị Nga</h5>
                                        <p>Developer</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="about-team-media">
                                        <img src={avatar11} alt="" />
                                        <div className="about-team-overlay">
                                            <a href="">
                                                <i className="fa-brands fa-facebook"></i>
                                            </a>
                                            <a href="">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                            <a href="">
                                                <i className="fa-brands fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="about-team-info">
                                        <h5>Vũ Việt Cường</h5>
                                        <p>Developer</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="about-team-media">
                                        <img src={avatar12} alt="" />
                                        <div className="about-team-overlay">
                                            <a href="">
                                                <i className="fa-brands fa-facebook"></i>
                                            </a>
                                            <a href="">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                            <a href="">
                                                <i className="fa-brands fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="about-team-info">
                                        <h5>Huỳnh Thị Liên</h5>
                                        <p>Developer</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="about-team-media">
                                        <img src={avatar13} alt="" />
                                        <div className="about-team-overlay">
                                            <a href="">
                                                <i className="fa-brands fa-facebook"></i>
                                            </a>
                                            <a href="">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                            <a href="">
                                                <i className="fa-brands fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="about-team-info">
                                        <h5>Lại Cao Đài</h5>
                                        <p>Developer</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="about-team-media">
                                        <img src={avatar14} alt="" />
                                        <div className="about-team-overlay">
                                            <a href="">
                                                <i className="fa-brands fa-facebook"></i>
                                            </a>
                                            <a href="">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                            <a href="">
                                                <i className="fa-brands fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="about-team-info">
                                        <h5>Phan Duy Hậu</h5>
                                        <p>Developer</p>
                                    </div>
                                </li>
                            </Slider>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
