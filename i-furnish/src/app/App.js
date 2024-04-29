import "./App.css";
import About from "../pages/about";
import Contact from "../pages/contact";
import Footer from "../components/footer";
import Navbars from "../components/navbar";
import { Suspense } from "react";
import SimpleBackdrop from "../components/spinner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import SignupPage from "../pages/Signup_Page";
function App() {
  return (
    <Suspense fallback={<SimpleBackdrop />}>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/about" element={<About />} />{" "}
          <Route path="shop" element={<Contact />} />{" "}
          <Route path="furniture" element={<Contact />} />{" "}
          <Route path="contact" element={<Contact />} />{" "}
          <Route path="profile" element={<Contact />} />{" "}
          <Route path="/footer" element={<Footer />} />{" "}
          <Route path="/signup" element={<SignupPage />} />{" "}

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
