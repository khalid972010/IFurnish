import React from "react";

const Furniture = () => {
  return (
    <div>
      <section
        className="trending_section layout_padding"
        style={{ backgroundColor: "white" }}
      >
        <div id="accordion">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>Trending Categories</h2>
                  </div>
                  <div className="tab_container">
                    <div
                      className="t-link-box"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <div className="number">
                        <h5>01</h5>
                      </div>
                      <hr />
                      <div className="t-name">
                        <h5>Chairs</h5>
                      </div>
                    </div>
                    <div
                      className="t-link-box collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <div className="number">
                        <h5>02</h5>
                      </div>
                      <hr />
                      <div className="t-name">
                        <h5>Couches</h5>
                      </div>
                    </div>
                    <div
                      className="t-link-box collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <div className="number">
                        <h5>03</h5>
                      </div>
                      <hr />
                      <div className="t-name">
                        <h5>Beds</h5>
                      </div>
                    </div>
                    <div
                      className="t-link-box collapsed"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <div className="number">
                        <h5>04</h5>
                      </div>
                      <hr />
                      <div className="t-name">
                        <h5>Rugs</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="collapse show"
                  id="collapseOne"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="img_container ">
                    <div className="box b-1">
                      <div className="img-box">
                        <img
                          src="images/t-1.jpg"
                          height="200px"
                          width="200px"
                          alt=""
                        />
                      </div>
                      <div className="img-box">
                        <img
                          src="images/t-2.jpg"
                          height="200px"
                          width="200px"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="box b-2">
                      <div className="img-box">
                        <img
                          src="images/t-3.jpg"
                          height="200px"
                          width="200px"
                          alt=""
                        />
                      </div>
                      <div className="img-box">
                        <img
                          src="images/t-4.jpg"
                          height="200px"
                          width="200px"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="collapse"
                  id="collapseTwo"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="img_container ">
                    <div className="box b-1">
                      <div className="img-box">
                        <img
                          src="images/c-1.jpeg"
                          height="200px"
                          width="200px"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                      <div className="img-box">
                        <img
                          src="images/c-2.jpg"
                          height="200px"
                          width="200px"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="box b-2">
                      <div className="img-box">
                        <img
                          src="images/c-3.jpeg"
                          height="200px"
                          width="200px"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                      <div className="img-box">
                        <img
                          src="images/c-4.jpg"
                          height="200px"
                          width="200px"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="collapse"
                  id="collapseThree"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="img_container ">
                    <div className="box b-1">
                      <div className="img-box">
                        <img
                          src="images/b-1.jpg"
                          height="200px"
                          width="200px"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                      <div className="img-box">
                        <img
                          src="images/b-3.webp"
                          height="200px"
                          width="200px"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="box b-2">
                      <div className="img-box">
                        <img
                          src="images/b-4.jpg"
                          height="200px"
                          width="200px"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                      <div className="img-box">
                        <img
                          src="images/b-5.jpg"
                          height="200px"
                          width="200px"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="collapse"
                  id="collapseFour"
                  aria-labelledby="headingfour"
                  data-parent="#accordion"
                >
                  <div className="img_container ">
                    <div className="box b-1">
                      <div className="img-box">
                        <img
                          src="images/r-1.jpg"
                          height="200px"
                          width="200px"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                      <div className="img-box">
                        <img
                          src="images/r-4.jpeg"
                          height="200px"
                          width="200px"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="box b-2">
                      <div className="img-box">
                        <img
                          src="images/r-3.jpg"
                          height="200px"
                          width="200px"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                      <div className="img-box">
                        <img
                          src="images/r-2.jpg"
                          height="200px"
                          width="200px"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Furniture;
