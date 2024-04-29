import React from "react";
import "../styles/responsive.css";
import "../styles/style.css";
import globalStyle from "../styles/style.module.scss";
import "../styles/bootstrap.css";

const Slider = () => {
  return (
    
    
      <div style={{ height: "100vh", zIndex: -2 , backgroundImage: `url(${require("../images/hero-bg.jpg")})`, backgroundSize: "cover", position: "relative", backgroundRepeat: "no-repeat", overflow: "hidden" }}>
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

    
          <div>
            <div className="custom_menu-btn ">
              <button>
                <span className=" s-1">

                </span>
                <span className="s-2">

                </span>
                <span className="s-3">

                </span>
              </button>
            </div>
          </div>

        </nav>
      </div>
    </header>
    
    <section className="slider_section ">
      <div className="play_btn">
        <a href="">
          <img src="../images/play.png" alt=""/>
        </a>
      </div>
      {/* <div className="number_box">
        <div>
          <ol className="carousel-indicators indicator-2">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3">04</li>
          </ol>
        </div>
      </div> */}
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      The Latest<br/>
                      <span>
                        Furniture
                      </span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore
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
                <div className="col-md-6 img-container">
                  <div className="img-box">
                    <img src="../images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      The Latest<br/>
                      <span>
                        Furniture
                      </span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore
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
                <div className="col-md-6 img-container">
                  <div className="img-box">
                    <img src="../images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      The Latest
                      <span>
                        Furniture
                      </span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore
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
                <div className="col-md-6 img-container">
                  <div className="img-box">
                    <img src="../images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      The Latest<br/>
                      <span>
                        Furniture
                      </span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore
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
                <div className="col-md-6 img-container">
                  <div class="img-box">
                    <img src="../images/slider-img.png" alt=""/>
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

  )
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
  zIndex: -1 // Set the desired z-index value
};


export default Slider;
