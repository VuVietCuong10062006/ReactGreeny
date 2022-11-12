import { Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import BlogPage from "./pages/BlogPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import ProductDetailPage from "./pages/ProductDetailPage";
import Register from "./pages/Register";
import ShopPage from "./pages/ShopPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="login" element={<Login/>} />
                <Route path="register" element={<Register/>}/>

                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<HomePage/>} />
                    <Route path="shop-page" element={<ShopPage/>} />
                    <Route path="about-page" element={<AboutPage/>}/>
                    <Route path="blog-page" element={<BlogPage/>}/>
                    <Route path="contact-page" element={<ContactPage/>} />
                    <Route path="blog-detail-page" element={<BlogDetailPage/>}/>
                    <Route path="checkout-page" element={<CheckoutPage/>}/>
                    <Route path="cart-page" element={<CartPage/>}/>
                    <Route path=":productId" element={<ProductDetailPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
