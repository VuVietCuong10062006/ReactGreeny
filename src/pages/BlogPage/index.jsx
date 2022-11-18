import React from "react";
import ShopBanner from "../ShopPage/ShopBanner";
import Blogs from "./Blogs";

const BlogPage = () => {
  return (
    <>
      <section className="shop-banner">
        <div className="container">
          <h2>Tin tức</h2>
          <ol className="content">
            <li className="content-item">Trang chủ</li>
            <li className="content-item active">Tin tức</li>
          </ol>
        </div>
      </section>
      <Blogs />
    </>
  );
};

export default BlogPage;
