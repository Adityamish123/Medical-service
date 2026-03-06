import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Form, Badge, Alert, Carousel, Spinner, Dropdown, Toast, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import heroVideo from "../assets/bg17.mov";
import partner1 from "../assets/OIP (1).jpg";
import partner2 from "../assets/mum.jpg";
import partner3 from "../assets/logo2.png";
import partner4 from "../assets/logo3.png";
import partner5 from "../assets/tata.jpg";
import { FaHandHoldingHeart, FaStethoscope, FaUserFriends, FaBell, FaBriefcaseMedical, FaSearch, FaCalendarAlt, FaUsers, FaChartBar, FaComments, FaShareAlt, FaUserCircle, FaWhatsapp } from 'react-icons/fa';
import { BsArrowRight } from "react-icons/bs";
import './home.css';

const AnimatedCounter = ({ end, duration = 1, ...rest }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let total = Math.floor(duration * 30), current = 0;
    const increment = end / total;
    const timer = setInterval(() => {
      current++;
      setValue(curr => {
        const next = curr + increment;
        return next >= end ? end : next;
      });
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

const topDonors = [
  { name: "Raj Kumar", units: 15 },
  { name: "Sana Sharma", units: 12 },
  { name: "Aditya Jain", units: 10 }
];
const mostNeededGroups = [
  { group: "O-", need: 52 },
  { group: "A-", need: 37 },
  { group: "AB-", need: 22 }
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

  // Loader/Spinner sim
  const [loading, setLoading] = useState(false);

  // Toast Notification
  const [showToast, setShowToast] = useState(false);

  // Progress bar example for registration
  const [progress, setProgress] = useState(34);

  useEffect(() => {
    // simulate a loading effect
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

      {/* Section with Loader */}
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

      <div className="figma-landing-bg py-5 px-0" style={{ background: 'linear-gradient(116deg,#f9e4f8 55%, #e6f5fe 100%)' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={9} className="text-center">
              <h1 className="figma-landing-title mb-4">
                <span style={{ fontWeight: 700, letterSpacing: "3px", color: "#e94061" }}>PULSEPOINT</span>: India's Blood Bank Network
              </h1>
              <p className="lead mb-3">Real-Time <b>Blood Search</b>. Smart Donor Tracking. Donation Camps. Hospital & Blood Bank Dashboards.</p>
              <div className="mt-4">
                <Form className="search-form-custom mx-auto" style={{ maxWidth: '550px' }}>
                  {(loading) ? <Spinner animation="border" /> : null}
                  {/* Search field, autocomplete */}
                  <Form.Control
                    type="text"
                    placeholder="Search city/blood bank..."
                    value={city}
                    onChange={e => {
                      setCity(e.target.value);
                      setSuggest(cities.filter(c => c.toLowerCase().includes(e.target.value.toLowerCase())));
                    }}
                    style={{ marginBottom: "10px" }}
                  />
                  {city && (
                    <ul className="list-group">
                      {suggest.map((c, idx) => (
                        <li key={idx} className="list-group-item py-1 px-2" style={{ fontSize: "1em" }}>{c}</li>
                      ))}
                    </ul>
                  )}
                </Form>
              </div>
            </Col>
          </Row>

          <Row className="mt-5 text-center">
            <Col md={3}>
              <Card className="mb-3 shadow-sm border-danger hover-pop">
                <Card.Body>
                  <FaUsers className="fs-1 text-danger mb-2" />
                  <h5>Active Donors</h5>
                  <h4><AnimatedCounter end={372} /></h4>
                  <Badge bg="danger">+15 Today</Badge>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mb-3 shadow-sm border-info hover-pop">
                <Card.Body>
                  <FaBriefcaseMedical className="fs-1 text-info mb-2" />
                  <h5>Requests Pending</h5>
                  <h4><AnimatedCounter end={23} /></h4>
                  <Badge bg="info">5 New</Badge>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mb-3 shadow-sm border-success hover-pop">
                <Card.Body>
                  <FaHandHoldingHeart className="fs-1 text-success mb-2" />
                  <h5>Total Units Available</h5>
                  <h4><AnimatedCounter end={410} /></h4>
                  <Badge bg="success">+32 units this week</Badge>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mb-3 shadow-sm border-primary hover-pop">
                <Card.Body>
                  <FaCalendarAlt className="fs-1 text-primary mb-2" />
                  <h5>Upcoming Camps</h5>
                  <h4><AnimatedCounter end={5} /></h4>
                  <Badge bg="primary">New Camp: 12 Oct</Badge>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Progress bar for registration (demo) */}
          <Row className="mt-4">
            <Col md={7} className="mx-auto">
              <div className="mb-1 fw-bold">Profile Registration Progress</div>
              <ProgressBar now={progress} label={`${progress}%`} srOnly style={{ height: "20px", borderRadius: "10px" }} />
            </Col>
          </Row>

          {/* Social Share button */}
          <Row className="mt-2">
            <Col className="text-center">
              <Button variant="outline-dark" onClick={handleShare}>
                <FaShareAlt className="me-2" />
                Share This Campaign/Site
              </Button>
            </Col>
          </Row>
          {/* Toast notification for share feedback */}
          <Toast show={showToast} onClose={() => setShowToast(false)} style={{ position: 'fixed', top: 44, right: 18, zIndex: '3000' }} delay={2100} autohide>
            <Toast.Header>
              <strong className="me-auto">Share Feature</strong>
            </Toast.Header>
            <Toast.Body>Link copied! You can share manually now.</Toast.Body>
          </Toast>
        </Container>
      </div>

      <div className="hero-section position-relative">
        <video className="hero-video" src={heroVideo} autoPlay loop muted playsInline />
        <div className="hero-overlay" />
        <Container className="hero-content position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
          <Row className="align-items-center">
            <Col md={7}>
              <h1>Every Blood Donor is a Hero.</h1>
              <p>A single donation can save up to three lives. Join our community of heroes and make a difference today.</p>
              <Link to="/register"><Button variant="danger" size="lg" className="mt-3">Become a Donor <BsArrowRight className="ms-2" /></Button></Link>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Urgent Appeals */}
      <section className="section urgent-appeals-section bg-white">
        <Container>
          <h2 className="section-title mb-4">Urgent Appeals</h2>
          {/* Loader on data */}
          {loading ? <Spinner animation="border" /> : null}
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

      {/* Why Donate */}
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

      {/* Upcoming Camps */}
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
            <Col md={2} xs={4} className="mb-4"><img src={partner1} alt="Partner 1" className="partner-logo" /></Col>
            <Col md={2} xs={4} className="mb-4"><img src={partner2} alt="Partner 2" className="partner-logo" /></Col>
            <Col md={2} xs={4} className="mb-4"><img src={partner3} alt="Partner 3" className="partner-logo" /></Col>
            <Col md={2} xs={4} className="mb-4"><img src={partner4} alt="Partner 4" className="partner-logo" /></Col>
            <Col md={2} xs={4} className="mb-4"><img src={partner5} alt="Partner 5" className="partner-logo" /></Col>
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
    </div>
  );
};

export default Home;
