import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import AccountMenu from "./accountMenu";
import { useSelector } from "react-redux";

const Navbars = ({ onHideFooter }) => {
  const firstChar = useSelector((state) => state.profile.firstChar);

  const cart = useSelector((state) => state.cart.cartItems);
  const cartLength =
    cart?.reduce((sum, product) => sum + product.quantity, 0) || 0;
  const handleNavbarClick = (path) => {
    if (path === "/signup" || path === "/login") {
      onHideFooter(true);
    } else {
      onHideFooter(false);
    }
  };

  console.log(firstChar);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ color: "#24d278", fontSize: "22px", fontWeight: "bold" }}
        >
          IFurnish
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" onClick={() => handleNavbarClick("/")}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => handleNavbarClick("/about")}
            >
              About
            </Nav.Link>
            {firstChar && (
              <Nav.Link
                as={Link}
                to="/favorites"
                onClick={() => handleNavbarClick("/favorites")}
              >
                Favorites
              </Nav.Link>
            )}

            <Nav.Link
              as={Link}
              to="/shop"
              onClick={() => handleNavbarClick("/shop")}
            >
              Shop
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/furniture"
              onClick={() => handleNavbarClick("/furniture")}
            >
              Trending
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => handleNavbarClick("/contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            {!firstChar && (
              <Nav.Link
                as={Link}
                to="/signup"
                onClick={() => handleNavbarClick("/signup")}
              >
                Signup
              </Nav.Link>
            )}
            {!firstChar && (
              <Nav.Link
                as={Link}
                to="/login"
                onClick={() => handleNavbarClick("/login")}
              >
                Login
              </Nav.Link>
            )}
            {firstChar && (
              <Nav.Link
                as={Link}
                to="/cart"
                onClick={() => handleNavbarClick("/cart")}
              >
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                {cartLength}
              </Nav.Link>
            )}
            {firstChar && <AccountMenu></AccountMenu>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbars;
