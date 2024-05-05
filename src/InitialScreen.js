import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logins.css';

function InitialScreen() {
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    navigate('/login');
  };

  return (
    <div className="initial-container">
      <div className="logo">
        {/* Replace with your actual logo path */}
        <img src="orderker.jpeg" alt="OrderKar Logo" />
      </div>
      <button onClick={handleGuestLogin} className="guest-login-button">
          LOGIN
      </button>
    </div>
  );
}

export default InitialScreen;
