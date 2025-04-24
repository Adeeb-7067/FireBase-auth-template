import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      navigate('/landing');
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('Email is already in use');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address');
          break;
        case 'auth/weak-password':
          setError('Password should be at least 6 characters');
          break;
        default:
          setError(error.message);
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-vh-100 d-flex align-items-center"
      style={{
        background: 'linear-gradient(135deg, #1a73e8 0%, #4285f4 100%)'
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={5}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-4 p-md-5 rounded-4 shadow-lg"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
              }}
            >
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-4"
              >
                <h2 className="fw-bold mb-2" style={{ color: '#1a73e8' }}>Create Account</h2>
                <p className="text-muted">Please fill in your details</p>
              </motion.div>

              {error && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <Alert variant="danger" className="mb-4">
                    {error}
                  </Alert>
                </motion.div>
              )}

              <Form onSubmit={handleRegister}>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="rounded-3 border-0"
                      style={{ 
                        backgroundColor: '#f8f9fa',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)'
                      }}
                    />
                  </Form.Group>
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="rounded-3 border-0"
                      style={{ 
                        backgroundColor: '#f8f9fa',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)'
                      }}
                    />
                  </Form.Group>
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Form.Group className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="rounded-3 border-0"
                      style={{ 
                        backgroundColor: '#f8f9fa',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)'
                      }}
                    />
                  </Form.Group>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="d-grid">
                    <Button 
                      variant="primary" 
                      type="submit"
                      size="lg"
                      className="mb-3 rounded-3"
                      style={{
                        background: 'linear-gradient(to right, #1a73e8, #4285f4)',
                        border: 'none',
                        boxShadow: '0 4px 15px rgba(26, 115, 232, 0.3)'
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      as={motion.button}
                    >
                      Sign up
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-center"
                >
                  <Link to="/login" className="text-decoration-none" style={{ color: '#1a73e8' }}>
                    Already have an account? <span className="fw-bold">Sign in</span>
                  </Link>
                </motion.div>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Register; 