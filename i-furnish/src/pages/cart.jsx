import React from "react";
import SingleItemCart from "../components/singleItemCart";

const Cart = () => {
  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div
                  className="card-header py-3"
                  style={{ backgroundColor: "#24d278", color: "white" }}
                >
                  <h5 className="mb-0">Cart - 1 items</h5>
                </div>
                <div className="card-body">
                  {/* Single item */}
                  <SingleItemCart></SingleItemCart>
                  {/* Single item */}
                  {/* <hr className="my-4" /> */}
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div
                  className="card-header py-3"
                  style={{ backgroundColor: "#24d278", color: "white" }}
                >
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span style={{ color: "green" }}>$53.98</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong style={{ color: "green" }}>$53.98</strong>
                      </span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                    style={{ backgroundColor: "#24d278", border: "0px" }}
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
