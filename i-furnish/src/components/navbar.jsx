import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import AccountMenu from "./accountMenu";
import { useSelector } from "react-redux";

const Navbars = ({ onHideFooter, onSearch }) => {
  const firstChar = useSelector((state) => state.profile.firstChar);
  const cart = useSelector((state) => state.cart.cartItems);
  const cartLength = cart?.reduce((sum, product) => sum + product.quantity, 0) || 0;

  const handleNavbarClick = (path) => {
    if (path === "/signup" || path === "/login") {
      onHideFooter(true);
    } else {
      onHideFooter(false);
    }
  };

  const [searchQuery, setSearchQuery] = useState(""); 
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); 
    console.log("Search query:", query); 
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/" style={{ color: "#24d278", fontSize: "22px", fontWeight: "bold" }}>
        iFurnish
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" onClick={() => handleNavbarClick("/")}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" onClick={() => handleNavbarClick("/about")}>
            About
          </Nav.Link>
          {firstChar && (
            <Nav.Link as={Link} to="/favorites" onClick={() => handleNavbarClick("/favorites")}>
              Favorites
            </Nav.Link>
          )}
          <Nav.Link as={Link} to="/shop" onClick={() => handleNavbarClick("/shop")}>
            Shop
          </Nav.Link>
          <Nav.Link as={Link} to="/furniture" onClick={() => handleNavbarClick("/furniture")}>
            Trending
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" onClick={() => handleNavbarClick("/contact")}>
            Contact
          </Nav.Link>
        </Nav>

        {firstChar && (
          <Form inline>
            <FormControl
  type="text"
  placeholder="Search..."
  value={searchQuery}
  onChange={handleSearchChange}
  style={{
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", 
    borderRadius: "5px", 
    border: "1px solid #ced4da",
    transition: "border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out", 
    marginRight:"30px",
    marginTop:"3px",
    

  }}
  onFocus={(e) => { e.target.style.borderColor = "#24d278"; }} 
  onBlur={(e) => { e.target.style.borderColor = "#ced4da"; }} 
/>

          </Form>
        )}

        <Nav>
          {!firstChar && (
            <>
              <Nav.Link as={Link} to="/signup" onClick={() => handleNavbarClick("/signup")}>
                Signup
              </Nav.Link>
              <Nav.Link as={Link} to="/login" onClick={() => handleNavbarClick("/login")}>
                Login
              </Nav.Link>
            </>
          )}
          {firstChar && (
            <>
              <Nav.Link as={Link} to="/cart" onClick={() => handleNavbarClick("/cart")}>
                <span
                  style={{
                    backgroundColor: "#24d278",
                    color: "white",
                    borderRadius: "50%",
                    minWidth: "20px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    textAlign: "center",
                    display: "inline-block",
                  }}
                >
                  {cartLength}
                </span>
                <FontAwesomeIcon icon={faCartShopping} style={{ height: "25px" }} />
              </Nav.Link>
              <AccountMenu />
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;
