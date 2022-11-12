import React from "react";

import "./Intro.css"

const Intro = () => {
    return (
        <section className="intro">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <div className="intro-wrap">
                            <div className="intro-icon">
                                <i className="fa-solid fa-truck"></i>
                            </div>
                            <div className="intro-content">
                                <h5>Giao Hàng Tận Nhà</h5>
                                <p>
                                    Chúng tôi có dịch vụ giao hàng tận nơi trên
                                    toàn quốc, áp dụng cho khách mua hàng trên
                                    website, fanpage và gọi điện thoại ...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="intro-wrap">
                            <div className="intro-icon">
                                <i className="fa-solid fa-rotate"></i>
                            </div>
                            <div className="intro-content">
                                <h5>Chính sách hoàn chả</h5>
                                <p>
                                    Chúng tôi sẽ thực hiện việc đổi/trả hàng và
                                    hoàn tiền cho khách hàng
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="intro-wrap">
                            <div className="intro-icon">
                                <i className="fa-solid fa-headset"></i>
                            </div>
                            <div className="intro-content">
                                <h5>Hỗ chợ nhanh chóng</h5>
                                <p>Nhanh chóng, kịp thời và đúng đối tượng</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="intro-wrap">
                            <div className="intro-icon">
                                <i className="fa-solid fa-lock"></i>
                            </div>
                            <div className="intro-content">
                                <h5>Thanh toán an toàn</h5>
                                <p>
                                    Thanh toán online an toàn qua dịch vụ
                                    e-banking, internet banking,...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
