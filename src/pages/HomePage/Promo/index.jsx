import React from "react";
import "./Promo.css";
import promo from "../../../assets/image/promo.jpg"

const Promo = () => {
    return (
        <section className="promo">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="promo-img">
                            <img src={promo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promo;
