import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbars = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          IFurnish
        </Navbar.Brand>{" "}
        {/* Use Link instead of anchor tag */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>{" "}
            {/* Use Link instead of anchor tag */}
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>{" "}
            {/* Use Link instead of anchor tag */}
            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>{" "}
            {/* Use Link instead of anchor tag */}
            <Nav.Link as={Link} to="/furniture">
              Trending
            </Nav.Link>{" "}
            {/* Use Link instead of anchor tag */}
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>{" "}
            {/* Use Link instead of anchor tag */}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>{" "}
            {/* Use Link instead of anchor tag */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbars;
