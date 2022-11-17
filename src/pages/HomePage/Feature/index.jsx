import { useEffect } from "react";
import "./Feature.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  addCountProductCart,
  addProductCart,
} from "../../../redux/productCartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import productApi from "../../../api/productApi";
import formatMoney from "../../../utils/utils";
import { toast } from "react-toastify";
import { addProductHeart } from "../../../redux/productHeartSlice";

const Feature = () => {
  const [productFeatures, setProductFeature] = useState([]);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const productCart = useSelector((state) => state.productCart.productCart);
  const productHeart = useSelector((state) => state.productHeart.productHeart);

  useEffect(() => {
    productApi.getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  // useEffect(() => {
  //   dispatch(getProductHeart());
  // }, []);

  // useEffect(() => {
  //   dispatch(getProduct());
  // }, []);

  useEffect(() => {
    productApi.getProductFeature().then((data) => {
      setProductFeature(data);
    });
  }, []);

  console.log(productCart);
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

  const handleClickVideo = () => {};

  return (
    <>
      <section className="feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="feature-title">
                <h2>Sản Phẩm Nổi Bật</h2>
              </div>
            </div>
          </div>

          <div className="product-list-feature row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
            {productFeatures.map((product) => (
              <div key={product.id} className="col">
                <div className="feature-card">
                  <div className="feature-image">
                    <div className="feature-label">
                      <label>{product.tag}</label>
                    </div>
                    <div
                      onClick={() => handleAddProductHeart(product.id)}
                      className="feature-wish"
                    >
                      <i className="fa-solid fa-heart"></i>
                    </div>
                    <Link to={`/${product.id}`}>
                      <img src={product.images[0]} alt="" />
                    </Link>
                    <div className="feature-widget">
                      <div
                        onClick={() => handleClickVideo(product.id)}
                        className="feature-video"
                      >
                        <i className="fa-solid fa-play"></i>
                      </div>
                      <Link to={`/${product.id}`} className="feature-view">
                        <i className="fa-solid fa-eye"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="feature-content">
                    <h6 className="feature-name">{product.name}</h6>
                    <div className="feature-rating">
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
                    <h6 className="feature-price">
                      {formatMoney(product.price)}
                    </h6>
                    <p className="feature-desc">{product.description}</p>
                    <button
                      onClick={() => handleAddProductCart(product.id)}
                      className="feature-add"
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

export default Feature;
