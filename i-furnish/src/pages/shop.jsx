import React from "react";
import { Link } from "react-router-dom";
import ShopCard from "../components/shopCard";

const Shop = () => {
  return (
    <section className="brand_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Featured Brands</h2>
        </div>
        <div
          className="brand_container layout_padding2 "
          style={{ width: "75vw" }}
        >
          <ShopCard isNew={true}></ShopCard>
          <ShopCard></ShopCard>
          <ShopCard></ShopCard>
          <ShopCard></ShopCard>
        </div>
        <Link to="#" className="brand-btn">
          See More
        </Link>
      </div>
    </section>
  );
};

export default Shop;
