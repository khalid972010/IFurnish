import React from "react";
import ShopCard from "../components/shopCard";
import { Link } from "react-router-dom";

const Favorites = () => {
  return (
    <>
      <section className="brand_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Favorites</h2>
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
          <Link to="sasa" className="brand-btn">
            See More
          </Link>
        </div>
      </section>
    </>
  );
};

export default Favorites;
