import React from "react";

const ShopCard = (props) => {
  const { isNew } = props;
  return (
    <div className="box">
      <a href>
        {isNew && (
          <div className="new">
            <h5>New</h5>
          </div>
        )}

        <div className="img-box">
          <img src="images/slider-img.png" alt />
        </div>
        <div className="detail-box">
          <h6 className="price">$100</h6>
          <h6>Chair</h6>
        </div>
      </a>
    </div>
  );
};

export default ShopCard;
