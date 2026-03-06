import React, { useState } from 'react';
import { Button, Card, Container, Form, InputGroup, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle, FaUser, FaKey, FaPhone, FaSms } from 'react-icons/fa';
import './Login.css';

/* Animated block for smooth form switch */
const AnimatedBlock = ({ show, children }) => (
  <div
    style={{
      transition: '0.25s ease',
      opacity: show ? 1 : 0,
      transform: show ? 'translateY(0)' : 'translateY(6px)',
      pointerEvents: show ? 'auto' : 'none'
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
      {/* Background Image */}
      <img src="/assets/bg19.jpeg" alt="" className="login-bg-img" />

      {/* SVG Blob Background */}
      <BlobBg />

      <Container className="login-flex-center">
        <Card className="login-glass-card">
          <Card.Body>
            <div className="text-center mb-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/910/910205.png"
                alt="logo"
                height="48"
              />
            </div>

            <h2 className="text-center fw-bold text-danger mb-4 login-big-text">
              Sign in
            </h2>

            {alert && (
              <Alert
                variant="info"
                dismissible
                onClose={() => setAlert('')}
              >
                {alert}
              </Alert>
            )}

            {/* AUTH MODE BUTTONS */}
            <div className="d-grid gap-2 mb-4">
              <Button
                className="login-google-btn"
                variant="light"
                size="lg"
                onClick={handleGoogleLogin}
              >
                <FaGoogle className="me-2 text-primary fs-5" />
                Continue with Google
              </Button>

              <Button
                variant={mode === 'otp' ? 'outline-success' : 'outline-secondary'}
                onClick={() => {
                  setMode('otp');
                  setOtpSent(false);
                }}
              >
                <FaPhone className="me-2" />
                Phone & OTP
              </Button>

              <Button
                variant={mode === 'password' ? 'outline-primary' : 'outline-secondary'}
                onClick={() => setMode('password')}
              >
                <FaUser className="me-2" />
                Username / Password
              </Button>
            </div>

            {/* OTP FORM */}
            <AnimatedBlock show={mode === 'otp'}>
              <Form onSubmit={otpSent ? handleOtpLogin : handleSendOtp}>
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text><FaPhone /></InputGroup.Text>
                    <Form.Control
                      type="tel"
                      placeholder="10-digit phone number"
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
                      <InputGroup.Text><FaSms /></InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={e => setOtp(e.target.value)}
                        maxLength={6}
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                )}

                <Button
                  type="submit"
                  variant="success"
                  className="w-100 login-btn-wide"
                >
                  {otpSent ? 'Login' : 'Send OTP'}
                </Button>
              </Form>
            </AnimatedBlock>

            {/* PASSWORD FORM */}
            <AnimatedBlock show={mode === 'password'}>
              <Form onSubmit={handlePasswordLogin}>
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text><FaUser /></InputGroup.Text>
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
                    <InputGroup.Text><FaKey /></InputGroup.Text>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={pass}
                      onChange={e => setPass(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-100 login-btn-wide"
                >
                  Login
                </Button>

                <Link
                  to="/forgot"
                  className="d-block text-center small mt-2 text-decoration-none"
                >
                  Forgot password?
                </Link>
              </Form>
            </AnimatedBlock>

            <div className="text-center mt-4">
              New here?{' '}
              <Link to="/register" className="login-link-new">
                Create account
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

/* SVG Blob Background */
function BlobBg() {
  return (
    <div className="login-blob-bg">
      <svg viewBox="0 0 800 600" width="100%" height="100%">
        <defs>
          <radialGradient id="grad-red" r="70%">
            <stop offset="0%" stopColor="#ff3574cc" />
            <stop offset="100%" stopColor="#ffffff00" />
          </radialGradient>
          <radialGradient id="grad-blue" r="70%">
            <stop offset="0%" stopColor="#55c6ffcc" />
            <stop offset="100%" stopColor="#ffffff00" />
          </radialGradient>
        </defs>

        <ellipse cx="560" cy="460" rx="220" ry="95" fill="url(#grad-red)">
          <animate attributeName="rx" values="220;170;220" dur="9s" repeatCount="indefinite" />
        </ellipse>

        <ellipse cx="200" cy="160" rx="180" ry="80" fill="url(#grad-blue)">
          <animate attributeName="rx" values="180;140;180" dur="7s" repeatCount="indefinite" />
        </ellipse>
      </svg>
    </div>
  );
}

export default Login;