import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login attempt with email:', email);
    
    try {
      console.log('Attempting to sign in...');
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful:', userCredential.user);
      console.log('User ID:', userCredential.user.uid);
      console.log('Email verified:', userCredential.user.emailVerified);
      // Navigate to landing page after successful login
      navigate('/landing');
    } catch (error) {
      console.error('Login error:', {
        code: error.code,
        message: error.message,
        fullError: error
      });

      // More user-friendly error messages
      switch (error.code) {
        case 'auth/invalid-email':
          setError('Invalid email address format');
          break;
        case 'auth/user-disabled':
          setError('This account has been disabled');
          break;
        case 'auth/user-not-found':
          setError('No account found with this email');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password');
          break;
        case 'auth/too-many-requests':
          setError('Too many failed attempts. Please try again later');
          break;
        default:
          setError(error.message);
      }
    }
  };

  // Log when component mounts
  React.useEffect(() => {
    console.log('Login component mounted');
    return () => console.log('Login component unmounted');
  }, []);

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
                <h2 className="fw-bold mb-2" style={{ color: '#1a73e8' }}>Welcome Back</h2>
                <p className="text-muted">Please sign in to your account</p>
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

              <Form onSubmit={handleLogin}>
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
                      onChange={(e) => {
                        setEmail(e.target.value);
                        console.log('Email input changed:', e.target.value);
                      }}
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
                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        console.log('Password input changed');
                      }}
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
                  transition={{ delay: 0.5 }}
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
                      Sign in
                      <Home className="ms-2" size={20} />
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-center"
                >
                  <Link to="/register" className="text-decoration-none" style={{ color: '#1a73e8' }}>
                    Don't have an account? <span className="fw-bold">Sign up</span>
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

export default Login; 