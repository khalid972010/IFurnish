import React, { useEffect, useState } from "react";
import "../styles/category.css";
import { Link } from "react-router-dom";
import ShopCard from "../components/shopCard";
import Category from "../components/category";
import { useDispatch, useSelector } from "react-redux";
import { getAllPrds } from "../redux/store/slices/product-slice";
import styles from "../styles/filter.module.css";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  console.log(products);
  const [isShown, setIsShown] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState("all");
  useEffect(() => {
    dispatch(getAllPrds());
  }, [dispatch]);

  function handleShowMore() {
    setIsShown(!isShown);
  }

  function handleOnClick(type) {
    setSelectedCategories((prevCategories) => {
      const newCategories = new Set(prevCategories);
      if (newCategories.has(type)) {
        newCategories.delete(type);
      } else {
        newCategories.add(type);
      }
      return newCategories;
    });
  }
  const handleFilter = () => {
    let filtered = products.filter((product) => {
      if (priceFilter === "all") {
        return true;
      } else if (priceFilter === "1") {
        return product.price >= 50 && product.price <= 100;
      } else if (priceFilter === "2") {
        return product.price >= 101 && product.price <= 150;
      } else if (priceFilter === "3") {
        return product.price >= 151 && product.price <= 200;
      }
    });
    setFilteredProducts(filtered);
  };
  useEffect(() => {
    handleFilter();
  }, [priceFilter, products]);

  return (
    <>
      <section className="brand_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2 style={{ marginTop: -20 }}>Categories</h2>
          </div>
          <div style={{ marginLeft: -14, marginBottom: 20, marginTop: 10 }}>
            <Category type="chair" onClick={() => handleOnClick("chair")} />
            <Category type="couch" onClick={() => handleOnClick("couch")} />
            <Category type="bed" onClick={() => handleOnClick("bed")} />
            <Category type="rug" onClick={() => handleOnClick("rug")} />
          </div>
          <select
            className={`${styles.formSelect} ${styles.formSelectLg} ${styles.mb3}`}
            aria-label="Large select example"
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all" selected>
              Filter by price
            </option>
            <option value="1">50$ - 100$</option>
            <option value="2">100$ - 150$</option>
            <option value="3">150++</option>
          </select>

          <div
            className="brand_container layout_padding1 "
            style={{ width: "75vw" }}
          >
            {isShown
              ? products
                  ?.filter((product) =>
                    selectedCategories.size === 0
                      ? true
                      : selectedCategories.has(product.category)
                  )
                  .filter((product) => {
                    if (priceFilter === "1") {
                      return product.price >= 25 && product.price <= 100;
                    } else if (priceFilter === "2") {
                      return product.price > 100 && product.price <= 150;
                    } else if (priceFilter === "3") {
                      return product.price > 150 && product.price <= 20000;
                    } else {
                      return true; // Return all products if no price filter is applied
                    }
                  })
                  .map((e) => <ShopCard key={e.id} {...e} />)
              : filteredProducts
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
