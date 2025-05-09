import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import { Box } from '@mui/material';
import LandingPage from './components/landingPage';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Box
          sx={{
            minHeight: '100vh',
            padding: 0,
          }}
        >
          <Routes>
            {/* Default route shows login page */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/landing" element={
              <PrivateRoute>
                <LandingPage />
              </PrivateRoute>
            } />
          </Routes>
        </Box>
      </Router>
    </AuthProvider>
  );
};

export default App;
