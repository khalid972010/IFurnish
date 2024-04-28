import "./App.css";
import About from "../pages/about";
import Contact from "../pages/contact";

import Navbars from "../components/navbar";
import { Suspense } from "react";
import SimpleBackdrop from "../components/spinner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
function App() {
  return (
    <Suspense fallback={<SimpleBackdrop />}>
      <BrowserRouter>
        <Navbars /> {/* Render the Navbars component */}
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/about" element={<About />} />{" "}
          <Route path="shop" element={<Contact />} />{" "}
          <Route path="furniture" element={<Contact />} />{" "}
          <Route path="contact" element={<Contact />} />{" "}
          <Route path="profile" element={<Contact />} />{" "}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
