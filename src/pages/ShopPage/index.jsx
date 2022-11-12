import React from "react";
import Shop from "./Shop";
import ShopBanner from "./ShopBanner";
import Intro from "../HomePage/Intro";

const ShopPage = () => {
    return (
        <>
            <ShopBanner />
            <Shop/>
            <Intro/>
        </>
    );
};

export default ShopPage;
