import React, { useEffect, useState } from "react";
import "./SellProduct.css";

import { useDispatch, useSelector } from "react-redux";
import { addProductCart } from "../../../redux/productCartSlice";
import { Link } from "react-router-dom";
import formatMoney from "../../../utils/utils";
import productApi from "../../../api/productApi";
import { toast } from "react-toastify";
import { addProductHeart, getProductHeart } from "../../../redux/productHeartSlice";

const SellProduct = () => {
  const [productSell, setProductSell] = useState([]);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const productCart = useSelector((state) => state.productCart.productCart);
  const productHeart = useSelector((state) => state.productHeart.productHeart);

  // useEffect(() => {
  //   dispatch(getProductHeart());
  // }, []);

  useEffect(() => {
    productApi.getProductSell().then((data) => {
      setProductSell(data);
    });
  }, []);

  useEffect(() => {
    productApi.getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  
  const handleAddProductHeart = (id) => {
    const productItem = products.find((p) => p.id === id);
    // Kiểm tra sản phẩm đã có trong giở hàng hay chưa?
    const isExist = productHeart.some((p) => p.id === id);
    if (isExist) {
      toast.warning("Sản phẩm đã được yêu thích", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    // Thêm sản phẩm vào giỏ
    const newProductHeartItem = {
      id: productItem.id,
      name: productItem.name,
      price: productItem.price,
      image: productItem.images[0],
    };
    dispatch(addProductHeart(newProductHeartItem));
    toast.success("thêm vào danh mục yêu thích thành công", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleAddProductCart = (id) => {
    const productItem = products.find((p) => p.id === id);
    // Kiểm tra sản phẩm đã có trong giở hàng hay chưa?
    const isExist = productCart.some((p) => p.id === id);
    if (isExist) {
      toast.warning("Sản phẩm đã có trong giỏ hàng", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    // Thêm sản phẩm vào giỏ
    const newProductCarItem = {
      id: productItem.id,
      name: productItem.name,
      price: productItem.price,
      image: productItem.images[0],
      count: 1,
    };
    dispatch(addProductCart(newProductCarItem));

    toast.success("thêm vào giỏ hàng thành công", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <>
      <section className="sell">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sell-tittle">
                <h2>Sản Phẩm Bán Chạy</h2>
              </div>
            </div>
          </div>

          <div className="product-list-sell row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {productSell.map((product) => (
              <div key={product.id} className="col">
                <div className="product-card">
                  <div className="product-image">
                    <div className="product-label">
                      <label>{product.tag}</label>
                    </div>
                    <div onClick={() => handleAddProductHeart(product.id)} className="product-wish">
                      <i className="fa-solid fa-heart"></i>
                    </div>
                    <Link to={`${product.id}`}>
                      <img src={product.images[0]} alt="" />
                    </Link>
                    <div className="product-widget">
                      <Link href="/" className="product-video">
                        <i className="fa-solid fa-play"></i>
                      </Link>
                      <Link to={`/${product.id}`} className="product-view">
                        <i className="fa-solid fa-eye"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i
                        className={
                          product.rating >= 1
                            ? "active fa-solid fa-star"
                            : "fa-solid fa-star"
                        }
                      ></i>
                      <i
                        className={
                          product.rating >= 2
                            ? "active fa-solid fa-star"
                            : "fa-solid fa-star"
                        }
                      ></i>
                      <i
                        className={
                          product.rating >= 3
                            ? "active fa-solid fa-star"
                            : "fa-solid fa-star"
                        }
                      ></i>
                      <i
                        className={
                          product.rating >= 4
                            ? "active fa-solid fa-star"
                            : "fa-solid fa-star"
                        }
                      ></i>
                      <i
                        className={
                          product.rating >= 5
                            ? "active fa-solid fa-star"
                            : "fa-solid fa-star"
                        }
                      ></i>
                      {/* <a href="">(3)</a> */}
                    </div>
                    <h6 className="product-name">{product.name}</h6>
                    <h6 className="product-price">
                      {formatMoney(product.price)}
                    </h6>
                    <button
                      onClick={() => handleAddProductCart(product.id)}
                      className="product-add"
                    >
                      <i className="fa-solid fa-basket-shopping"></i>
                      <span>ADD</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="sell-btn">
                <Link to="shop-page" className="btn btn-outline">
                  <i className="fa-solid fa-eye"></i>
                  <span>XEM THÊM</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellProduct;
