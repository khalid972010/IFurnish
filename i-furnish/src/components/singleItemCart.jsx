import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  decreaseQuantity,
  removeItemFromCart,
} from "../redux/store/slices/cart-slice";
import { addItemToFavorites } from "../redux/store/slices/wish-list-slice";
import Item from "./item";

const SingleItemCart = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(props);
  const cartItem = cart.cartItem;
  console.log(cartItem);

  let { name, category, image, price, id, quantity } = props;
  const quantityRef = useRef(1);

  const handleDecrement = () => {
    if (quantityRef.current.value > 0) {
      quantityRef.current.stepDown();
      dispatch(decreaseQuantity(id));
    }
  };

  const handleIncrement = () => {
    quantityRef.current.stepUp();
    dispatch(addQuantity(id));
  };

  const handleDelete = () => {
    dispatch(removeItemFromCart(id));
  };
  const handelAddToFavorites = async () => {
    dispatch(addItemToFavorites(props));
  };

  return (
    <div className="row">
      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
        {/* Image */}
        <div
          className="bg-image hover-overlay hover-zoom ripple rounded"
          data-mdb-ripple-color="light">
          <img src={image} className="w-100" alt="MATCHSPEL" />
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
          <strong>{name}</strong>
        </p>
        <p>{category}</p>
        <button
          onClick={handleDelete}
          type="button"
          className="btn btn-primary btn-sm m-0 pe-3"
          data-mdb-tooltip-init
          title="Remove item"
          style={{
            backgroundColor: "#24d278",
            border: "0px",
          }}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm ms-0"
          data-mdb-tooltip-init
          title="Move to the wish list"
          style={{ border: "0px" }}
          onClick={handelAddToFavorites}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        {/* Data */}
      </div>
      <div className="col-lg-4 col-md-6 m-0">
        {/* Quantity */}
        <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
          <button
            className="btn btn-primary px-3 m-0"
            style={{
              height: "37px",
              backgroundColor: "#24d278",
              border: "0px",
            }}
            onClick={handleDecrement}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <div className="form-outline ">
            <input
              ref={quantityRef}
              id="quantity1"
              min={1}
              defaultValue={1}
              type="number"
              className="form-control mx-3 w-75"
              placeholder="Quantity"
            />
          </div>
          <button
            className="btn btn-primary px-3 m-0"
            style={{
              height: "37px",
              backgroundColor: "#24d278",
              border: "0px",
            }}
            onClick={handleIncrement}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        {/* Quantity */}
        {/* Price */}
        <p className="text-start text-md-center">
          <strong style={{ color: "green" }}>
            {(price * quantity).toFixed(2)}$
          </strong>
        </p>
        {/* Price */}
      </div>
    </div>
  );
};

export default SingleItemCart;
