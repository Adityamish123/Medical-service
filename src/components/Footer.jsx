import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaWhatsapp, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import footerLogo from "../assets/logo3.png"; // Make sure file name matches exactly
import "./Footer.css"; // Make sure file name matches exactly

const Footer = () => {
  return (
    <footer className="pulse-footer">
      <Container className="footer-inner d-flex flex-column flex-md-row align-items-center justify-content-between">
        
        {/* Brand Section */}
        <div className="footer-brand d-flex align-items-center mb-3 mb-md-0">
          <img 
            src={footerLogo} 
            alt="Pulsepoint Logo" 
            className="footer-logo me-3" 
            height="36" 
          />
          <span className="footer-title">
            PULSEPOINT <span className="footer-year">© 2025</span>
          </span>
        </div>

        {/* Social & Contact Section */}
        <div className="footer-social d-flex align-items-center">
          <Button 
            variant="outline-success" 
            className="footer-contact-btn me-2" 
            href="mailto:support@pulsepoint.com"
          >
            <FaEnvelope className="me-2" /> Contact
          </Button>

          <a 
            href="https://wa.me/916203435682" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-icon"
          >
            <FaWhatsapp />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-icon"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-icon"
          >
            <FaTwitter />
          </a>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
