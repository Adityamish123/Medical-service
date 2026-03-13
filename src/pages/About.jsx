import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaTint, FaHeart, FaUserFriends, FaHospital } from "react-icons/fa";
import "./about.css";

const About = () => (
  <div className="about-bg">
    {/* Background image is handled in CSS */}
    <Container className="py-5">
      <Row className="justify-content-center mb-5">
        <Col lg={9} md={11}>
          <Card className="shadow p-4 about-card">
            {/* Header */}
            <div className="text-center mb-3">
              <FaTint className="about-icon-main" />
              <h1 className="about-title mb-2">
                About Pulsepoint Blood Bank Network
              </h1>
              <p className="lead text-muted">
                Connecting donors, hospitals, and families — 
                <b> in real-time, across India.</b>
              </p>
            </div>

            <hr className="mb-4" />

            {/* Feature Cards */}
            <Row className="mb-4 gx-4 gy-3">
              <Col md={6}>
                <Card className="feature-card p-3 text-center mb-3">
                  <FaHeart className="fs-2 text-danger mb-2" />
                  <div className="fw-bold">Real-Time Blood Search</div>
                  <div className="text-muted">
                    Find available blood units instantly by city or group.
                  </div>
                </Card>
                <Card className="feature-card p-3 text-center mb-3">
                  <FaHeart className="fs-2 text-success mb-2" />
                  <div className="fw-bold">Donor Matching</div>
                  <div className="text-muted">
                    See nearby donors and get matched for emergencies or planned treatment.
                  </div>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="feature-card p-3 text-center mb-3">
                  <FaHospital className="fs-2 text-primary mb-2" />
                  <div className="fw-bold">Hospital Integration</div>
                  <div className="text-muted">
                    Direct requests from verified hospitals — so the process is always secure.
                  </div>
                </Card>
                <Card className="feature-card p-3 text-center mb-3">
                  <FaUserFriends className="fs-2 text-warning mb-2" />
                  <div className="fw-bold">Community & Camps</div>
                  <div className="text-muted">
                    Blood donation drives, urgent appeals, and positive stories shared across the network.
                  </div>
                </Card>
              </Col>
            </Row>

            {/* Mission */}
            <div className="mb-4 text-center">
              <h5 className="fw-bold mb-3 text-danger">Our Mission</h5>
              <p className="text-muted">
                Pulsepoint Blood Bank Network aims to bring hope and action together. 
                Our platform bridges the gap between urgent demand and willing donors.
              </p>
            </div>

            {/* Technology */}
            <div className="mb-4">
              <h6 className="fw-bold text-center text-danger mb-2">Technology with a Heart</h6>
              <ul className="about-list text-start">
                <li><b>Smart Alerts:</b> Immediate SMS & WhatsApp notifications.</li>
                <li><b>Verified Profiles:</b> Secure signup and hospital verification.</li>
                <li><b>Privacy First:</b> All user data protected with encryption.</li>
              </ul>
            </div>

            {/* Impact */}
            <div className="mb-4 text-center text-secondary">
              <h6 className="fw-bold text-primary mb-2">Impact</h6>
              <div className="mb-2">
                <span className="me-3"><b>50,000+</b> units donated</span>
                <span className="me-3"><b>1,200+</b> camps organized</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="about-cta text-center mb-4 justify-content-center">
              <p className="w-100 mb-2">Ready to join, donate, or seek help?</p>
              <Button as="a" href="/register" variant="danger" className="me-2 px-4">
                Become a Donor
              </Button>
              <Button as="a" href="/find-blood" variant="outline-primary" className="fw-bold px-4">
                Find Blood Now
              </Button>
            </div>

            {/* Help */}
            <div className="text-center text-secondary" style={{ fontSize: "0.95rem" }}>
              For any help: WhatsApp <b>+91-6203435682</b>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;