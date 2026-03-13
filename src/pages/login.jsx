import React, { useState } from 'react';
import { Button, Card, Container, Form, InputGroup, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle, FaUser, FaKey, FaPhone, FaSms } from 'react-icons/fa';
import './Login.css';

/* Animated block for smooth form switch */
const AnimatedBlock = ({ show, children }) => (
  <div
    style={{
      transition: 'opacity 0.25s ease, transform 0.25s ease',
      opacity: show ? 1 : 0,
      transform: show ? 'translateY(0)' : 'translateY(6px)',
      pointerEvents: show ? 'auto' : 'none',
      display: show ? 'block' : 'none'
    }}
  >
    {children}
  </div>
);

const Login = () => {
  const [mode, setMode] = useState('password');
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [alert, setAlert] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleGoogleLogin = () => setAlert('Google login coming soon...');
  
  const handleSendOtp = e => {
    e.preventDefault();
    setOtpSent(true);
    setAlert('OTP sent (demo: 123456)');
  };

  const handleOtpLogin = e => {
    e.preventDefault();
    setAlert(otp === '123456' ? 'OTP verified! Login success.' : 'Invalid OTP');
  };

  const handlePasswordLogin = e => {
    e.preventDefault();
    setAlert('Verifying credentials...');
  };

  return (
    <div className="login-bg-vibrant">
      {/* Background Image from Cloudinary */}
      <img 
        src="https://res.cloudinary.com/dwgvjoj5y/image/upload/v1773420905/blood22_jjcty8.webp" 
        alt="Blood Donation Background" 
        className="login-bg-img" 
      />

      {/* SVG Blob Background for extra depth */}
      <BlobBg />

      <Container className="login-flex-center">
        <Card className="login-glass-card">
          <Card.Body>
            <div className="text-center mb-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/910/910205.png"
                alt="logo"
                height="55"
              />
            </div>

            <h2 className="text-center fw-bold text-danger mb-4 login-big-text">
              Sign in
            </h2>

            {alert && (
              <Alert variant="info" dismissible onClose={() => setAlert('')} className="py-2 small">
                {alert}
              </Alert>
            )}

            {/* AUTH MODE BUTTONS */}
            <div className="d-grid gap-2 mb-4">
              <Button
                className="login-google-btn shadow-sm"
                variant="light"
                onClick={handleGoogleLogin}
              >
                <FaGoogle className="me-2 text-primary" />
                Continue with Google
              </Button>

              <div className="d-flex gap-2">
                <Button
                  variant={mode === 'otp' ? 'danger' : 'outline-danger'}
                  className="w-50 small-btn"
                  onClick={() => {
                    setMode('otp');
                    setOtpSent(false);
                    setOtp('');
                    setAlert('');
                  }}
                >
                  <FaPhone className="me-1" /> OTP
                </Button>

                <Button
                  variant={mode === 'password' ? 'danger' : 'outline-danger'}
                  className="w-50 small-btn"
                  onClick={() => {
                    setMode('password');
                    setAlert('');
                  }}
                >
                  <FaUser className="me-1" /> Password
                </Button>
              </div>
            </div>

            {/* OTP FORM */}
            <AnimatedBlock show={mode === 'otp'}>
              <Form onSubmit={otpSent ? handleOtpLogin : handleSendOtp}>
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text className="bg-white border-end-0"><FaPhone className="text-danger"/></InputGroup.Text>
                    <Form.Control
                      type="tel"
                      placeholder="Enter Phone Number"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      required
                      pattern="[0-9]{10}"
                      disabled={otpSent}
                    />
                  </InputGroup>
                </Form.Group>

                {otpSent && (
                  <Form.Group className="mb-3">
                    <InputGroup>
                      <InputGroup.Text className="bg-white border-end-0"><FaSms className="text-danger"/></InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        value={otp}
                        onChange={e => setOtp(e.target.value)}
                        maxLength={6}
                        required
                        autoFocus
                      />
                    </InputGroup>
                  </Form.Group>
                )}

                <Button type="submit" variant="danger" className="w-100 login-btn-wide fw-bold">
                  {otpSent ? 'Login' : 'Send OTP'}
                </Button>
              </Form>
            </AnimatedBlock>

            {/* PASSWORD FORM */}
            <AnimatedBlock show={mode === 'password'}>
              <Form onSubmit={handlePasswordLogin}>
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text className="bg-white border-end-0"><FaUser className="text-danger"/></InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username or Email"
                      value={user}
                      onChange={e => setUser(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text className="bg-white border-end-0"><FaKey className="text-danger"/></InputGroup.Text>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={pass}
                      onChange={e => setPass(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <Button type="submit" variant="danger" className="w-100 login-btn-wide fw-bold">
                  Login
                </Button>

                <Link to="/forgot" className="d-block text-center small mt-3 text-muted text-decoration-none">
                  Forgot password?
                </Link>
              </Form>
            </AnimatedBlock>

            <div className="text-center mt-4 pt-2 border-top">
              New to BloodBank?{' '}
              <Link to="/register" className="login-link-new fw-bold text-decoration-none">
                Join Now
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

/* Background decoration component */
function BlobBg() {
  return (
    <div className="login-blob-bg">
      <svg viewBox="0 0 800 600" width="100%" height="100%">
        <defs>
          <radialGradient id="grad-red" r="70%">
            <stop offset="0%" stopColor="#ff357466" />
            <stop offset="100%" stopColor="#ffffff00" />
          </radialGradient>
        </defs>
        <circle cx="10%" cy="10%" r="150" fill="url(#grad-red)" />
        <circle cx="90%" cy="90%" r="200" fill="url(#grad-red)" />
      </svg>
    </div>
  );
}

export default Login;