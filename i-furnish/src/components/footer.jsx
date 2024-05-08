import React from "react";
import "../styles/responsive.css";
import "../styles/style.css";
import globalStyle from "../styles/style.module.scss";
import "../styles/bootstrap.css";

const Footer = () => {
  return (
    <div>
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="info_logo">
            <h2>IFurnish</h2>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="info_contact">
                <h5>About Shop</h5>
                <div>
                  <div className="img-box">
                    <img src="images/location-white.png" className="w-100" alt=""/>
                  </div>
                  <p>Address</p>
                </div>
                <div className="row align-align-items-center">
                  <div className="img-box">
                    <img src="images/telephone-white.png" alt="" />
                  </div>
                  <p>+01 1234567890</p>
                </div>
                <div>
                  <div className="img-box">
                    <img src="images/envelope-white.png" alt="" />
                  </div>
                  <p>ifurnish@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_info">
                <h5>Informations</h5>
                <p>
                  Welcome to IFurnish! We're dedicated to providing high-quality
                  furniture to enhance your living space. Browse our wide
                  selection of products and find the perfect pieces to
                  complement your home.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_insta">
                <h5>Instagram</h5>
                <div className="insta_container">
                  <div>
                    <a href>
                      <div className="insta-box b-1">
                        <img src="images/i-1.jpg" alt="" />
                      </div>
                    </a>
                    <a href>
                      <div className="insta-box b-2">
                        <img src="images/i-2.jpg" alt="" />
                      </div>
                    </a>
                  </div>
                  <div>
                    <a href>
                      <div className="insta-box b-3">
                        <img src="images/i-3.jpg" alt="" />
                      </div>
                    </a>
                    <a href>
                      <div className="insta-box b-4">
                        <img src="images/i-4.jpg" alt="" />
                      </div>
                    </a>
                  </div>
                  <div>
                    <a href>
                      <div className="insta-box b-3">
                        <img src="images/i-5.jpg" alt="" />
                      </div>
                    </a>
                    <a href>
                      <div className="insta-box b-4">
                        <img src="images/i-6.jpg" alt="" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_form ">
                <h5>Newsletter</h5>
                <form action>
                  <input type="email" placeholder="Enter your email" />
                  <button >Subscribe</button>
                </form>
                <div className="social_box">
                  <a href>
                    <img src="images/fb.png" className="w-100" alt=""/>
                  </a>
                  <a href>
                    <img src="images/twitter.png" className="w-100" alt=""/>
                  </a>
                  <a href>
                    <img src="images/linkedin.png"  className="w-100" alt=""/>
                  </a>
                  <a href>
                    <img src="images/youtube.png" className="w-100" alt=""/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
