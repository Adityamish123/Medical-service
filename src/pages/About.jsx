import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaTint, FaHeart, FaUserFriends, FaHospital } from "react-icons/fa";
import "./about.css";

const About = () => (
  <div className="about-bg">
    <Container className="py-5">
      <Row className="justify-content-center mb-5">
        <Col lg={9} md={11}>
          <Card className="shadow p-4 about-card">
            <div className="text-center mb-3">
              <FaTint className="about-icon-main" />
              <h1 className="about-title mb-2">
                About Pulsepoint Blood Bank Network
              </h1>
              <p className="lead text-muted" style={{ fontSize: "1.14rem" }}>
                Connecting donors, hospitals, and families —
                <b> in real-time, across India.</b>
              </p>
            </div>
            <hr className="mb-4" />
            <Row className="mb-4 gx-4 gy-3">
              <Col md={6}>
                <Card className="feature-card p-3 border-0 mb-3 text-center">
                  <FaHeart className="fs-2 text-danger mb-2" />
                  <div className="fw-bold">Real-Time Blood Search</div>
                  <div className="text-muted">
                    Find available blood units instantly by city or group.
                  </div>
                </Card>
                <Card className="feature-card p-3 border-0 mb-3 text-center">
                  <FaHeart className="fs-2 text-success mb-2" />
                  <div className="fw-bold">Donor Matching</div>
                  <div className="text-muted">
                    See nearby donors and get matched for emergencies or
                    planned treatment.
                  </div>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="feature-card p-3 border-0 mb-3 text-center">
                  <FaHospital className="fs-2 text-primary mb-2" />
                  <div className="fw-bold">Hospital Integration</div>
                  <div className="text-muted">
                    Direct requests from verified hospitals — so the process is
                    always secure.
                  </div>
                </Card>
                <Card className="feature-card p-3 border-0 mb-3 text-center">
                  <FaUserFriends className="fs-2 text-warning mb-2" />
                  <div className="fw-bold">Community & Camps</div>
                  <div className="text-muted">
                    Blood donation drives, urgent appeals, and positive stories
                    shared across the network.
                  </div>
                </Card>
              </Col>
            </Row>

            {/* NEW Expansion Blocks */}
            <div className="mb-4">
              <h5 className="fw-bold text-center mb-3">Our Mission</h5>
              <p
                className="text-center text-muted"
                style={{ fontSize: "1.07rem" }}
              >
                Pulsepoint Blood Bank Network aims to bring hope and action
                together. Our platform’s core goal is to bridge the gap between
                urgent demand and willing donors, so no one is left waiting for
                life-saving blood. Every donor, request, and story helps us
                build a stronger, healthier nation.
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold text-center text-danger mb-2">
                Technology with a Heart
              </h6>
              <ul className="about-list text-start px-4" style={{ fontSize: "1rem" }}>
                <li>
                  <b>Smart Alerts:</b> Immediate SMS & WhatsApp notifications
                  for matching donors and blood requests.
                </li>
                <li>
                  <b>Verified Profiles:</b> Secure signup, hospital and donor
                  verification for trustworthy interactions.
                </li>
                <li>
                  <b>Privacy First:</b> All user data protected with advanced
                  encryption and zero third-party sharing.
                </li>
                <li>
                  <b>Live Dashboard:</b> Real-time camp and request tracking,
                  donor history, and analytics for organizers.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold text-center text-primary mb-2">
                Impact
              </h6>
              <div className="text-center text-secondary">
                <span className="me-3">
                  <b>50,000+</b> units donated in 2024
                </span>
                <span className="me-3">
                  <b>1,200+</b> camps organized
                </span>
                <span className="me-3">
                  <b>18,000+</b> lives touched across India
                </span>
              </div>
              <div
                className="text-muted mt-2"
                style={{ fontSize: "1.03rem" }}
              >
                Every drop makes a difference. Every donor becomes a hero.
              </div>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold text-center text-success mb-2">
                Join Us and Make History
              </h6>
              <p
                className="text-center text-muted"
                style={{ fontSize: "1rem" }}
              >
                Become part of a community that celebrates kindness and saves
                lives. Share your story, help a stranger, and inspire others to
                donate. Together, we shape a future where finding blood is never
                a challenge.
              </p>
            </div>
            {/* End Expansion */}

            {/* Team */}
            <div className="mt-4 mb-3 text-center">
              <h6 className="fw-bold text-secondary mb-2">The Team</h6>
              <div>
                <span className="me-3">
                  <b>Aditya Raj Mishra</b>, Founder
                </span>
                <span>
                  <b>Saurav Singh</b>, Community Lead
                </span>
                {/* Add more if needed */}
              </div>
            </div>
            {/* CTA */}
            <div className="mt-3 p-3 text-center about-cta">
              <p>Ready to join, donate, or seek help?</p>
              <Button
                as="a"
                href="/register"
                variant="danger"
                className="me-2"
              >
                Become a Donor
              </Button>
              <Button
                as="a"
                href="/find-blood"
                variant="outline-primary"
                className="fw-bold"
              >
                Find Blood Now
              </Button>
            </div>
            <div
              className="mt-4 text-center text-secondary"
              style={{ fontSize: "0.95rem" }}
            >
              For any help: WhatsApp <b>+91-6203435682</b>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
