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
    // send donor to backend API here
  };

  return (
    <div className="donate-bg">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={7}>
            <Card className="shadow donate-card p-4">
              <div className="text-center mb-3">
                <FaHandHoldingDroplet className="donate-heroicon" />
                <h2 className="mb-2 fw-bold donate-hero-title">Be a Lifesaver – Donate Blood</h2>
                <p className="mb-1 text-muted">Fill this form and we’ll connect you with someone in need, fast.</p>
              </div>
              {submitted ? (
                <Alert variant="success" className="text-center">
                  Thank you, {donor.name || "Donor"}! You will be contacted soon when someone needs your blood type.
                </Alert>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="donorName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" required value={donor.name} onChange={handleChange} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="donorEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" required value={donor.email} onChange={handleChange} />
                  </Form.Group>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="donorContact">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="text" name="contact" required value={donor.contact} onChange={handleChange} />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="donorGroup">
                        <Form.Label>Blood Group</Form.Label>
                        <Form.Select name="bloodGroup" required value={donor.bloodGroup} onChange={handleChange}>
                          <option value="">Select</option>
                          <option>O+</option><option>O-</option>
                          <option>A+</option><option>A-</option>
                          <option>B+</option><option>B-</option>
                          <option>AB+</option><option>AB-</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId="donorCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" name="city" required value={donor.city} onChange={handleChange} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="donorMessage">
                    <Form.Label>Special Message (optional)</Form.Label>
                    <Form.Control as="textarea" rows={2} name="message" value={donor.message} onChange={handleChange} />
                  </Form.Group>
                  <Button type="submit" size="lg" className="w-100 replit-btn-main">Pledge to Donate</Button>
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
