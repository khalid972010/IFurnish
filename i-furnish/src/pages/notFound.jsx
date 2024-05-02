import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{
        height: "80vh",
      }}
    >
      <div className="row">
        <div className="col-md-6" id="imgHalf">
          <img
            src="https://i.ibb.co/WVpQFJ4/75519-copy.png"
            width="60%"
            alt="404"
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center ">
          <h1>404</h1>
          <h2>UH OH! You're lost.</h2>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>
          <Link className="btn green text-start px-0" to="/">
            GO TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
