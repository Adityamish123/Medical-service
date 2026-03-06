import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaWhatsapp, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import footerLogo from "../assets/logo3.png";
import "./footer.css";

const Footer = () => (
  <footer className="pulse-footer">
    <Container className="footer-inner d-flex flex-column flex-md-row align-items-center justify-content-between">
      <div className="footer-brand d-flex align-items-center">
        <img src={footerLogo} alt="Pulsepoint" className="footer-logo me-3" height="36" />
        <span className="footer-title">PULSEPOINT <span className="footer-year">© 2025</span></span>
      </div>
      <div className="footer-social d-flex align-items-center mt-3 mt-md-0">
        <Button variant="outline-success" className="footer-contact-btn me-2" href="mailto:support@pulsepoint.com">
          <FaEnvelope className="me-2" /> Contact
        </Button>
        <a href="https://wa.me/916203435682" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaWhatsapp />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaTwitter />
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;
