import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { FaHandHoldingDroplet } from "react-icons/fa6";
import "./donate.css";

const Donate = () => {
  const [submitted, setSubmitted] = useState(false);
  const [donor, setDonor] = useState({
    name: "",
    email: "",
    contact: "",
    bloodGroup: "",
    city: "",
    message: ""
  });

  const handleChange = e => {
    setDonor(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: send donor data to backend API here
  };

  return (
    <div className="donate-bg">
      {/* Video Background */}
      <video className="donate-video-bg" autoPlay loop muted playsInline>
        <source 
          src="https://res.cloudinary.com/dwgvjoj5y/video/upload/v1773420962/hero2_dmzpp1.mp4" 
          type="video/mp4" 
        />
      </video>
      {/* Dark Overlay for better readability */}
      <div className="donate-overlay"></div>

      <Container className="py-5 donate-content">
        <Row className="justify-content-center">
          <Col md={8} lg={7}>
            <Card className="shadow donate-card p-4">
              <div className="text-center mb-3">
                <FaHandHoldingDroplet className="donate-heroicon" />
                <h2 className="mb-2 fw-bold donate-hero-title">
                  Be a Lifesaver – Donate Blood
                </h2>
                <p className="mb-1 text-muted">
                  Fill this form and we’ll connect you with someone in need, fast.
                </p>
              </div>

              {submitted ? (
                <Alert variant="success" className="text-center py-4 rounded-4">
                  <h4 className="fw-bold">Registration Successful!</h4>
                  Thank you, <b>{donor.name}</b>! You will be contacted soon when someone needs your blood type.
                </Alert>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="donorName">
                    <Form.Label className="fw-bold small">Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                      value={donor.name}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="donorEmail">
                    <Form.Label className="fw-bold small">Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      required
                      value={donor.email}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="donorContact">
                        <Form.Label className="fw-bold small">Contact Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="contact"
                          placeholder="Phone number"
                          required
                          value={donor.contact}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="donorGroup">
                        <Form.Label className="fw-bold small">Blood Group</Form.Label>
                        <Form.Select
                          name="bloodGroup"
                          required
                          value={donor.bloodGroup}
                          onChange={handleChange}
                        >
                          <option value="">Select</option>
                          {['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map(bg => (
                            <option key={bg} value={bg}>{bg}</option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="donorCity">
                    <Form.Label className="fw-bold small">City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      placeholder="e.g. Delhi, Mumbai"
                      required
                      value={donor.city}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="donorMessage">
                    <Form.Label className="fw-bold small">Special Message (optional)</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="message"
                      placeholder="Any specific timing or details..."
                      value={donor.message}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-100 replit-btn-main mt-2 py-3"
                  >
                    Pledge to Donate
                  </Button>
                </Form>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Donate;