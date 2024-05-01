import React from "react";
import { Link } from "react-router-dom";

const ShopCard = (props) => {
  const { isNew, id, name, price, image } = props;
  return (
    <div className="box" style={{ position: "relative" }}>
      <Link
        to={`/item/${id}`}
        style={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        {isNew && (
          <div
            className="new"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              backgroundColor: "red",
              color: "white",
            }}
          >
            <h5>New</h5>
          </div>
        )}

        <div className="img-box" style={{ flex: "1 1 auto" }}>
          <img
            src={image}
            alt="product"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
        <div className="detail-box mt-2" style={{ textAlign: "center" }}>
          <h6 className="price" style={{ marginBottom: "5px" }}>
            {price}$
          </h6>
          <h6 style={{ margin: "0" }}>{name}</h6>
        </div>
      </Link>
    </div>
  );
};

export default ShopCard;
