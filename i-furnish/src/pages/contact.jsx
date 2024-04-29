import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <section className="contact_section layout_padding">
          <div className="container ">
            <div className="heading_container">
              <h2 className>Contact Us</h2>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <form action>
                  <div>
                    <input type="text" placeholder="Name" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone" />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="message-box"
                      placeholder="Message"
                    />
                  </div>
                  <div className="d-flex ">
                    <button>SEND</button>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <div className="map_container">
                  <div className="map-responsive">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.805241487501!2d31.01849597506234!3d30.07111661730744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585b979b7d1dd9%3A0x88f29d027c44f959!2sInformation%20Technology%20Institute!5e0!3m2!1sen!2seg!4v1714381317470!5m2!1sen!2seg"
                      width={600}
                      height={300}
                      frameBorder={0}
                      style={{ border: 0, width: "100%", height: "100%" }}
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
