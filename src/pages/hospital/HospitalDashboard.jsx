import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Badge } from 'react-bootstrap';

const HospitalDashboard = () => {
  
  const [bloodRequests, setBloodRequests] = useState([
    { id: 'REQ701', patientId: 'PAT101', patientName: 'Sanu Kumar', bloodGroup: 'O+', units: 2, status: 'Pending' },
    { id: 'REQ702', patientId: 'PAT102', patientName: 'Sambhavi Sharma', bloodGroup: 'A-', units: 1, status: 'Fulfilled' },
    { id: 'REQ703', patientId: 'PAT103', patientName: 'Saurabh Singh', bloodGroup: 'B+', units: 4, status: 'Pending' },
    { id: 'REQ704', patientId: 'PAT104', patientName: 'Priya Verma', bloodGroup: 'AB+', units: 1, status: 'Cancelled' },
    { id: 'REQ705', patientId: 'PAT105', patientName: 'Kashish sharma', bloodGroup: 'o-',units: 3, status: 'pending' },
    { id: 'REQ706', patientId: 'PAT106', patientName: 'Ariya Verma', bloodGroup: 'AB+', units: 1, status: 'Cancelled' },
    { id: 'REQ707', patientId: 'PAT107', patientName: 'Pashish sharma', bloodGroup: 'o-',units: 3, status: 'pending' },
    { id: 'REQ708', patientId: 'PAT108', patientName: 'Driya Verma', bloodGroup: 'AB+', units: 1, status: 'Cancelled' },
    { id: 'REQ709', patientId: 'PAT109', patientName: 'Oashish sharma', bloodGroup: 'o-',units: 3, status: 'pending' },
    
  ]);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Pending':
        return <Badge bg="warning">Pending</Badge>;
      case 'Fulfilled':
        return <Badge bg="success">Fulfilled</Badge>;
      case 'Cancelled':
        return <Badge bg="danger">Cancelled</Badge>;
      default:
        return <Badge bg="secondary">{status}</Badge>;
    }
  };

  return (
    <Container fluid>
      <h1 className="my-4">Pulsepoint Dashboard</h1>
      {/* Quick Stats Cards */}
      <Row>
        <Col md={4}>
          <Card bg="primary" text="white" className="mb-3 text-center">
            <Card.Body>
              <Card.Title>Pending Blood Requests</Card.Title>
              <Card.Text className="fs-2 fw-bold">
                {bloodRequests.filter(req => req.status === 'Pending').length}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="success" text="white" className="mb-3 text-center">
            <Card.Body>
              <Card.Title>Requests Fulfilled (This Month)</Card.Title>
              <Card.Text className="fs-2 fw-bold">15</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="info" text="white" className="mb-3 text-center">
            <Card.Body>
              <Card.Title>Total Registered Patients</Card.Title>
              <Card.Text className="fs-2 fw-bold">120</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Blood Requests Table */}
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h4>All blood Requests</h4>
              <Button variant="danger">
                + Create New Request
              </Button>
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Request ID</th>
                    <th>Patient Name</th>
                    <th>Blood Group</th>
                    <th>Units Required</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bloodRequests.map((request) => (
                    <tr key={request.id}>
                      <td>{request.id}</td>
                      <td>{request.patientName}</td>
                      <td>{request.bloodGroup}</td>
                      <td>{request.units}</td>
                      <td>{getStatusBadge(request.status)}</td>
                      <td>
                        {request.status === 'Pending' && (
                          <Button variant="outline-danger" size="sm">Cancel</Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HospitalDashboard;