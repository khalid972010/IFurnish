import React, { useEffect, useState } from "react";
import SingleItemCart from "../components/singleItemCart";
import { useSelector } from "react-redux";
import axios from "axios";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart) {
      const price = cart.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      );
      setTotalPrice(price);
    }
  }, [cart]);

  const handleCheckOut = () => {
   // console.log(typeof totalPrice, totalPrice);

    
    axios
      .post("https://accept.paymob.com/api/auth/tokens", {
        api_key:
          "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T1Rjd09UUTVMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkudzh4WjByODVaTll6WnJueE1nc1pKZnU5OEVFRWdFcGNoa3Y5QjNUZWF4VVlTdFp2ZnhyMDFBeE1MSGh0QWpaOTZpbVJJUTlYNUl4WmZjV09mZVgzV1E=",
      })
      .then((res) => {
       // console.log(res.data.token);
        const authToken = res.data.token;
        const amountCents = Math.round(totalPrice * 100);

        axios
          .post("https://accept.paymob.com/api/ecommerce/orders", {
            auth_token: authToken,
            delivery_needed: "false",
            amount_cents: amountCents,
            currency: "EGP",
            items: [],
          })
          .then((res) => {
           // console.log(res.data);
            const orderId = res.data.id;
            axios
              .post("https://accept.paymob.com/api/acceptance/payment_keys",{
                "auth_token": authToken,
                "amount_cents": amountCents,
                "expiration": 3600,
                "order_id": orderId,
                "billing_data": {
                  "apartment": "803",
                  "email": "claudette09@exa.com",
                  "floor": "42",
                  "first_name": "Clifford",
                  "street": "Ethan Land",
                  "building": "8028",
                  "phone_number": "+86(8)9135210487",
                  "shipping_method": "PKG",
                  "postal_code": "01898",
                  "city": "Jaskolskiburgh",
                  "country": "CR",
                  "last_name": "Nicolas",
                  "state": "Utah"
                },
                "currency": "EGP",
                "integration_id": 4556039
  
              })
              .then((res) => {
                console.log(res.data); 
                window.location.assign(`https://accept.paymob.com/api/acceptance/iframes/837986?payment_token=${res.data.token}

                `);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                  <h5 className="mb-0">Cart - {cart?.length} items</h5>
                </div>
                <div className="card-body">
                  {/* Single item */}
                  {cart &&
                    cart.map((item) => (
                      <div key={item.id}>
                        <SingleItemCart {...item} />
                        <hr className="my-4" />
                      </div>
                    ))}
                  {/* Single item */}
                  {/* <hr className="my-4" /> */}
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0">06.05.2024 - 08.05.2024</p>
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
                      <span style={{ color: "green" }}>{totalPrice}$</span>
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
                        <strong style={{ color: "green" }}>
                          {totalPrice}$
                        </strong>
                      </span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                    style={{ backgroundColor: "#24d278", border: "0px" }}
                    disabled={!cart?.length}
                    onClick={handleCheckOut}
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
