import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShopCard from "../components/shopCard";
import SimpleBackdrop from "../components/spinner";
import Category from "../components/category";

const Shop = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [isShown, setShow] = useState(false);
  function handleShowMore() {
    setShow(!isShown);
  }
  return (
    <>
      <section className="brand_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Categories</h2>
          </div>
          <div className="categories ">
            <Category type="Chair"></Category>
            <Category type="Couch"></Category>
            <Category type="Bed"></Category>
            <Category type="Rug"></Category>
          </div>
          <div className="heading_container">
            <h2>Featured Brands</h2>
          </div>

          <div
            className="brand_container layout_padding1 "
            style={{ width: "75vw" }}>
            {isShown
              ? products.map((e) => <ShopCard key={e} />)
              : products.slice(0, 4).map((e) => <ShopCard key={e} />)}
          </div>
          <Link to="#" className="brand-btn" onClick={handleShowMore}>
            {!isShown ? "See More" : "See Less"}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Shop;
