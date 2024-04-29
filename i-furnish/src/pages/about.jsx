import React from "react";
import "../styles/responsive.css";
import "../styles/style.css";
import "../styles/style.scss";
import "../styles/bootstrap.css";

const About = () => {
  return (
    <>
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p style={{ width: 420 }}>
                  Welcome to IFurnish! We're dedicated to providing high-quality
                  furniture to enhance your living space. Browse our wide
                  selection of products and find the perfect pieces to
                  complement your home.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.png" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
