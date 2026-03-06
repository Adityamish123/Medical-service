import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Fulllogo.png"; // Change this path to your real logo image

const NavBar = () => {
  const location = useLocation();

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top py-2">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Pulsepoint Logo"
            style={{ height: "34px", marginRight: "8px" }}
          />
          Pulsepoint
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/find-blood" active={location.pathname === "/find-blood"}>
              Find Blood
            </Nav.Link>
            <Nav.Link as={Link} to="/donate" active={location.pathname === "/donate"}>
              Donate
            </Nav.Link>
            <NavDropdown title="Camps & Centers" id="camps-dropdown">
              <NavDropdown.Item as={Link} to="/camps">
                Donation Camps
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/centers">
                Blood Banks
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login" active={location.pathname === "/login"}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register" active={location.pathname === "/register"}>
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
