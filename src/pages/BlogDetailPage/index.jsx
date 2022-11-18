import React from "react";
import Intro from "../HomePage/Intro";
import ShopBanner from "../ShopPage/ShopBanner";
import Blog from "./Blog";

const BlogDetailPage = () => {
  return (
    <>
      <section className="shop-banner">
        <div className="container">
          <h2>Chi tiết bài viết</h2>
          <ol className="content">
            <li className="content-item">Trang chủ</li>
            <li className="content-item active">Chi tiết bài viết</li>
          </ol>
        </div>
      </section>
      <Blog />
      <Intro />
    </>
  );
};

export default BlogDetailPage;
