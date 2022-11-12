import React from 'react'
import "./HeartSideBar.css"
import product1 from "../../../assets/image/product-1.jpg"

const HeartSideBar = ({showHeartSideBar, onCloseHeartSideBar}) => {
  return (
    <div className={showHeartSideBar === true ? "heart-sidebar heart-sidebar-active" : "heart-sidebar"}>
    <div className="heart-sidebar-header">
      <div className="heart-sidebar-total">
        <i className="fa-solid fa-basket-shopping"></i>
        <p>Số item <span>(5)</span></p>
      </div>
      <button className="heart-sidebar-close">
        <i onClick={onCloseHeartSideBar} className="fa-solid fa-xmark"></i>
      </button>
    </div>
    <ul className="heart-sidebar-list">
      <li className="heart-sidebar-item">
        <div className="heart-sidebar-image">
          <a href="./page/deital.html">
            <img src={product1} alt=""/>
          </a>
        </div>
        <div className="heart-sidebar-content">
          <div className="heart-sidebar-info">
            <h6>Ớt Ngọt</h6>
            <p>$28</p>
          </div>
          <div className="heart-sidebar-action-group">
            <button className="action-delete">
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  )
}

export default HeartSideBar