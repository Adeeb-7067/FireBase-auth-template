import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('Registration attempt with email:', email);

    if (password !== confirmPassword) {
      console.error('Password mismatch');
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      console.error('Password too short');
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      console.log('Attempting to create user...');
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Registration successful:', userCredential.user);
      console.log('User ID:', userCredential.user.uid);
      console.log('Email verified:', userCredential.user.emailVerified);
      navigate('/');
    } catch (error) {
      console.error('Registration error:', {
        code: error.code,
        message: error.message,
        fullError: error
      });

      // More user-friendly error messages
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('An account with this email already exists');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address format');
          break;
        case 'auth/operation-not-allowed':
          setError('Email/password accounts are not enabled. Please contact support.');
          break;
        case 'auth/weak-password':
          setError('Password is too weak. Please use a stronger password');
          break;
        default:
          setError(error.message);
      }
    }
  };

  // Log when component mounts
  React.useEffect(() => {
    console.log('Register component mounted');
    return () => console.log('Register component unmounted');
  }, []);

  // Password strength validation
  const validatePassword = (password) => {
    const strength = {
      hasMinLength: password.length >= 6,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    
    console.log('Password strength:', strength);
    return strength;
  };

  return (
    <div className="min-vh-100 d-flex align-items-center" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={5}>
            <div className="bg-white p-4 p-md-5 rounded-3 shadow-lg">
              <div className="text-center mb-4">
                <h2 className="fw-bold mb-2">Create Account</h2>
                <p className="text-muted">Join us today</p>
              </div>

              {error && (
                <Alert variant="danger" className="mb-4">
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      console.log('Email input changed:', e.target.value);
                    }}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      console.log('Password changed, validating...');
                      validatePassword(e.target.value);
                    }}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      console.log('Confirm password changed, checking match...');
                      console.log('Passwords match:', e.target.value === password);
                    }}
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button 
                    variant="primary" 
                    type="submit"
                    size="lg"
                    className="mb-3"
                    style={{
                      background: 'linear-gradient(to right, #667eea, #764ba2)',
                      border: 'none'
                    }}
                  >
                    Create Account
                  </Button>
                </div>

                <div className="text-center">
                  <Link to="/login" className="text-decoration-none">
                    Already have an account? <span className="fw-bold">Sign in</span>
                  </Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register; 