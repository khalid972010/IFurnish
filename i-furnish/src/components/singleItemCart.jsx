import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const SingleItemCart = () => {
  const quantityRef = useRef(1);

  const handleDecrement = () => {
    if (quantityRef.current.value > 0) {
      quantityRef.current.stepDown();
    }
  };

  const handleIncrement = () => {
    quantityRef.current.stepUp();
  };

  return (
    <div className="row">
      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
        {/* Image */}
        <div
          className="bg-image hover-overlay hover-zoom ripple rounded"
          data-mdb-ripple-color="light"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
            className="w-100"
            alt="Blue Jeans Jacket"
          />
          <a href="#!">
            <div
              className="mask"
              style={{
                backgroundColor: "rgba(251, 251, 251, 0.2)",
              }}
            />
          </a>
        </div>
        {/* Image */}
      </div>
      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
        {/* Data */}
        <p>
          <strong>Blue denim shirt</strong>
        </p>
        <p>Color: blue</p>
        <p>Size: M</p>
        <button
          type="button"
          className="btn btn-primary btn-sm me-3 mb-2 pe-3"
          data-mdb-tooltip-init
          title="Remove item"
          style={{
            marginRight: "10px",
            backgroundColor: "#24d278",
            border: "0px",
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm mb-2"
          data-mdb-tooltip-init
          title="Move to the wish list"
          style={{ border: "0px" }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
        {/* Data */}
      </div>
      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
        {/* Quantity */}
        <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
          <button
            className="btn btn-primary px-3 me-2"
            style={{
              height: "37px",
              marginRight: "3px",
              backgroundColor: "#24d278",
              border: "0px",
            }}
            onClick={handleDecrement}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <div className="form-outline">
            <input
              ref={quantityRef}
              id="quantity1"
              min={0}
              defaultValue={1}
              type="number"
              className="form-control"
              placeholder="Quantity"
            />
          </div>
          <button
            className="btn btn-primary px-3 ms-2"
            style={{
              height: "37px",
              marginLeft: "3px",
              backgroundColor: "#24d278",
              border: "0px",
            }}
            onClick={handleIncrement}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        {/* Quantity */}
        {/* Price */}
        <p className="text-start text-md-center">
          <strong style={{ color: "green" }}>$17.99</strong>
        </p>
        {/* Price */}
      </div>
    </div>
  );
};

export default SingleItemCart;
