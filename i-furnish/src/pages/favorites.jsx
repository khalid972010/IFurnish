import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { addItemToCart } from "../redux/store/slices/cart-slice";
import styles from "../styles/favorites.module.css";

const Favorites = () => {
  const favItems = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  const handleOnClick = (item) => {
    dispatch(addItemToCart(item));
  };

  if (!favItems) return <Spinner />;

  return (
    <div className={styles["cart-wrap"]}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className="col-md-12">
            <div className={styles["main-heading"] + " " + styles.mb10}>
              My wishlist
            </div>
            <div className={styles["table-wishlist"]}>
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <thead>
                  <tr>
                    <th width="45%">Product Name</th>
                    <th width="15%">Unit Price</th>
                    <th width="15%">Stock Status</th>
                    <th width="15%"></th>
                    <th width="10%"></th>
                  </tr>
                </thead>
                <tbody>
                  {favItems.map((f) => (
                    <tr key={f.id}>
                      <td width="45%">
                        <div
                          className={
                            styles["display-flex"] +
                            " " +
                            styles["align-center"]
                          }
                        >
                          <div className={styles["img-product"]}>
                            <img
                              src={f.image}
                              alt=""
                              className="mCS_img_loaded"
                            />
                          </div>
                          <div className={styles["name-product"]}>{f.name}</div>
                        </div>
                      </td>
                      <td width="15%" className={styles.price}>
                        {f.price}
                      </td>
                      <td width="15%">
                        <span className={styles["in-stock-box"]}>In Stock</span>
                      </td>
                      <td width="15%">
                        <button
                          className={
                            styles["round-black-btn"] +
                            " " +
                            styles["small-btn"]
                          }
                          onClick={() => handleOnClick(f)}
                        >
                          Add to Cart
                        </button>
                      </td>
                      <td width="10%" className={styles["text-center"]}>
                        <a href="#" className={styles["trash-icon"]}>
                          <i className="far fa-trash-alt"></i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
