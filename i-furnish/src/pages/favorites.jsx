import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/store/slices/cart-slice";
import styles from "../styles/favorites.module.css";
import { removeItemFromFav } from "../redux/store/slices/wish-list-slice";

const Favorites = () => {
  const favItems = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  const handleOnClick = (item) => {
    dispatch(addItemToCart(item));
  };

  const handleOnDelete = (item) => {
    dispatch(removeItemFromFav(item));
  };

  return (
    <div
      className={`${styles["cart-wrap"]} container`}
      style={{ marginBottom: "500px" }}
    >
      <div className={styles.container}>
        <div className={styles.row}>
          <div className="col-md-12">
            <div className={styles["table-wishlist"]}>
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <thead>
                  <tr>
                    <th width="45%">Product Name</th>
                    <th width="15%">Unit Price</th>
                    <th width="15%">Stock Status</th>
                    <th width="15%"></th>
                    <th width="15%"></th>
                  </tr>
                </thead>

                <tbody>
                  {!favItems || favItems?.length === 0 ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: "center" }}>
                        No favorites
                      </td>
                    </tr>
                  ) : (
                    favItems?.map((f) => (
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
                            <div className={styles["name-product"]}>
                              {f.name}
                            </div>
                          </div>
                        </td>
                        <td width="15%" className={styles.price}>
                          {f.price}
                        </td>
                        <td width="15%">
                          <span
                            className={styles["in-stock-box"]}
                            style={{ backgroundColor: "green" }}
                          >
                            In Stock
                          </span>
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
                        <td width="15%">
                          <button
                            className={
                              styles["round-red-btn"] +
                              " " +
                              styles["small-btn"]
                            }
                            onClick={() => handleOnDelete(f)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
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
