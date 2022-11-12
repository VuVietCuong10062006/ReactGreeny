import React, { useEffect, useState } from "react";
import "./CartSideBar.css";
import productApi from "../../../api/productApi";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProduct,
  updateProduct,
} from "../../../redux/productCartSlice";

import { Link } from "react-router-dom";
import formatMoney from "../../../utils/utils";

const CartSideBar = ({
  showCartSideBar,
  onCloseCartSideBar,
  handleCheckout,
}) => {
  const productCart = useSelector((state) => state.productCart.productCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const [inputValue, setInputvalue] = useState(1);

  const handleAddCountProductCart = (product) => {
    let productUpdate = { ...product, count: product.count + 1 };
    dispatch(updateProduct(productUpdate));
  };

  const handleSubtractCountProductCart = (product) => {
    if (product.count > 1) {
      let productUpdate = { ...product, count: product.count - 1 };
      dispatch(updateProduct(productUpdate));
    }
  };

  const handleDeleteProductCart = (id) => {
    dispatch(deleteProduct(id));
  };

  const totalMoneyProductCart = productCart.reduce((total, p) => {
    return total + p.price * p.count;
  }, 0);

  return (
    <div
      className={
        showCartSideBar === true
          ? "cart-sidebar cart-sidebar-active"
          : "cart-sidebar"
      }
    >
      <div className="cart-sidebar-header">
        <div className="cart-sidebar-total">
          <i className="fa-solid fa-basket-shopping"></i>
          <p>
            Số item <span>({productCart.length})</span>
          </p>
        </div>
        <button className="cart-sidebar-close">
          <i onClick={onCloseCartSideBar} className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <ul className="cart-sidebar-list">
        {productCart.map((product) => (
          <li key={product.id} className="cart-sidebar-item">
            <div className="cart-sidebar-image">
              <a href="./page/deital.html">
                <img src={product.image} alt="" />
              </a>
            </div>
            <div className="cart-sidebar-content">
              <div className="cart-sidebar-info">
                <h6>{product.name}</h6>
                <p>{formatMoney(product.price)}</p>
              </div>
              <div className="cart-sidebar-action-group">
                <div className="product-action">
                  <button
                    onClick={() => handleSubtractCountProductCart(product)}
                    className="action-minus"
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <input
                    className="action-input"
                    type="text"
                    name=""
                    id=""
                    value={product.count}
                    onChange={(e) => setInputvalue(e.target.value)}
                  />
                  <button
                    onClick={() => handleAddCountProductCart(product)}
                    className="action-plus"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
                <button
                  onClick={() => handleDeleteProductCart(product.id)}
                  className="action-delete"
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-sidebar-footer">
        <Link
          onClick={handleCheckout}
          className="cart-sidebar-checkout"
          to="checkout-page"
        >
          <span className="cart-sidebar-checkout-label">Mua Ngay</span>
          <span className="cart-sidebar-checkout-price">
            {formatMoney(totalMoneyProductCart)}
          </span>
        </Link>
        <Link className="cart-sidebar-cartpage" to="cart-page">
          <span className="cart-sidebar-checkout-label">Xem Giỏ Hàng</span>
        </Link>
      </div>
    </div>
  );
};

export default CartSideBar;
