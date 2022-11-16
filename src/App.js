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
import HomeAdmin from "./pages/Admin/HomeAdmin/HomeAdmin.jsx";
import ListUsers from "./pages/Admin/ListUsers/ListUsers";
import ListProducts from "./pages/Admin/ListProducts/ListProducts";
import NewProduct from "./pages/Admin/NewProduct/NewProduct";
import NewUsers from "./pages/Admin/NewUser/NewUser";
import DetailUser from "./pages/Admin/DetailUser/DetailUser";
import DetailProduct from "./pages/Admin/DetailProduct/DetailProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="admin">
          <Route index element={<HomeAdmin />} />
          <Route path="users">
            <Route path="" element={<ListUsers />} />
            <Route path="new" element={<NewUsers />} />
            <Route path=":userId" element={<DetailUser />} />
          </Route>
          <Route path="products">
            <Route path="" element={<ListProducts />} />
            <Route path="new" element={<NewProduct />} />
            <Route path=":productId" element={<DetailProduct />} />
          </Route>
        </Route>

        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<HomePage />} />
          <Route path="shop-page" element={<ShopPage />} />
          <Route path="about-page" element={<AboutPage />} />
          <Route path="blog-page" element={<BlogPage />} />
          <Route path="contact-page" element={<ContactPage />} />
          <Route path="blog-detail-page" element={<BlogDetailPage />} />
          <Route path="checkout-page" element={<CheckoutPage />} />
          <Route path="cart-page" element={<CartPage />} />
          <Route path=":productId" element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
