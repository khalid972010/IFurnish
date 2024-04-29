import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <section className="brand_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Featured Brands</h2>
        </div>
        <div
          className="brand_container layout_padding2 "
          style={{ width: "75vw" }}>
          <div className="box">
            <a href>
              <div className="new">
                <h5>New</h5>
              </div>
              <div className="img-box">
                <img src="images/slider-img.png" alt />
              </div>
              <div className="detail-box">
                <h6 className="price">$100</h6>
                <h6>Chair</h6>
              </div>
            </a>
          </div>
          <div className="box">
            <a href>
              <div className="img-box">
                <img src="images/slider-img.png" alt />
              </div>
              <div className="detail-box">
                <h6 className="price">$100</h6>
                <h6>Chair</h6>
              </div>
            </a>
          </div>
          <div className="box">
            <a href>
              <div className="img-box">
                <img src="images/slider-img.png" alt />
              </div>
              <div className="detail-box">
                <h6 className="price">$100</h6>
                <h6>Chair</h6>
              </div>
            </a>
          </div>
          <div className="box">
            <a href>
              <div className="img-box">
                <img src="images/slider-img.png" alt />
              </div>
              <div className="detail-box">
                <h6 className="price">$100</h6>
                <h6>Chair</h6>
              </div>
            </a>
          </div>
        </div>
        <Link to="sasa" className="brand-btn">
          See More
        </Link>
      </div>
    </section>
  );
};

export default Shop;
