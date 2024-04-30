import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShopCard from "../components/shopCard";
import SimpleBackdrop from "../components/spinner";
import Category from "../components/category";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPrds,
  getPrdsByCategories,
} from "../redux/store/slices/product-slice";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const [isShown, setShow] = useState(false);

  useEffect(() => {
    dispatch(getAllPrds());
  }, [dispatch]);

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
            <Category type="chair"></Category>
            <Category type="couch"></Category>
            <Category type="bed"></Category>
            <Category type="rug"></Category>
          </div>
          <div className="heading_container">
            <h2>Featured Brands</h2>
          </div>

          <div
            className="brand_container layout_padding1 "
            style={{ width: "75vw" }}
          >
            {isShown
              ? products.map((e) => <ShopCard key={e.id} {...e} />)
              : products
                  ?.slice(0, 4)
                  .map((e) => <ShopCard key={e.id} {...e} />)}
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
