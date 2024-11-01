import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Admin_dashboard = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch('http://localhost:5000/Details');
      const data = await res.json();
      setDetails(data);
    };

    fetchDetails();

  }, []);

  return ( 
  <> 
  <h1>Administrator Dashboard</h1> 
  <div className="admin-container"> 
    {details.map((detail, index) => { 
      let gen; 
      if (detail.gender === 'Male') { 
        gen = 'Mr'; 
      } else if (detail.gender === 'Female') { 
        gen = 'Ms';
      } else { 
        gen = 'Mx'; 
      } 
      
      return ( 
      <div key={index} className="admin-box">
        <h2>{detail.bname || 'Business Name Not Provided'}</h2> 
        <p>Owner: {gen}. {detail.fname || 'First Name Not Provided'} {detail.lname || 'Last Name Not Provided'}</p> 
        <p>Type: {detail.btype || 'Business Type Not Provided'}</p> 
        <p>About: {detail.about || 'About Not Provided'}</p> 
        <p>Location: {detail.based || 'Location Not Provided'}</p> 
        <FaTimes style={{ color: 'red', cursor: 'pointer' }} /> 
      </div> 
      ); 
      })}
      </div>
      <Link to='/'>Main Menu</Link>
    </>
  );
};

export default Admin_dashboard;
