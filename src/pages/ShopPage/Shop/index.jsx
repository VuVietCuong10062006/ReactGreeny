import React, { useEffect, useMemo, useState } from "react";
import "./Shop.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, addProduct } from "../../../redux/productCartSlice";
import productApi from "../../../api/productApi";
import formatMoney from "../../../utils/utils";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import Pagination from "../../../components/Panigation/Panigation";
import { isEmpty } from "../../../utils/utils";

const Shop = () => {
  const [ratings, setRatings] = useState([]);
  const [tags, setTags] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const productCart = useSelector((state) => state.productCart.productCart);

  const [checkedTag, setCheckedTag] = useState();
  const [checkedCategory, setCheckedCategory] = useState();
  const [checkedRating, setCheckedRating] = useState();
  const [typeSort, setTypeSort] = useState("");
  const [productRenderShop, setProductRenderShop] = useState([]);
  const [currentTableData, setCurrentTableDatap] = useState([]);

  let PageSize = 12;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    productApi.getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const [filter, setFilter] = useState({
    tag: "",
    category: "",
    rating: "",
  });

  useEffect(() => {
    productApi.getRatings().then((data) => setRatings(data));
  }, []);

  useEffect(() => {
    productApi.getTags().then((data) => setTags(data));
  }, []);

  useEffect(() => {
    productApi.getCategorys().then((data) => setCategorys(data));
  }, []);

  const handleChangeSort = (e) => {
    productApi
      .sortProductShop({
        sort: e.target.value,
        tag: filter.tag,
        category: filter.category,
        rating: filter.rating,
      })
      .then((data) => {
        setProductRenderShop(data);
      });
    setTypeSort(e.target.value);
  };

  useEffect(() => {
    productApi
      .sortProductShop({
        sort: typeSort,
        tag: filter.tag,
        category: filter.category,
        rating: filter.rating,
      })
      .then((data) => {
        setProductRenderShop(data);
      });
  }, [filter, typeSort]);

  useEffect(() => {
    if (!productRenderShop.length) {
      return;
    }
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const pro = productRenderShop.slice(firstPageIndex, lastPageIndex);
    setCurrentTableDatap(pro);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [productRenderShop, currentPage]);

  console.log(currentTableData);

  const handleChangetag = (e) => {
    let tagChange = e.target.value;
    setCheckedTag(tagChange);
    setFilter({ ...filter, tag: tagChange });
  };

  const handleChangetagCategory = (e) => {
    let categoryChange = e.target.value;
    setCheckedCategory(categoryChange);
    setFilter({ ...filter, category: categoryChange });
  };

  const handleChangeRating = (e) => {
    let ratingChange = e.target.value;
    setCheckedRating(ratingChange);
    setFilter({ ...filter, rating: ratingChange });
  };

  const handleAddProductCart = (id) => {
    const productItem = products.find((p) => p.id === id);
    // Kiểm tra sản phẩm đã có trong giở hàng hay chưa?
    const isExist = productCart.some((p) => p.id === id);
    if (isExist) {
      toast.error("Sản phẩm đã có trong giỏ hàng", {
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
    dispatch(addProduct(newProductCarItem));

    toast.success("thêm vào giỏ hàng thành công", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  // if(!currentTableData.length){
  //   return
  // }

  return (
    <>
      <ToastContainer />
      <section className="shop">
        <div className="container">
          <div className="row flex-wrap-reverse">
            <div className="col-lg-3 col-md-5">
              <div className="shop-widget-promo">
                <Link to="/shop-page">
                  <img src="../public/image/banner/shop-promo.jpg" alt="" />
                </Link>
              </div>

              <div className="shop-widget">
                <h6 className="shop-widget-title">Lọc Theo Giá</h6>
                <div className="shop-widget-group">
                  <input
                    className="search-price-min"
                    type="text"
                    placeholder="Min"
                  />
                  <input
                    className="search-price-max"
                    type="text"
                    placeholder="Max"
                  />
                </div>
                <button className="shop-widget-btn btn-search-price">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <span>Tìm Kiếm</span>
                </button>
              </div>

              <div className="shop-widget">
                <h6 className="shop-widget-title">Lọc Theo Xếp Hang</h6>
                <form>
                  <ul className="shop-widget-list shop-widget-list-rating">
                    {ratings.map((rating, index) => (
                      <li key={index}>
                        <div className="shop-widget-content">
                          <input
                            className="checkbox-rating"
                            type="radio"
                            id="star5"
                            value={rating.value}
                            checked={rating.value === checkedRating}
                            onChange={handleChangeRating}
                          />
                          <label htmlFor="star5">
                            <i
                              className={
                                rating.value >= 1
                                  ? "active fa-solid fa-star"
                                  : "fa-solid fa-star"
                              }
                            ></i>
                            <i
                              className={
                                rating.value >= 2
                                  ? "active fa-solid fa-star"
                                  : "fa-solid fa-star"
                              }
                            ></i>
                            <i
                              className={
                                rating.value >= 3
                                  ? "active fa-solid fa-star"
                                  : "fa-solid fa-star"
                              }
                            ></i>
                            <i
                              className={
                                rating.value >= 4
                                  ? "active fa-solid fa-star"
                                  : "fa-solid fa-star"
                              }
                            ></i>
                            <i
                              className={
                                rating.value >= 5
                                  ? "active fa-solid fa-star"
                                  : "fa-solid fa-star"
                              }
                            ></i>
                          </label>
                        </div>
                        <span className="shop-widget-number">(13)</span>
                      </li>
                    ))}
                  </ul>
                  {/* <button className="shop-widget-btn">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <span>Xoá</span>
                            </button>  */}
                </form>
              </div>

              <div className="shop-widget">
                <h6 className="shop-widget-title">Lọc Theo Trạng Thái</h6>
                <form>
                  <ul className="shop-widget-list shop-widget-list-tag">
                    {tags.map((tag, index) => (
                      <li key={index}>
                        <div className="shop-widget-content">
                          <input
                            className="checkbox-tag"
                            type="radio"
                            id="tag1"
                            value={tag.value}
                            checked={tag.value === checkedTag}
                            onChange={(e) => handleChangetag(e)}
                          />
                          <label htmlFor="tag1">{tag.name}</label>
                        </div>
                        <span className="shop-widget-number">(13)</span>
                      </li>
                    ))}
                  </ul>
                  {/* <button className="shop-widget-btn">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <span>Xoá</span>
                            </button>  */}
                </form>
              </div>

              <div className="shop-widget">
                <h6 className="shop-widget-title">Lọc Theo Danh Mục</h6>
                <form>
                  <ul className="shop-widget-list shop-widget-list-category">
                    {categorys.map((category, index) => (
                      <li key={index}>
                        <div className="shop-widget-content">
                          <input
                            className="checkbox-category"
                            type="radio"
                            id="cate1"
                            value={category.value}
                            checked={category.value === checkedCategory}
                            onChange={(e) => handleChangetagCategory(e)}
                          />
                          <label htmlFor="cate1">{category.name}</label>
                        </div>
                        <span className="shop-widget-number">(13)</span>
                      </li>
                    ))}
                  </ul>
                  {/* <button className="shop-widget-btn">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <span>Xoá</span>
                            </button>  */}
                </form>
              </div>
            </div>

            <div className="col-lg-9 col-md 7">
              <div className="row">
                <div className="col-lg-12">
                  <div className="shop-filter">
                    <label htmlFor="option">Sắp xếp theo :</label>
                    <select
                      className="select-option"
                      name=""
                      id="option"
                      onChange={handleChangeSort}
                    >
                      <option value="">Măc định</option>
                      <option value="asc">Giá thấp đến cao</option>
                      <option value="desc">Giá cao đến thấp</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="shop-product-list row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                {currentTableData.map((product) => (
                  <div key={product.id} className="col">
                    <div className="product-card">
                      <div className="product-image">
                        <div className="product-label">
                          <label>{product.tag}</label>
                        </div>
                        <div className="product-wish">
                          <i className="fa-solid fa-heart"></i>
                        </div>
                        <Link to={`/${product.id}`}>
                          <img src={product.images[0]} alt="" />
                        </Link>
                        <div className="product-widget">
                          <a href="" className="product-video">
                            <i className="fa-solid fa-play"></i>
                          </a>
                          <a href="" className="product-view">
                            <i className="fa-solid fa-eye"></i>
                          </a>
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

              <div className="shop-panigation row">
                <div className="col-lg-12">
                  {/* <div className="shop-paginate">
                    <ul className="pagination">
                      <li className="pagination-item btn-prev">
                        <i className="fa-solid fa-arrow-left-long"></i>
                      </li>
                      <ul className="pagination-page-list">
                        <li className="pagination-item pagination-page">1</li>
                      </ul>
                      <li className="pagination-item btn-next">
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </li>
                    </ul>
                  </div> */}
                  <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={productRenderShop.length}
                    pageSize={PageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                  ></Pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
