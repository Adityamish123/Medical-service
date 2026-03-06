import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Inventory from './Inventory'; 
import './BloodBankDashboard.css'; 

const BloodBankDashboard = () => {
  return (
    <div className="dashboard-container">
      <Container fluid className="text-center">
        <h1 className="dashboard-title my-4">Blood Bank Dashboard</h1>
        <Row>
          <Col md={4} sm={12}>
            <Card bg="danger" text="white" className="mb-3 dashboard-card">
              <Card.Body>
                <Card.Title>Total Units</Card.Title>
                <Card.Text className="fs-3">150</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card bg="success" text="white" className="mb-3 dashboard-card">
              <Card.Body>
                <Card.Title>Requests Fulfilled</Card.Title>
                <Card.Text className="fs-3">85</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card bg="warning" text="dark" className="mb-3 dashboard-card">
              <Card.Body>
                <Card.Title>Pending Requests</Card.Title>
                <Card.Text className="fs-3">12</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Inventory />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BloodBankDashboard;
