import React from "react";
import "./Blogs.css";

import blog1 from "../../../assets/image/blog-1.jpg";
import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <section className="blogs">
            <div className="container">
                <div className="row flex-wrap-reverse">
                    <div className="col-lg-8 col-md-8">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="blogs-card">
                                    <div className="blogs-image">
                                        <img src={blog1} alt="" />
                                    </div>
                                    <div className="blogs-content">
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-user"></i>
                                                <span>Cường</span>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-calendar-days"></i>
                                                <span> 08-2022</span>
                                            </li>
                                        </ul>
                                        <h4>
                                            Cách làm tôm rim ngon nức lòng chỉ
                                            với 3 bước cực đơn giản
                                        </h4>
                                        <p>
                                            Trong bữa cơm nhà mà có món tôm rim
                                            mằn mặn, đậm đà thì chắc là nồi cơm
                                            sẽ hết lúc nào không hay{" "}
                                        </p>
                                        <Link to="/blog-detail-page">
                                            <span>Đọc thêm</span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="blogs-card">
                                    <div className="blogs-image">
                                        <img src={blog1} alt="" />
                                    </div>
                                    <div className="blogs-content">
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-user"></i>
                                                <span>Đài</span>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-calendar-days"></i>
                                                <span> 08-2022</span>
                                            </li>
                                        </ul>
                                        <h4>
                                            Bông cải xanh kỵ gì? Những trường
                                            hợp không nên ăn{" "}
                                        </h4>
                                        <p>
                                            Bữa ăn gia đình không chỉ thơm ngon
                                            hơn mà còn mang màu sắc bắt mắt, hấp
                                            dẫn hơn khi có sự xuất hiện của bông
                                            cải xanh.{" "}
                                        </p>
                                        <Link to="/blog-detail-page">
                                            <span>Đọc thêm</span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="blogs-card">
                                    <div className="blogs-image">
                                        <img src={blog1} alt="" />
                                    </div>
                                    <div className="blogs-content">
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-user"></i>
                                                <span>Hậu</span>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-calendar-days"></i>
                                                <span> 08-2022</span>
                                            </li>
                                        </ul>
                                        <h4>
                                            Nên chọn cà chua thường hay cà chua
                                            bi?
                                        </h4>
                                        <p>
                                            Cà chua là thực phẩm vô cùng quen
                                            thuộc trong bữa ăn hàng ngày của
                                            chúng ta. Nó cũng khá đa dạng
                                        </p>
                                        <Link to="/blog-detail-page">
                                            <span>Đọc thêm</span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="blogs-card">
                                    <div className="blogs-image">
                                        <img src={blog1} alt="" />
                                    </div>
                                    <div className="blogs-content">
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-user"></i>
                                                <span>Hiếu</span>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-calendar-days"></i>
                                                <span> 08-2022</span>
                                            </li>
                                        </ul>
                                        <h4>
                                            Có phải ăn nhiều rau củ là tốt? Nên
                                            ăn bao nhiêu là đủ?
                                        </h4>
                                        <p>
                                            Các bậc phụ huynh luôn khuyến khích
                                            con em mình ăn nhiều rau củ với lời
                                            “quảng cáo” về nhiều lợi ích tuyệt
                                            vời
                                        </p>
                                        <Link to="/blog-detail-page">
                                            <span>Đọc thêm</span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="blogs-card">
                                    <div className="blogs-image">
                                        <img src={blog1} alt="" />
                                    </div>
                                    <div className="blogs-content">
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-user"></i>
                                                <span>Hưng</span>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-calendar-days"></i>
                                                <span> 08-2022</span>
                                            </li>
                                        </ul>
                                        <h4>
                                            Khung giờ ngủ tốt nhất cho từng nhóm
                                            tuổi
                                        </h4>
                                        <p>
                                            Tùy vào độ tuổi mà con người điều
                                            chỉnh thời gian ngủ - thức khác
                                            nhau. Một cách tốt nhất là chúng ta
                                            nên nhất quán về khung giờ ngủ
                                        </p>
                                        <Link to="/blog-detail-page">
                                            <span>Đọc thêm</span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="blogs-card">
                                    <div className="blogs-image">
                                        <img src={blog1} alt="" />
                                    </div>
                                    <div className="blogs-content">
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-user"></i>
                                                <span>Nhi</span>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-calendar-days"></i>
                                                <span> 08-2022</span>
                                            </li>
                                        </ul>
                                        <h4>
                                            Ăn gì để tăng testosterone nam mà
                                            không cần nhờ đến thuốc?
                                        </h4>
                                        <p>
                                            Không chỉ cần thay đổi thói quen
                                            sinh hoạt, ngủ nghỉ hàng ngày, chế
                                            độ dinh dưỡng cũng đóng một vai trò
                                            hết sức quan trọng
                                        </p>
                                        <Link to="/blog-detail-page">
                                            <span>Đọc thêm</span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row">
                        <div className="col-lg-12">
                            <div className="shop-paginate">
                                <p>Hiển Thị 12 Trên 60 Kết Quả</p>
                                <ul className="pagination">
                                    <li className="pagination-item">
                                        <a href="">
                                            <i className="fa-solid fa-arrow-left-long"></i>
                                        </a>
                                    </li>
                                    <li className="pagination-item">
                                        <a className=" active" href="">1</a>
                                    </li>
                                    <li className="pagination-item">
                                        <a href="">2</a>
                                    </li>
                                    <li className="pagination-item">
                                        <a href="">3</a>
                                    </li>
                                    <li className="pagination-item">
                                        ...
                                    </li>
                                    <li className="pagination-item">
                                        <a href="">60</a>
                                    </li>
                                    <li className="pagination-item">
                                        <a href="">
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>  */}
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="blogs-widget">
                            <h3 className="bolgs-widget-title">Tìm Blog</h3>
                            <form className="blogs-widget-form">
                                <input type="text" placeholder="Tìm blogs" />
                                <button>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </form>
                        </div>
                        <div className="blogs-widget">
                            <h3 className="bolgs-widget-title">
                                Bài Viết Nổi Bật
                            </h3>
                            <ul className="blogs-widget-featured">
                                <li>
                                    <Link to="/blog-detail-page">
                                        <img src={blog1} alt="" />
                                    </Link>
                                    <h6>
                                        <Link to="/blog-detail-page">
                                            Gợi ý các món ăn với ốc hương ngon
                                            khó cưỡng cho team mê hải sản
                                        </Link>
                                        <span>tháng 8 năm 2022</span>
                                    </h6>
                                </li>
                                <li>
                                    <Link to="/blog-detail-page">
                                        <img src={blog1} alt="" />
                                    </Link>
                                    <h6>
                                        <Link to="/blog-detail-page">
                                            Những cách tăng cân cho người gầy
                                            khó hấp thụ được chuyên gia bật mí
                                        </Link>
                                        <span>tháng 8 năm 2022</span>
                                    </h6>
                                </li>
                                <li>
                                    <Link to="/blog-detail-page">
                                        <img src={blog1} alt="" />
                                    </Link>
                                    <h6>
                                        <Link to="/blog-detail-page">
                                            Ăn gì để giảm mụn? Lưu lại ngay danh
                                            sách dưới đây để trị mụn hiệu quả
                                        </Link>
                                        <span>tháng 8 năm 2022</span>
                                    </h6>
                                </li>
                                <li>
                                    <Link to="/blog-detail-page">
                                        <img src={blog1} alt="" />
                                    </Link>
                                    <h6>
                                        <Link to="/blog-detail-page">
                                            Xuýt xoa trước những món ăn với bạch
                                            tuộc giòn ngon đậm đà
                                        </Link>
                                        <span>tháng 8 năm 2022</span>
                                    </h6>
                                </li>
                                <li>
                                    <Link to="/blog-detail-page">
                                        <img src={blog1} alt="/" />
                                    </Link>
                                    <h6>
                                        <Link to="/blog-detail-page">
                                            Cá nục làm gì ngon nhất? Khám phá
                                            món ăn ngon giàu dinh dưỡng
                                        </Link>
                                        <span>tháng 8 năm 2022</span>
                                    </h6>
                                </li>
                            </ul>
                        </div>
                        <div className="blogs-widget">
                            <h3 className="bolgs-widget-title">Chia sẻ Blog</h3>
                            <ul className="blogs-widget-social">
                                <li>
                                    <a href="">
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa-brands fa-pinterest-p"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
