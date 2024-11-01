import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
  
  const RegPage = () => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [again, setAgain] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
     const onNext = async (e) => {
        e.preventDefault();
         
        if (password.length < 8) {

        alert('Password must be at least 8 characters long');
         
        return; 
    }

        if (password !== again) { 
            alert('Both passwords must match'); 
            return; 
        } 
        const id = uuidv4(); 
        const credentials = { id, email, password, phone }; 
        await fetch('http://localhost:5000/Details',
            { method: 'POST', headers: { 'Content-type': 'application/json' }, 
            body: JSON.stringify(credentials) }); 
            
            navigate('/Register/Personal', { state: { id } });
  };

  return (
    <>
      <h1>Register Page</h1>
      <form className="add-form" onSubmit={onNext}>
      <div className="form-control">
                <label>*Email</label>
                <input 
                    type="email"
                    placeholder="Email" 
                    value={email}
                    required 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className="form-control"><br /><br />
                <label>*Password</label>
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-control"><br /><br />
                <label>*Password Again</label>
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={again}
                    required
                    onChange={(e) => setAgain(e.target.value)} 
                />
            </div>
            <div className="form-control"><br /><br />
                    <label>*Phone Number</label>
                    <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        value={phone} 
                        required
                        onChange={(e) => setPhone(e.target.value)} 
                    />
            </div>
            <input type="submit" value='Next' className="nextbtn"/>  
      </form>
      <Link to='/Login'>Already Have an Account?</Link>
      <Link to='/'>Main Menu</Link>
    </>
  );
};

export default RegPage;
