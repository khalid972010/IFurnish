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
import Cart from "../pages/cart";

function App() {
  const [hideFooter, setHideFooter] = useState(false);

  const onHideFooter = (value) => {
    console.log(value);
    setHideFooter(value);
  };

  return (
    <Suspense fallback={<SimpleBackdrop />}>
      <BrowserRouter>
        <Navbars onHideFooter={onHideFooter} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {!hideFooter && <Footer />}
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
