import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaTint, FaHome } from "react-icons/fa";
import "./header.css";

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
        <Navbar.Brand as={Link} to="/" className="replit-brand-gradient fw-bold fs-3 d-flex align-items-center">
          <FaTint className="me-2" style={{ fontSize: "1.7rem" }} />
          Pulsepoint
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-2 gap-md-3">
            {/* NEW Home Button */}
            <Nav.Link as={Link} to="/" active={location.pathname === "/"} className="d-flex align-items-center">
              <Button
                size="sm"
                variant="outline-primary"
                className="fw-bold replit-btn-main"
                style={{ background: "linear-gradient(92deg,#35e3fc 31%, #fa4c7c 90%)", color: "white", border: 0 }}
              >
                <FaHome className="me-1" /> Home
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/find-blood" active={location.pathname === "/find-blood"}>Find Blood</Nav.Link>
            <Nav.Link as={Link} to="/donate" active={location.pathname === "/donate"}>Donate</Nav.Link>
            <Nav.Link as={Link} to="/camps" active={location.pathname === "/camps"}>Camps</Nav.Link>
            <Nav.Link as={Link} to="/about" active={location.pathname === "/about"}>About</Nav.Link>
            {/* Highlighted actions on right */}
            <Nav.Link as={Link} to="/login">
              <Button size="sm" className="me-2 replit-btn-main">Login</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              <Button size="sm" variant="outline-dark" className="fw-bold">Sign Up</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
