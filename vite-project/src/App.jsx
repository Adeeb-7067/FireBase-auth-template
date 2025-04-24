import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import { Box } from '@mui/material';

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
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            padding: 2,
          }}
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Box sx={{ p: 3 }}>
                    <h1>Welcome to the Dashboard</h1>
                  </Box>
                </PrivateRoute>
              }
            />
          </Routes>
        </Box>
      </Router>
    </AuthProvider>
  );
};

export default App;
