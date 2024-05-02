import React from "react";
import Slider from "../components/slider";
import Item from "../components/item";
import Category from "../components/category";
import About from "./about";
import Furniture from "./furniture";
import Contact from "./contact";
import Shop from "./shop";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <hr style={{ marginLeft: 180, marginRight: 180 }} />
      <Shop></Shop>
      <hr style={{ marginLeft: 180, marginRight: 180 }} />
      <Contact></Contact>
    </div>
  );
};

export default Home;
