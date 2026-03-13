import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaTint, FaHome } from "react-icons/fa";
import "./Header.css"; // Ensure exact case match

const Header = () => {
  const location = useLocation();

  return (
    <Navbar
      expand="lg"
      className="replit-navbar shadow-sm"
      bg="white"
      variant="light"
      sticky="top"
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="replit-brand-gradient fw-bold fs-3 d-flex align-items-center"
        >
          <FaTint className="me-2" style={{ fontSize: "1.7rem" }} />
          Pulsepoint
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="main-navbar-nav" />

        <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-2 gap-md-3">
            
            {/* Home Button */}
            <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
              <Button className="fw-bold replit-btn-main d-flex align-items-center">
                <FaHome className="me-1" /> Home
              </Button>
            </Nav.Link>

            {/* Nav Links */}
            <Nav.Link as={Link} to="/find-blood" active={location.pathname === "/find-blood"}>
              Find Blood
            </Nav.Link>
            <Nav.Link as={Link} to="/donate" active={location.pathname === "/donate"}>
              Donate
            </Nav.Link>
            <Nav.Link as={Link} to="/camps" active={location.pathname === "/camps"}>
              Camps
            </Nav.Link>
            <Nav.Link as={Link} to="/about" active={location.pathname === "/about"}>
              About
            </Nav.Link>

            {/* Right-side buttons */}
            <Nav.Link as={Link} to="/login">
              <Button className="me-2 replit-btn-main">Login</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              <Button className="fw-bold" variant="outline-dark">
                Sign Up
              </Button>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
