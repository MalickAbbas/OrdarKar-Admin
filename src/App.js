import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InitialScreen from './InitialScreen';
import Login from './Login';
import AdminDashboard from './AdminDashboard';
import Dashboard from './AdminDashboardDone';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
