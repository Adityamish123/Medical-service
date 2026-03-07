import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Form, Badge, Alert, Carousel, Spinner, Dropdown, Toast, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHandHoldingHeart, FaStethoscope, FaUserFriends, FaBell, FaBriefcaseMedical, FaCalendarAlt, FaUsers, FaShareAlt, FaUserCircle, FaWhatsapp } from 'react-icons/fa';
import { BsArrowRight } from "react-icons/bs";
import './home.css';

// Replace local images with CDN URLs
const partner1 = "https://res.cloudinary.com/demo/image/upload/v123456/OIP1.jpg";
const partner2 = "https://res.cloudinary.com/demo/image/upload/v123456/mum.jpg";
const partner3 = "https://res.cloudinary.com/demo/image/upload/v123456/logo2.png";
const partner4 = "https://res.cloudinary.com/demo/image/upload/v123456/logo3.png";
const partner5 = "https://res.cloudinary.com/demo/image/upload/v123456/tata.jpg";

const AnimatedCounter = ({ end, duration = 1, ...rest }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let total = Math.floor(duration * 30), current = 0;
    const increment = end / total;
    const timer = setInterval(() => {
      current++;
      setValue(curr => (curr + increment >= end ? end : curr + increment));
      if (current >= total) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [end, duration]);
  return <span {...rest}>{Math.floor(value)}</span>;
};

const urgentAppeals = [
  { bloodGroup: 'O-', location: 'Apollo Hospital, Delhi', contact: 'Mr. Sharma' },
  { bloodGroup: 'A-', location: 'Fortis Hospital, Mumbai', contact: 'Dr. Verma' },
  { bloodGroup: 'B+', location: 'City Hospital, Bangalore', contact: 'Reception' },
  { bloodGroup: 'AB-', location: 'Lilavati Hospital, Mumbai', contact: 'Blood Bank' },
];

const donationCamps = [
  { title: 'Mega Donation Drive', date: 'Oct 15, 2024', location: 'City Park, Delhi', organizer: 'Red Cross' },
  { title: 'Annual Charity Camp', date: 'Oct 22, 2024', location: 'Community Hall, Mumbai', organizer: 'Lions Club' },
  { title: 'Youth Blood Donation', date: 'Nov 05, 2024', location: 'University Campus, Pune', organizer: 'Student Union' },
];

const testimonials = [
  { text: '"e-raktkosh helped my father find a rare blood type in an emergency. I am forever grateful to the donor."', name: 'Priya Sharma', role: "Patient's Daughter" },
  { text: '"The process was so simple. Being a registered donor on this platform gives me a sense of purpose."', name: 'Amit Kumar', role: 'Registered Donor' },
  { text: '"As a hospital, managing blood requests has become much more efficient thanks to this platform."', name: 'Dr. R. Gupta', role: 'Hospital Manager' },
];

const cities = ["Delhi", "Mumbai", "Bangalore", "Pune", "Noida", "Kolkata"];

const Home = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [city, setCity] = useState('');
  const [suggest, setSuggest] = useState(cities);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [progress, setProgress] = useState(34);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  const handleShare = () => {
    navigator?.share
      ? navigator.share({ title: "Pulsepoint Blood Bank", url: window.location.href })
      : setShowToast(true);
  };

  return (
    <div>
      {/* Notification */}
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible className="text-center mb-0 rounded-0">
          <FaBell className="me-2" />
          Urgent need for O- and A- blood groups in Delhi NCR! <Link to="/find-blood" className="alert-link ms-2">Donate now</Link>
        </Alert>
      )}

      {/* Profile Dropdown */}
      <div className="profile-dropdown-wrap" style={{ position: "absolute", right: 18, top: 14, zIndex: 2 }}>
        <Dropdown align="end">
          <Dropdown.Toggle variant="outline-primary" id="dropdown-profile">
            <FaUserCircle style={{ fontSize: "1.2em" }} /> Me
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>My Donations</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Top Section */}
      <section className="bg-light py-2 border-bottom">
        <Container className="d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <Button variant="warning" className="me-3 mb-2">🩸 Take National Donor Pledge</Button>
            <Button variant="info" className="me-3 mb-2">🦸 Rare Donor? Register</Button>
          </div>
          <div className="mb-2">
            App:
            <img src={partner3} alt="Play" height="34" className="mx-1" />
            <img src={partner2} alt="App Store" height="34" />
          </div>
          <Form.Select size="sm" style={{ maxWidth: '110px', marginLeft: "1rem" }}>
            <option>EN</option>
            <option>HI</option>
            <option>BN</option>
            <option>TE</option>
          </Form.Select>
        </Container>
      </section>

      {/* Hero Section with CDN Video */}
      <div className="hero-section position-relative">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="https://res.cloudinary.com/demo/video/upload/v123456/hero3.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay" />
        <Container className="hero-content position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
          <Row className="align-items-center">
            <Col md={7}>
              <h1>Every Blood Donor is a Hero.</h1>
              <p>A single donation can save up to three lives. Join our community of heroes and make a difference today.</p>
              <Link to="/register">
                <Button variant="danger" size="lg" className="mt-3">Become a Donor <BsArrowRight className="ms-2" /></Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Urgent Appeals */}
      <section className="section urgent-appeals-section bg-white">
        <Container>
          <h2 className="section-title mb-4">Urgent Appeals</h2>
          {loading && <Spinner animation="border" />}
          <Row>
            {urgentAppeals.map((appeal, idx) => (
              <Col md={6} lg={3} key={idx} className="mb-4">
                <div className="blood-card d-flex align-items-center shadow-sm p-3 rounded bg-light">
                  <div className="blood-group-badge me-3">{appeal.bloodGroup}</div>
                  <div>
                    <h5 className="mb-1">{appeal.location}</h5>
                    <small className="text-muted">Contact: {appeal.contact}</small>
                  </div>
                  <Button size="sm" variant="outline-dark" className="ms-auto" onClick={handleShare}><FaShareAlt/></Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Feature Section */}
      <section className="section bg-light py-5" id="features">
        <Container>
          <h2 className="section-title mb-4">The Importance of Your Donation</h2>
          <Row>
            <Col md={4}>
              <div className="feature-card shadow-sm p-4 text-center rounded bg-white">
                <FaHandHoldingHeart className="feature-icon mb-3 text-danger fs-2" />
                <h4>Save Lives</h4>
                <p>Your blood is a precious gift in emergencies, surgeries, and for patients with chronic illnesses.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card shadow-sm p-4 text-center rounded bg-white">
                <FaStethoscope className="feature-icon mb-3 text-danger fs-2" />
                <h4>Health Benefits</h4>
                <p>Donating blood can improve your cardiovascular health and provide a free health check-up.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card shadow-sm p-4 text-center rounded bg-white">
                <FaUserFriends className="feature-icon mb-3 text-danger fs-2" />
                <h4>Build Community</h4>
                <p>Become part of a selfless community dedicated to helping others in their time of need.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Donation Camps */}
      <section className="section camps-section bg-white py-5">
        <Container>
          <h2 className="section-title mb-4">Upcoming Donation Camps</h2>
          <Row>
            {donationCamps.map((camp, idx) => (
              <Col md={4} key={idx} className="mb-4">
                <Card className="h-100 shadow-sm camp-card">
                  <Card.Body>
                    <Card.Title><FaCalendarAlt className="text-danger me-2" /> {camp.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{camp.date}</Card.Subtitle>
                    <Card.Text>
                      <strong>Location:</strong> {camp.location}<br />
                      <strong>Organizer:</strong> {camp.organizer}
                    </Card.Text>
                    <Button variant="outline-danger">View Details</Button>
                    <Button variant="outline-success" className="ms-2" onClick={handleShare}><FaShareAlt/> Share</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Partners */}
      <section className="section bg-light py-5">
        <Container>
          <h2 className="section-title mb-4">Our Trusted Partners</h2>
          <Row className="align-items-center justify-content-center text-center">
            {[partner1, partner2, partner3, partner4, partner5].map((p, i) => (
              <Col md={2} xs={4} className="mb-4" key={i}>
                <img src={p} alt={`Partner ${i+1}`} className="partner-logo" />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="section py-5 bg-light">
        <Container>
          <h2 className="section-title">Stories from Our Community</h2>
          <Carousel variant="dark" interval={4200}>
            {testimonials.map((t, i) => (
              <Carousel.Item key={i}>
                <Card className="shadow-sm mb-3 text-center border-0">
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>{t.text}</p>
                      <footer className="blockquote-footer">{t.name} <cite title="Role">, {t.role}</cite></footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="section cta-section bg-light py-5">
        <Container>
          <h2>Ready to Make a Difference?</h2>
          <p className="lead my-3">Join thousands of volunteers and hospitals. Your registration can be a ray of hope for someone.</p>
          <Link to="/register"><Button variant="light" size="lg">Join Us Now</Button></Link>
        </Container>
      </section>

      {/* Floating Chat/Help */}
      <Button className="pulsechat-fab shadow fab-help" size="lg" variant="success" style={{ zIndex: 9999, position: "fixed", right: "24px", bottom: "20px", borderRadius: "30px", fontSize: "1.2em", boxShadow: "0 3px 14px #4ecdc442" }}>
        <FaWhatsapp className="fs-4" /> Get Help / Chat
      </Button>

      {/* Toast Notification */}
      <Toast show={showToast} onClose={() => setShowToast(false)} style={{ position: 'fixed', top: 44, right: 18, zIndex: '3000' }} delay={2100} autohide>
        <Toast.Header>
          <strong className="me-auto">Share Feature</strong>
        </Toast.Header>
        <Toast.Body>Link copied! You can share manually now.</Toast.Body>
      </Toast>
    </div>
  );
};

export default Home;