import React, { useContext, useEffect, useState } from "react";
import ShopBanner from "../ShopPage/ShopBanner";
import "./CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { addCountProductCart, deleteProduct, deleteProductCart, getProduct, subtractCountProductCart, updateProduct } from "../../redux/productCartSlice";
import formatMoney from "../../utils/utils";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const productCart = useSelector((state) => state.productCart.productCart);

  // useEffect(() => {
  //   dispatch(getProduct());
  // }, []);

  const handleAddCountProductCart = (id) => {
    dispatch(addCountProductCart(id));
  };

  const handleSubtractCountProductCart = (id) => {
    
      dispatch(subtractCountProductCart(id));
    
  };

  const handleDeleteProductCart = (id) => {
    dispatch(deleteProductCart(id))
  }

  // const { productCartItem, dispatchProducCart } = useContext(Context);
  const [inputValue, setInputvalue] = useState(2);

  const totalMoneyProductCart = productCart.reduce((total, p) => {
    return total + p.price * p.count;
  }, 0);

  return (
    <>
      <ShopBanner />
      <div className="cart">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className="cart-detail">
                <h2 className="cart-detail-title">Giỏ hàng của bạn</h2>
                <p>
                  Bạn đang có <strong>{productCart.length}</strong> sản phẩm
                  trong giỏ hàng
                </p>
                <ul className="cart-list">
                  {productCart.map((product) => (
                    <li key={product.id} className="cart-item">
                      <div className="cart-image">
                        <a href="./deital.html?id=1">
                          <img src={product.image} alt="" />
                        </a>
                      </div>
                      <div className="cart-info">
                        <h6>{product.name}</h6>
                        <div className="cart-price">
                          <p className="item-price">
                            {formatMoney(product.price)}
                          </p>
                          <p className="item-price-total">
                            {formatMoney(product.price * product.count)}
                          </p>
                        </div>
                        <div className="cart-action-group">
                          <div className="cart-action">
                            <button
                              onClick={() =>
                                handleSubtractCountProductCart(product.id)
                              }
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
                              onClick={() => handleAddCountProductCart(product.id)}
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
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="cart-order">
                <h2>Thông tin đơn hàng</h2>
                <div className="cart-order-bill">
                  <p>Tổng tiền :</p>
                  <p className="bill-total">
                    {formatMoney(totalMoneyProductCart)}
                  </p>
                </div>
                <Link to="/checkout-page">
                  <button className="order-pay-button">Thanh Toán</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
