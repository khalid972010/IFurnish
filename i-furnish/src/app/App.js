import "./App.css";
import About from "../pages/about";
import Contact from "../pages/contact";
import Footer from "../components/footer";
import Navbars from "../components/navbar";
import { Suspense } from "react";
import SimpleBackdrop from "../components/spinner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Shop from "../pages/shop";
import Furniture from "../pages/furniture";
import Item from "../components/item";
function App() {
  return (
    <Suspense fallback={<SimpleBackdrop />}>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/about" element={<About />} />{" "}
          <Route path="/item" element={<Item />} />{" "}
          <Route path="shop" element={<Shop />} />{" "}
          <Route path="furniture" element={<Furniture />} />{" "}
          <Route path="contact" element={<Contact />} />{" "}
          <Route path="profile" element={<Contact />} />{" "}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
