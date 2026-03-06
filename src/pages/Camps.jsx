import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import "./camps.css";

function BlobBg() {
  return (
    <div className="login-blob-bg">
      <svg width="100vw" height="100vh" viewBox="0 0 800 600">
        <defs>
          <radialGradient id="grad-red" r="70%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#ff3574cc" />
            <stop offset="100%" stopColor="#fadcff00" />
          </radialGradient>
          <radialGradient id="grad-blue" r="70%" fx="70%" fy="30%">
            <stop offset="10%" stopColor="#55c6ffcc" />
            <stop offset="95%" stopColor="#cfd2fa00" />
          </radialGradient>
        </defs>
        <ellipse cx="550" cy="480" rx="230" ry="95" fill="url(#grad-red)">
          <animate attributeName="rx" values="230;170;230" dur="10s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="190" cy="180" rx="180" ry="83" fill="url(#grad-blue)">
          <animate attributeName="rx" values="180;140;190" dur="8s" repeatCount="indefinite" />
        </ellipse>
      </svg>
    </div>
  );
}

// Demo sample camps list
const campList = [
  {
    title: "Mega Donation Drive",
    date: "Oct 15, 2024",
    location: "City Park, Delhi",
    organizer: "Red Cross",
    description:
      "Join our city’s biggest drive. Free health check-up for all donors. Certificates on spot!",
  },
  {
    title: "Annual Charity Camp",
    date: "Oct 22, 2024",
    location: "Community Hall, Mumbai",
    organizer: "Lions Club",
    description:
      "Walk in anytime 10am-5pm. Snacks for all donors. Hospital panel on site.",
  },
  {
    title: "Youth Blood Donation",
    date: "Nov 05, 2024",
    location: "University Campus, Pune",
    organizer: "Student Union",
    description:
      "Student donors get official thank you kits. Campus-wide contest for max participation.",
  },
];

const Camps = () => {
  // This function runs when Participate button is clicked
  const handleParticipate = (camp) => {
    alert(`Thank you for choosing to participate in "${camp.title}"!`);
    // Add more action here if you want (routing, API call, etc.)
  };

  return (
    <div className="login-bg-vibrant">
      {/* Background image */}
      <img src="src/assets/bg10.jpg" alt="" className="login-bg-img" />
      {/* SVG Blobs */}
      <BlobBg />
      <Container className="py-5">
        <Row className="justify-content-center mb-4">
          <Col lg={8} className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/910/910205.png"
              alt="logo"
              height="48"
              className="mb-2"
            />
            <h1 className="camps-title mb-2 fw-bold">
              Upcoming Blood Donation Camps
            </h1>
            <p className="lead text-muted">
              Be a part of our nationwide donation drives and save lives in your
              community.
            </p>
          </Col>
        </Row>
        <Row className="gy-4">
          {campList.map((camp, idx) => (
            <Col md={4} key={idx}>
              <Card className="camp-card shadow h-100">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center mb-2">
                    <FaCalendarAlt className="me-2 text-danger" />
                    {camp.title}
                  </Card.Title>
                  <div className="mb-2 text-muted">
                    <FaMapMarkerAlt className="me-1 text-success" />
                    {camp.location}
                  </div>
                  <div className="mb-2 text-secondary">
                    <FaUsers className="me-1 text-warning" />
                    {camp.organizer}
                  </div>
                  <div className="mb-2">{camp.date}</div>
                  <Card.Text>{camp.description}</Card.Text>
                  <Button
                    variant="outline-danger"
                    onClick={() => handleParticipate(camp)}
                  >
                    Participate
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Camps;
