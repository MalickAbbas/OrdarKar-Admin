import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaBars, FaTachometerAlt, FaBox, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import './AdminDashboard.css';

function AdminDashboard() {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const navigate = useNavigate();

    const handleLogout = () => {
        // Potentially clear any stored authentication states, tokens, etc.
        navigate('/'); // Adjust the route as necessary to point to the initial screen
    };

    const handledashboard = () => {
        // Potentially clear any stored authentication states, tokens, etc.
        navigate('/dashboard'); // Adjust the route as necessary to point to the initial screen
    };

    const handleproduct = () => {
        // Potentially clear any stored authentication states, tokens, etc.
        //console.log("Products Dashboard")
        navigate('/product')
    };

    const handlereport = () => {
        // Potentially clear any stored authentication states, tokens, etc.
        console.log("Report Dashboard")
    };

    return (
        <div className="admin-dashboard">
            <button className="sidebar-toggle" onClick={() => setSidebarOpen(!isSidebarOpen)}>
                <FaBars />
            </button>
            <div className={`sidebar ${isSidebarOpen ? '' : 'collapsed'}`}>
                <h2 >ORDER KAR</h2>
                <ul className="menu-items">

                    <li onClick={handledashboard}><FaTachometerAlt /> Dashboard</li>
                    <li onClick = {handleproduct}><FaBox /> Product</li>
                    <li onClick = {handlereport}><FaChartBar /> Manage Orders</li>

                </ul>
                <div className="logout-section">
                    <button className="logout-button" onClick={handleLogout}><FaSignOutAlt /> Logout</button>
                </div>
            </div>
            <div className="main-content">
                <h1>Welcome to Order Kar</h1>
                <img src="orderker.jpeg" alt="OrderKar Logo" />
            </div>
        </div>
    );
}

export default AdminDashboard;
