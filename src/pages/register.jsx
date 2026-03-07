import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHandHoldingHeart, FaUserPlus, FaHospitalAlt } from 'react-icons/fa';
import './register.css';
import bgImg from '../assets/bg10.jpg';

const Register = () => {
  const [role, setRole] = useState('donor');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [disease, setDisease] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Welcome, ${name}! Registration complete.`);
  };

  const renderDonorFields = () => (
    <>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Blood Group</Form.Label>
            <Form.Select value={bloodGroup} onChange={e => setBloodGroup(e.target.value)}>
              <option>Select Blood Group</option>
              {['A+','A-','B+','B-','AB+','AB-','O+','O-'].map(bg => (
                <option key={bg} value={bg}>{bg}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={e => setAge(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <Form.Select value={gender} onChange={e => setGender(e.target.value)}>
          <option>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Any Major Disease (if any)</Form.Label>
        <Form.Control
          type="text"
          placeholder="e.g., Diabetes, Hypertension"
          value={disease}
          onChange={e => setDisease(e.target.value)}
        />
      </Form.Group>
    </>
  );

  const getRoleIcon = () => {
    if (role === 'donor') return <FaHandHoldingHeart className="register-bigicon text-danger" />;
    if (role === 'hospital') return <FaHospitalAlt className="register-bigicon text-primary" />;
    return <FaHandHoldingHeart className="register-bigicon text-warning" />;
  };

  return (
    <div className="register-new-bg">
      {/* Background image */}
      <img
        src={bgImg}
        alt="background"
        className="register-bg-img"
      />

      <Container className="register-content-box">
        <Card className="register-accent-card shadow border-0">
          <Row className="g-0 align-items-stretch">
            <Col md={4} className="register-accent-col d-none d-md-flex flex-column justify-content-center align-items-center">
              {getRoleIcon()}
              <h4 className="mt-2 text-white text-center fw-bold">
                {role === 'donor'
                  ? 'Become a Lifesaver'
                  : role === 'bloodbank'
                  ? 'Blood Bank Signup'
                  : 'Hospital Signup'}
              </h4>
            </Col>

            <Col md={8} xs={12}>
              <Card.Body className="p-4">
                <div className="d-md-none text-center mb-3">{getRoleIcon()}</div>
                <h2 className="mb-2 fw-bold text-center">
                  Create your Account <FaUserPlus className="ms-2 register-blinkicon" />
                </h2>

                <Form onSubmit={submitHandler}>
                  <Form.Group className="mb-3">
                    <Form.Label>Register as a</Form.Label>
                    <Form.Select value={role} onChange={e => setRole(e.target.value)}>
                      <option value="donor">Donor</option>
                      <option value="hospital">Hospital</option>
                      <option value="bloodbank">Blood Bank</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>{role === 'donor' ? 'Full Name' : 'Organization Name'}</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter contact number"
                          value={contact}
                          onChange={e => setContact(e.target.value)}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter password"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Address / Location</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="Enter full address"
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                      required
                    />
                  </Form.Group>

                  {role === 'donor' && renderDonorFields()}

                  <div className="d-grid mt-3">
                    <Button type="submit" variant="danger" size="lg">
                      Register
                    </Button>
                  </div>

                  <Row className="py-3">
                    <Col className="text-center">
                      Already registered? <Link to="/login" className="register-accent-link">Login here</Link>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Register;