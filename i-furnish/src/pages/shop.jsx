import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShopCard from "../components/shopCard";
import Category from "../components/category";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPrds,
  toggleCategory,
} from "../redux/store/slices/product-slice";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [isShown, setIsShown] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    dispatch(getAllPrds());
  }, [dispatch]);

  function handleShowMore() {
    setIsShown(!isShown);
  }

  function handleOnClick(type) {
    setSelectedCategories((oldState) => {
      const index = oldState.indexOf(type);
      if (index === -1) {
        return [...oldState, type];
      } else {
        return oldState.filter((cat) => cat === type);
      }
    });
    console.log(selectedCategories);
  }

  return (
    <>
      <section className="brand_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Categories</h2>
          </div>
          <div className="categories ">
            <Category type="chair" onClick={() => handleOnClick("chair")} />
            <Category type="couch" onClick={() => handleOnClick("couch")} />
            <Category type="bed" onClick={() => handleOnClick("bed")} />
            <Category type="rug" onClick={() => handleOnClick("rug")} />
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
                  ?.filter((product) =>
                    selectedCategories.length === 0
                      ? true
                      : selectedCategories.includes(product.category)
                  )
                  .slice(0, 4)
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
