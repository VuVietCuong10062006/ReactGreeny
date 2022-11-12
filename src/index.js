import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
// import Provider from "./context/Provider";
import { Provider } from "react-redux"
import store from "./redux/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
