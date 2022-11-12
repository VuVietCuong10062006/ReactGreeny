import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/image/logo.png";
import user from "../../assets/image/user.png";
import avatar from "../../assets/image/avatar.jpg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, } from "../../redux/productCartSlice";
import { getAuth, authLogout } from "../../redux/authSlice";
import CartSideBar from "./CartSideBar";
import HeartSideBar from "./HeartSideBar";
import NavSidebar from "./NavSidebar";
import Overlay from "../Overlay";
// import axiosClient from "../../api/axiosClient";
import productApi from "../../api/productApi";
import useDebounce from "../../hooks/useDebounce";
// import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const productCart = useSelector((state) => state.productCart.productCart);
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    dispatch(getAuth());
  }, []);

  const [inputSearch, setInputSearch] = useState("");
  const [productSearch, setProductSearch] = useState([]);
  const [showHeaderSearch, setShowHeaderSearch] = useState(false);
  const [showCartSideBar, setShowCartSideBar] = useState(false);
  const [showHeartSideBar, setShowHeartSideBar] = useState(false);
  const [showNavSideBar, setShowNavSideBar] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showMenuAccount, setShowMenuAccount] = useState(false);

  const handleInputSearch = (searchValue) => {
    setInputSearch(searchValue);
  };

  const debounce = useDebounce(inputSearch, 700);

  useEffect(() => {
    if (debounce.trim() === "") {
      return;
    }
    productApi.searchProduct(debounce).then((data) => {
      console.log(data);
      setProductSearch(data);
    });
  }, [debounce]);

  const handleLogout = () => {
    dispatch(authLogout());
    navigate("/")
  };
  const handleCheckout = () => {
    setShowOverlay(false);
    setShowCartSideBar(false);
  };

  const handleClickNavSideBar = () => {
    setShowNavSideBar(true);
    setShowOverlay(true);
  };

  const handleClickHeartSideBar = () => {
    setShowHeartSideBar(true);
    setShowOverlay(true);
  };

  const handleClickCartSideBar = () => {
    setShowCartSideBar(true);
    setShowOverlay(true);
  };

  const handleCloseCartSideBar = () => {
    setShowCartSideBar(false);
    setShowOverlay(false);
  };

  const handleCloseHeartSideBar = () => {
    setShowHeartSideBar(false);
    setShowOverlay(false);
  };

  const handleCloseNavSideBar = () => {
    setShowNavSideBar(false);
    setShowOverlay(false);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setShowHeartSideBar(false);
    setShowCartSideBar(false);
    setShowNavSideBar(false);
  };

  const handleShowMenuAccount = () => {
    setShowMenuAccount((prev) => !prev);
  };

  return (
    <>
      <div className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-content">
              <button
                onClick={() => handleClickNavSideBar()}
                className="btn-nav-sidebar"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
              {!auth.id && (
                <div className="account-clone">
                  <Link
                    to="/login"
                    className="header-account header-account-clone"
                  >
                    <img src={user} alt="Account" />
                  </Link>
                </div>
              )}

              {auth.id && (
                <div className="account-clone">
                  <div
                    onClick={handleShowMenuAccount}
                    className="header-account header-account-clone"
                  >
                    <img src={avatar} alt="Account" />
                  </div>
                  <div
                    className={
                      showMenuAccount === true
                        ? "action action-active"
                        : "action"
                    }
                  >
                    <div className="info">
                      <img src={avatar} alt="" />
                      <h4>Vũ Việt Cường</h4>
                      <p>vuvietcuong@gmail.com</p>
                    </div>
                    <ul>
                      <li onClick={handleLogout} className="logout">
                        <i className="fa-solid fa-arrow-up-from-bracket"></i>
                        <span>Đăng xuất</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              <Link to="/" className="header-logo">
                <img src={logo} alt="Logo" />
              </Link>

              {!auth.id && (
                <div className="account">
                  <Link to="/login" className="header-account">
                    <img src={user} alt="Account" />
                  </Link>
                </div>
              )}

              {auth.id && (
                <div onClick={handleShowMenuAccount} className="account">
                  <div className="header-account">
                    <img src={avatar} alt="Account" />
                  </div>
                  <div
                    className={
                      showMenuAccount === true
                        ? "action action-active"
                        : "action"
                    }
                  >
                    <div className="info">
                      <img src={avatar} alt="" />
                      <h4>Vũ Việt Cường</h4>
                      <p>vuvietcuong@gmail.com</p>
                    </div>
                    <ul>
                      <li onClick={handleLogout} className="logout">
                        <i className="fa-solid fa-arrow-up-from-bracket"></i>
                        <span>Đăng xuất</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              <div
                className={
                  showHeaderSearch === true
                    ? "header-search header-search-active"
                    : "header-search"
                }
              >
                <input
                  value={inputSearch}
                  type="text"
                  placeholder="Tìm Kiếm"
                  onChange={(e) => handleInputSearch(e.target.value)}
                  onBlur={() => {
                    setInputSearch("");
                    setProductSearch([]);
                  }}
                />
                <button>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <div className="search-product">
                  <ul className="search-product-list">
                    {productSearch.map((product) => (
                      <li key={product.id} className="search-product-item">
                        <Link to={`/${product.id}`}>
                          <div className="search-product-image">
                            <img src={product.images[0]} alt="" />
                          </div>
                          <div className="search-product-content">
                            <h6>{product.name}</h6>
                            <p>{product.price}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="header-group">
                <button
                  onClick={() => setShowHeaderSearch(!showHeaderSearch)}
                  className="header-search-responsive"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <a className="header-wish">
                  <i
                    onClick={() => handleClickHeartSideBar()}
                    className="fa-solid fa-heart"
                  ></i>
                  <div className="header-heart-number">
                    <p>1</p>
                  </div>
                </a>
                <a className="header-cart">
                  <i
                    onClick={() => handleClickCartSideBar()}
                    className="fa-solid fa-basket-shopping"
                  ></i>
                  <div className="header-cart-number">
                    <p>{productCart.length}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-bot">
          <div className="container">
            <div className="navbar-content">
              <ul className="navbar-list">
                <li className="navbar-item">
                  <NavLink end className="nav-link" to="/">
                    Trang Chủ
                  </NavLink>
                </li>
                <li className="navbar-item dropdown">
                  <NavLink className="nav-link" to="shop-page">
                    Sản Phẩm
                  </NavLink>
                  <ul className="dropdown-list">
                    <li>
                      <Link to="shop-page">Rau</Link>
                    </li>
                    <li>
                      <Link to="shop-page">Quả</Link>
                    </li>
                    <li>
                      <Link to="shop-page">Củ</Link>
                    </li>
                    <li>
                      <Link to="shop-page">Thức Uống</Link>
                    </li>
                    <li>
                      <Link to="shop-page">Thịt</Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar-item">
                  <NavLink className="nav-link" to="about-page">
                    Giới Thiệu
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink className="nav-link" to="blog-page">
                    Tin Tức
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink className="nav-link" to="contact-page">
                    Liên Hệ
                  </NavLink>
                </li>
              </ul>
              <div className="navbar-info-group">
                <div className="navbar-info">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                  <p>
                    <small>Số Điện Thoại</small>
                    <span>0336294777</span>
                  </p>
                </div>
                <div className="navbar-info">
                  <i className="fa-solid fa-at"></i>
                  <p>
                    <small>Email</small>
                    <span>support@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CartSideBar
        handleCheckout={handleCheckout}
        showCartSideBar={showCartSideBar}
        onCloseCartSideBar={handleCloseCartSideBar}
      />
      <HeartSideBar
        showHeartSideBar={showHeartSideBar}
        onCloseHeartSideBar={handleCloseHeartSideBar}
      />
      <NavSidebar
        showNavSideBar={showNavSideBar}
        onCloseNavSideBar={handleCloseNavSideBar}
      />
      <Overlay showOverlay={showOverlay} onCloseOverlay={handleCloseOverlay} />
    </>
  );
};

export default Header;
