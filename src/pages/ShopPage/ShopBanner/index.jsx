import React from 'react'
import "./ShopBanner.css"

const ShopBanner = () => {
  return (
    <section className="shop-banner">
        <div className="container">
            <h2>CỬA HÀNG</h2>
            <ol className="content">
                <li className="content-item">Trang chủ</li>
                <li className="content-item active">Shop</li>
            </ol>
        </div>
    </section>
  )
}

export default ShopBanner