import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Admin_dashboard = () => {
  
  
  return (
    <>
    <h1>Administrator Dashboard</h1>
    <div className="admin-container">
      <div className="admin-box">
        <h2>Cosonas</h2>
        <p>Owner: Mr Nasir Rashid</p>
        <p>Type: IT</p>
        <p>About: its a computer company</p>
        <p>Location: Somewhere</p>
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
        />
      </div>
      <div className="admin-box">
        <h2>Google</h2>
        <p>Owner: Mr Isa Javad</p>
        <p>Type: IT</p>
        <p>About: its a special company</p>
        <p>Location: Somewhere</p>
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
        />
      </div>
      <div className="admin-box">
        <h2>Amazon</h2>
        <p>Owner: Ms Syed Ali</p>
        <p>Type: Multinational technology Company</p>
        <p>About: its a company</p>
        <p>Location: Amazon Rainforest</p>
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
        />
      </div>
    </div>
    <Link to='/'>Main Menu</Link>
    </>
  )
}

export default Admin_dashboard