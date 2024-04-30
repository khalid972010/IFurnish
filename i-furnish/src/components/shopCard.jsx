import React from "react";
import { Link } from "react-router-dom";

const ShopCard = (props) => {
  const { isNew, name, price } = props;
  return (
    <div className="box">
      <Link to="/item" style={{ textDecoration: "none" }}>
        {isNew && (
          <div className="new">
            <h5>New</h5>
          </div>
        )}

        <div className="img-box">
          <img src="images/slider-img.png" alt />
        </div>
        <div className="detail-box mt-2">
          <h6 className="price">{price}$</h6>
          <h6>{name}</h6>
        </div>
      </Link>
    </div>
  );
};

export default ShopCard;
