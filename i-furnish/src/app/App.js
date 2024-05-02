import "./App.css";
import About from "../pages/about";
import Contact from "../pages/contact";
import Footer from "../components/footer";
import Navbars from "../components/navbar";
import { Suspense, useState } from "react";
import SimpleBackdrop from "../components/spinner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import SignupPage from "../pages/Signup_Page";
import Shop from "../pages/shop";
import Furniture from "../pages/furniture";
import Item from "../components/item";
import LoginPage from "../pages/Login_Page";
import Cart from "../pages/cart";
import Profile from "../pages/profile";
import { Provider } from "react-redux";
import store from "../redux/store/store";

import Favorites from "../pages/favorites";
import Dashboard from "../pages/Dashboard";
function App() {
  const [hideFooter, setHideFooter] = useState(false);

  const onHideFooter = (value) => {
    setHideFooter(value);
  };

  return (
    <Suspense fallback={<SimpleBackdrop />}>
      <Provider store={store}>
        <BrowserRouter>
          <Navbars onHideFooter={onHideFooter} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/furniture" element={<Furniture />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<Item />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          {!hideFooter && <Footer></Footer>}
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App;
