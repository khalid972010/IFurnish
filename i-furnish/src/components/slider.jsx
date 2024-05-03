import React from "react";
import "../styles/responsive.css";
import "../styles/style.css";
import globalStyle from "../styles/style.module.scss";
import "../styles/bootstrap.css";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div
      style={{
        height: "95vh",
        zIndex: -2,
        backgroundImage: `url(${require("../images/hero-bg.jpg")})`,
        backgroundSize: "cover",
        position: "relative",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <header className="header_section" style={{ height: 75 }}>
        <div className="container-fluid"></div>
      </header>

      <section className="slider_section ">
        <div className="play_btn">
          <a href="">
            <img src="../images/play.png" alt="" />
          </a>
        </div>

        <div className="container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div
              className="carousel-inner"
              style={{
                marginTop: "-150px",
              }}
            >
              <div className="carousel-item active" style={{ height: 380 }}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                        The Comfiest
                        <br />
                        <span>Sofas</span>
                      </h1>
                      <p>
                        Living Room: Sink into luxury with our stylish sofas,
                        elegant coffee tables, and cozy armchairs. Our living
                        room collection is designed to make your space inviting
                        and comfortable, perfect for relaxing with family and
                        friends.
                      </p>
                      <div className="btn-box">
                        <Link className="btn-1" to="/login">
                          Read More
                        </Link>
                        <Link className="btn-2" to="/contact">
                          Contact us
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 img-container">
                    <div className="img-box">
                      <img
                        src="https://www.pngarts.com/files/7/Furniture-PNG-Image-Transparent-Background.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item " style={{ height: 380 }}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1 style={{ color: "#1ed778" }}>The Best Quality</h1>
                      <p>
                        Quality: We source our furniture from reputable
                        manufacturers known for their craftsmanship and
                        attention to detail. You can trust that every piece in
                        our collection is built to last.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          Read More
                        </a>
                        <a href="" className="btn-2">
                          Contact us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 img-container"
                    style={{ marginTop: "55px" }}
                  >
                    <div className="img-box">
                      <img
                        src="https://www.pngplay.com/wp-content/uploads/2/Modern-Chair-PNG-HD-Quality.png"
                        alt=""
                        height="370px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item " style={{ height: 380 }}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                        The Newest
                        <br />
                        <span>Beds</span>
                      </h1>
                      <p>
                        Affordability: We believe that high-quality furniture
                        should be accessible to everyone. That's why we offer
                        competitive prices and regular promotions to help you
                        furnish your space without breaking the bank.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          Read More
                        </a>
                        <a href="" className="btn-2">
                          Contact us
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-6 img-container"> */}
                  <div
                    className="col-md-6 img-container"
                    style={{ marginTop: "55px", width: "500px" }}
                  >
                    <div class="img-box">
                      <img
                        src="https://i.pinimg.com/originals/93/18/b1/9318b13f6adfb30b08bb1f599100765d.png"
                        alt=""
                        height="300px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={afterStyle}></div>
    </div>
  );
};

const afterStyle = {
  content: "",
  position: "absolute",
  bottom: 0,
  right: 0,
  width: "45%",
  height: "100%",
  backgroundImage: "url(" + require("../images/hero-side-bg.png") + ")",
  backgroundSize: "cover",
  zIndex: -1,
};

export default Slider;
