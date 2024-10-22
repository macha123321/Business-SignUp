import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import RegPage from './components/Credentials';
import LogPage from './components/Login';
import Main from './components/Main';
import Personal_details from './components/Personal_details';
import Business_details from './components/Business_details';
import Register from './components/Register';

function App() {
  



  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route exact path="/Login" element={<LogPage />} />
          <Route exact path='/Register' element={<Register />} />
          <Route exact path="/Register/Credentials" element={<RegPage />} />
          <Route exact path="/Register/Personal" element={<Personal_details />} />
          <Route exact path='/Register/Business' element={<Business_details />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
