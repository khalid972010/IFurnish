import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import classes from "../styles/itemStyle.module.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/store/slices/cart-slice";
import { addItemToFavorites } from "../redux/store/slices/wish-list-slice";

const Item = () => {
  const [item, setItem] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/products/${params.id}`
        );
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };
    fetchItem();
  }, [params.id]);

  const handleOnClick = async () => {
    dispatch(addItemToCart(item));
  };

  const handleOnFav = async () => {
    dispatch(addItemToFavorites(item));
    setIsFavorite(!isFavorite); // Toggle the favorite state
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={classes.container}
      style={{
        minHeight: "390px",
        width: "85vw",
        marginTop: "80px",
        marginBottom: "80px",
      }}>
      <div className={classes.images}>
        <img src={item.image} alt="Product" width="50%" />
      </div>
      <div className={classes["slideshow-buttons"]}>
        <div className={classes.one} />
        <div className={classes.two} />
        <div className={classes.three} />
        <div className={classes.four} />
      </div>
      <div className={classes.product}>
        <p>Women's Running Shoe</p>
        <h1 style={{ fontSize: 40 }}>{item.name}</h1>
        <h2 style={{ color: "green" }}>{item.price}</h2>
        <p className={`${classes.desc} `} style={{ color: "grey" }}>
          {item.description}
        </p>
        <div className={classes.buttons} style={{ marginTop: "15%" }}>
          {item && (
            <button
              onClick={handleOnClick}
              className={`${classes.add} ${classes.btnItem}`}
              style={{
                marginRight: "10px",
                width: "80%",
                backgroundColor: "#24d278",
              }}>
              Add to Cart
            </button>
          )}
          <button
            onClick={handleOnFav}
            className={`${classes.like} ${classes.btnItem}`}
            style={{
              width: "15%",
              backgroundColor: "#24d278",
            }}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: isFavorite ? "red" : "white", height: "19px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
