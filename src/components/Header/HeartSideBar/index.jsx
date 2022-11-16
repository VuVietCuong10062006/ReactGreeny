import React from "react";
import "./HeartSideBar.css";
import product1 from "../../../assets/image/product-1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteProductHeart,
  getProductHeart,
} from "../../../redux/productHeartSlice";
import formatMoney, { isEmpty } from "../../../utils/utils";

const HeartSideBar = ({ showHeartSideBar, onCloseHeartSideBar }) => {
  const dispatch = useDispatch();
  const productHeart = useSelector((state) => state.productHeart.productHeart);

  useEffect(() => {
    dispatch(getProductHeart());
  }, []);

  const handleDeleteProductCart = (id) => {
    dispatch(deleteProductHeart(id));
  };

  if (isEmpty(productHeart)) {
    return;
  }
  return (
    <div
      className={
        showHeartSideBar === true
          ? "heart-sidebar heart-sidebar-active"
          : "heart-sidebar"
      }
    >
      <div className="heart-sidebar-header">
        <div className="heart-sidebar-total">
          <i className="fa-solid fa-basket-shopping"></i>
          <p>
            Số item <span>({productHeart.length})</span>
          </p>
        </div>
        <button className="heart-sidebar-close">
          <i onClick={onCloseHeartSideBar} className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <ul className="heart-sidebar-list">
        {productHeart.map((product) => (
          <li key={product.id} className="heart-sidebar-item">
            <div className="heart-sidebar-image">
              <a href="./page/deital.html">
                <img src={product.image} alt="" />
              </a>
            </div>
            <div className="heart-sidebar-content">
              <div className="heart-sidebar-info">
                <h6>{product.name}</h6>
                <p>{formatMoney(product.price)}</p>
              </div>
              <div className="heart-sidebar-action-group">
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
    </div>
  );
};

export default HeartSideBar;
