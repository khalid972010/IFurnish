import React from "react";
import classes from "../styles/itemStyle.module.scss"; // Importing styles from SCSS module

const Item = () => {
  return (
    <div className={classes.container}>
      <div className={classes.images}>
        <img src="https://pixlr.com/images/pixlr-e-photo-editor.jpg" />
      </div>
      <div className={classes["slideshow-buttons"]}>
        <div className={classes.one} />
        <div className={classes.two} />
        <div className={classes.three} />
        <div className={classes.four} />
      </div>
      <p className={classes.pick}>choose size</p>
      <div className={classes.sizes}>
        <div className={classes.size}>5</div>
        <div className={classes.size}>6</div>
        <div className={classes.size}>7</div>
        <div className={classes.size}>8</div>
        <div className={classes.size}>9</div>
        <div className={classes.size}>10</div>
        <div className={classes.size}>11</div>
        <div className={classes.size}>12</div>
      </div>
      <div className={classes.product}>
        <p>Women's Running Shoe</p>
        <h1>Nike Epic React Flyknit</h1>
        <h2>$150</h2>
        <p className={classes.desc}>
          The Nike Epic React Flyknit foam cushioning is responsive yet
          light-weight, durable yet soft. This creates a sensation that not only
          enhances the feeling of moving forward, but makes running feel fun,
          too.
        </p>
        <div className={classes.buttons}>
          <button className={classes.add}>Add to Cart</button>
          <button className={classes.like}>
            <span>♥</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
