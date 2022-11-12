import React from "react";
import { Link } from "react-router-dom";
import "./NavSidebar.css"

const NavSidebar = ({showNavSideBar, onCloseNavSideBar}) => {
    return (
        <div className={showNavSideBar === true ? "nav-sidebar nav-sidebar-active" : "nav-sidebar"}>
            <div className="nav-sidebar-content">
                <button onClick={onCloseNavSideBar} className="nav-sidebar-close">
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <ul className="nav-sidebar-list">
                    <li className="nav-sidebar-item">
                        <Link to="/">
                            <div className="nav-sidebar-item-group">
                                <i className="fa-solid fa-house"></i>
                                <p>Trang Chủ</p>
                            </div>
                            <i className="fa-solid fa-angle-right dropdown"></i>
                        </Link>
                    </li>
                    <li className="nav-sidebar-item">
                        <Link to="shop-page">
                            <div className="nav-sidebar-item-group">
                                <i className="fa-solid fa-shop"></i>
                                <p>Sản Phẩm</p>
                            </div>
                            <i className="fa-solid fa-angle-right dropdown"></i>
                        </Link>
                        <ul>
                            <li>
                                <span>-</span>
                                <a href="">Rau</a>
                            </li>
                            <li>
                                <span>-</span>
                                <a href="">Quả</a>
                            </li>
                            <li>
                                <span>-</span>
                                <a href="">Củ</a>
                            </li>
                            <li>
                                <span>-</span>
                                <a href="">Thức Uống</a>
                            </li>
                            <li>
                                <span>-</span>
                                <a href="">Thịt</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-sidebar-item">
                        <Link to="about-page">
                            <div className="nav-sidebar-item-group">
                                <i className="fa-solid fa-circle-info"></i>
                                <p>Giới Thiệu</p>
                            </div>
                            <i className="fa-solid fa-angle-right dropdown"></i>
                        </Link>
                    </li>
                    <li className="nav-sidebar-item">
                        <Link to="blog-page">
                            <div className="nav-sidebar-item-group">
                                <i className="fa-brands fa-blogger"></i>
                                <p>Tin Tức</p>
                            </div>
                            <i className="fa-solid fa-angle-right dropdown"></i>
                        </Link>
                    </li>
                    <li className="nav-sidebar-item">
                        <Link to="contact-page">
                            <div className="nav-sidebar-item-group">
                                <i className="fa-solid fa-address-book"></i>
                                <p>Liên Hệ</p>
                            </div>
                            <i className="fa-solid fa-angle-right dropdown"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavSidebar;
