import React from "react";
import Slider from "../components/slider";
import Item from "../components/item";
import Category from "../components/category";
import About from "./about";
import Furniture from "./furniture"
import Contact from "./contact"
import Shop from "./shop"


const Home = () => {
  return <div>
    
   <Slider></Slider>
   <About></About>
   <Shop></Shop>
   <Contact></Contact>
   {/* <footer></footer> */}
   {/* <Item></Item> */}
  </div>;
};

export default Home;