import React from 'react'
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();

    const Log = () => {
        navigate('/Login');
    };

    const Reg = () => {
        navigate('/Register/Credentials');
    };

    const Terms = () => {
      navigate('/Terms&Conditions')
    }

    const Admin = () => {
      navigate('/Admin')
    }


  return (
    <>
    <h1>Main Menu</h1>
    <button onClick={Log}>Login Page</button>
    <br /><br /><br />
    <button onClick={Reg}>Register Page</button>
    <br /><br /><br />
    <button onClick={Admin}>Administrator Dashboard</button>
    <br /><br /><br />
    <button onClick={Terms}>Terms & Conditions</button>
    <br /><br /><br />
    </>
  )
}

export default Main
