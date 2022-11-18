import React from "react";
import Intro from "../HomePage/Intro";
import ShopBanner from "../ShopPage/ShopBanner";
import Contact from "./Contact";

const ContactPage = () => {
  return (
    <>
      <section className="shop-banner">
        <div className="container">
          <h2>Liên Hệ</h2>
          <ol className="content">
            <li className="content-item">Trang chủ</li>
            <li className="content-item active">Liên hệ</li>
          </ol>
        </div>
      </section>
      <Contact />
      <Intro />
    </>
  );
};

export default ContactPage;
