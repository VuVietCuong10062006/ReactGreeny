import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavSidebar.css";

const NavSidebar = ({ showNavSideBar, onCloseNavSideBar }) => {
  const [showListShop, setShowListShop] = useState(false);

  const handleShowListShop = () => {
    setShowListShop(!showListShop);
  };
  return (
    <div
      className={
        showNavSideBar === true
          ? "nav-sidebar nav-sidebar-active"
          : "nav-sidebar"
      }
    >
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
              <i
                onClick={handleShowListShop}
                className="fa-solid fa-angle-right dropdown"
              ></i>
            </Link>
            {showListShop && (
              <ul>
                <li>
                  <span>-</span>
                  <Link to="/shop-page">Rau</Link>
                </li>
                <li>
                  <span>-</span>
                  <Link to="/shop-page">Quả</Link>
                </li>
                <li>
                  <span>-</span>
                  <Link to="/shop-page">Củ</Link>
                </li>
                <li>
                  <span>-</span>
                  <Link to="/shop-page">Thức Uống</Link>
                </li>
                <li>
                  <span>-</span>
                  <Link to="/shop-page">Thịt</Link>
                </li>
              </ul>
            )}
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
