import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbars = () => {
  
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ color: "#24d278", fontSize: "22px", fontWeight: "bold" }}
        >
          IFurnish
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>{" "}
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>{" "}
            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>{" "}
            <Nav.Link as={Link} to="/furniture">
              Trending
            </Nav.Link>{" "}
            {/* Use Link instead of anchor tag */}
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>{" "}
          </Nav>
          <Nav>


            
          <Nav.Link as={Link} to="/signup">
              Signup
            </Nav.Link>{" "}




            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>{" "}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbars;
