import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Form, Alert, Carousel, Spinner, Dropdown, Toast } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaHandHoldingHeart, FaStethoscope, FaUserFriends, FaBell, 
  FaCalendarAlt, FaShareAlt, FaUserCircle, FaWhatsapp 
} from 'react-icons/fa';
import './home.css';

// Cloudinary Assets
const partner2 = "https://res.cloudinary.com/dwgvjoj5y/image/upload/v1773420933/OIP_gdpqxm.jpg";
const partner3 = "https://res.cloudinary.com/dwgvjoj5y/image/upload/v1773420933/OIP_1_gqdjhs.jpg";

// Data Arrays jo aapne provide kiye
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

const Home = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Loading Logic
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  // Share Logic
  const handleShare = () => {
    if (navigator?.share) {
      navigator.share({ title: "Pulsepoint Blood Bank", url: window.location.href });
    } else {
      setShowToast(true);
    }
  };

  return (
    <div className="home-wrapper">
      {/* 1. Notification Alert */}
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible className="text-center mb-0 rounded-0 border-0">
          <FaBell className="me-2" />
          Urgent need for O- and A- blood groups! <Link to="/find-blood" className="alert-link ms-2">Donate now</Link>
        </Alert>
      )}

      {/* 2. Top Header Navigation */}
      <section className="bg-light py-2 border-bottom shadow-sm">
        <Container className="d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <Button variant="warning" size="sm" className="me-2 fw-bold">🩸 Donor Pledge</Button>
            <Button variant="info" size="sm" className="fw-bold">🦸 Rare Donor</Button>
          </div>
          <div className="d-flex align-items-center">
            <img src={partner3} alt="PlayStore" height="30" className="me-2 d-none d-sm-block" />
            <Dropdown align="end" className="ms-3">
              <Dropdown.Toggle variant="outline-primary" size="sm" id="dropdown-profile">
                <FaUserCircle className="me-1" /> Me
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </section>

      {/* 3. HERO VIDEO SECTION WITH SEARCH FORM */}
      <section className="hero-section container shadow-lg mt-4">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source 
            src="https://res.cloudinary.com/dwgvjoj5y/video/upload/c_fill,h_500,q_auto,f_auto/v1773420944/bg17_zo26wl.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="hero-overlay"></div>

        <div className="hero-content px-3">
          <h1 className="display-6 fw-bold mb-4 text-white">Find Blood Donors Near You</h1>
          
          <div className="search-box-container mx-auto p-4 bg-white rounded-4 shadow text-dark">
            <Row className="g-3">
              <Col md={3} className="text-start">
                <Form.Label className="small fw-bold">Select State</Form.Label>
                <Form.Select className="bg-light border-0">
                  <option>Delhi</option>
                  <option>Mumbai</option>
                </Form.Select>
              </Col>
              <Col md={3} className="text-start">
                <Form.Label className="small fw-bold">Select District</Form.Label>
                <Form.Select className="bg-light border-0">
                  <option>Select District</option>
                </Form.Select>
              </Col>
              <Col md={3} className="text-start">
                <Form.Label className="small fw-bold">Blood Group</Form.Label>
                <Form.Select className="bg-light border-0">
                  <option>O+</option>
                  <option>O-</option>
                  <option>B+</option>
                </Form.Select>
              </Col>
              <Col md={3} className="d-flex align-items-end">
                <Button variant="danger" className="w-100 fw-bold py-2 shadow-sm">
                  SEARCH
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      {/* 4. Urgent Appeals Section (Using Array) */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="section-title mb-4">Urgent Appeals</h2>
          {loading ? (
            <div className="text-center py-4"><Spinner animation="border" variant="danger" /></div>
          ) : (
            <Row>
              {urgentAppeals.map((appeal, idx) => (
                <Col md={6} lg={3} key={idx} className="mb-4">
                  <div className="blood-card d-flex align-items-center p-3 shadow-sm border-0 h-100">
                    <div className="bg-danger text-white rounded-circle p-2 me-3 fw-bold" style={{width:'45px', textAlign:'center'}}>
                      {appeal.bloodGroup}
                    </div>
                    <div>
                      <h6 className="mb-0 text-truncate" style={{maxWidth:'140px'}}>{appeal.location}</h6>
                      <small className="text-muted">{appeal.contact}</small>
                    </div>
                    <Button variant="link" className="ms-auto p-0 text-dark" onClick={handleShare}>
                      <FaShareAlt />
                    </Button>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>

      {/* 6. Testimonials Section (Using Array) */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="section-title mb-5">Stories from Our Community</h2>
          <Carousel variant="dark" interval={4000}>
            {testimonials.map((t, i) => (
              <Carousel.Item key={i}>
                <div className="text-center px-lg-5 mb-5">
                  <p className="fst-italic fs-5 text-muted mb-4">{t.text}</p>
                  <h6 className="fw-bold mb-0">{t.name}</h6>
                  <small className="text-primary">{t.role}</small>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* 7. Floating FAB Button */}
      <Button 
        className="shadow-lg border-0 d-flex align-items-center" 
        variant="success" 
        style={{ 
          position: "fixed", right: "24px", bottom: "20px", 
          borderRadius: "30px", zIndex: 9999, padding: "12px 24px" 
        }}
      >
        <FaWhatsapp className="me-2 fs-4" /> <b>Get Help / Chat</b>
      </Button>

      {/* Toast Notification */}
      <Toast 
        show={showToast} 
        onClose={() => setShowToast(false)} 
        style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999 }} 
        delay={2500} autohide
      >
        <Toast.Header><strong className="me-auto">Pulsepoint</strong></Toast.Header>
        <Toast.Body>Link copied! Share it with your friends.</Toast.Body>
      </Toast>
    </div>
  );
};

export default Home;