import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbars from "../components/navbar";
import { Suspense } from "react";
import SimpleBackdrop from "../components/spinner";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import SignupPage from "./pages/Signup_Page";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    // <Suspense fallback={<SimpleBackdrop />}>
    //   <BrowserRouter>
    //     <Navbars /> {/* Render the Navbars component */}
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/shop" element={<Contact />} />
    //       <Route path="/furniture" element={<Contact />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/profile" element={<Contact />} />


    //       <Route path="/signup" element={<SignupPage />} />



    //       <Route path="/login" element={<Login />} />
    //     </Routes>
    //   </BrowserRouter>
    // </Suspense>
    // <SignupPage></SignupPage>
    <Signup></Signup>
  );
}

export default App;
