import React from "react";
import "./Overlay.css";

const Overlay = ({ showOverlay, onCloseOverlay }) => {
    return (
        <div
            style={
                showOverlay === true
                    ? { display: "block" }
                    : { display: "none" }
            }
            id="overlay"

            onClick={onCloseOverlay}
        ></div>
    );
};

export default Overlay;
