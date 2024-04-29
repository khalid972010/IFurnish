import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import classes from "../styles/itemStyle.module.scss"; // Importing styles from SCSS module

const Item = () => {
  return (
    <div
      className={classes.container}
      style={{
        height: "auto",
        width: "85vw",
        marginTop: "80px",
        marginBottom: "80px",
      }}
    >
      <div className={classes.images}>
        <img
          src="https://pixlr.com/images/pixlr-e-photo-editor.jpg"
          alt="Product"
        />
      </div>
      <div className={classes["slideshow-buttons"]}>
        <div className={classes.one} />
        <div className={classes.two} />
        <div className={classes.three} />
        <div className={classes.four} />
      </div>
      <div className={classes.product}>
        <p>Women's Running Shoe</p>
        <h1 style={{ fontSize: 40 }}>Nike Epic React Flyknit</h1>
        <h2 style={{ color: "green" }}>$150</h2>
        <p className={`${classes.desc} `} style={{ color: "grey" }}>
          The Nike Epic React Flyknit foam cushioning is responsive yet
          light-weight, durable yet soft. This creates a sensation that not only
          enhances the feeling of moving forward, but makes running feel fun,
          too.
        </p>
        <div className={classes.buttons} style={{ marginTop: "15%" }}>
          <button
            className={`${classes.add} ${classes.btnItem}`}
            style={{
              marginRight: "10px",
              width: "80%",
              backgroundColor: "#24d278",
            }}
          >
            Add to Cart
          </button>
          <button
            className={`${classes.like} ${classes.btnItem}`}
            style={{
              width: "15%",
              backgroundColor: "#24d278",
            }}
          >
            <FontAwesomeIcon icon={faHeart} style={{ height: "19px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
