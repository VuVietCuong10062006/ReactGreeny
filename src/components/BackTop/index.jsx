import React, { useEffect, useState } from "react";
import "./BackTop.css";

const BackTop = () => {
    const [showbackTop, setShowBackTop] = useState(false);

    useEffect(() => {
        const handleScrool = () => {
            if (window.scrollY >= 200) {
                setShowBackTop(true);
            } else {
                setShowBackTop(false);
            }
        };

        window.addEventListener("scroll", handleScrool);

        return () => {
            window.removeEventListener("scroll", handleScrool);
        };
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {showbackTop && (
                <div onClick={scrollUp} className="back-top">
                    <i className="fa-solid fa-arrow-up"></i>
                </div>
            )}
        </>
    );
};

export default BackTop;
