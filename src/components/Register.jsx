import React, { useState} from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Personal_details from './Personal_details';
import RegPage from './Credentials';
import Business_details from './Business_details';

const Register = () => {
    const navigate = useNavigate();

    const next = () => {
        navigate('/');
    };
    // const Combine = () => {
    //   const [details, setDetails] = useState([])

    //   const addDetails = async (detail) => {
    //     const res = await fetch('http://localhost:5000/Details', {
    //       method:'POST',
    //       headers: {
    //         'Content-type': 'applocation/json',
    //       },
    //       body: JSON.stringify(detail),
    //     })
    
    //     const data = await res.json()
    
    //     setDetails([...details, data])
    
    //   }
    //     DetailsAdd({regAdd, personalAdd, businessAdd})
        
        
        
        
    //     next();
        
    // }

  return (
    <>
    <h1>Register Complete</h1>

    <button >Main Menu</button>
    </>
  )
}

export default Register