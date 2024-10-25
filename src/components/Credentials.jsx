import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RegPage = ({regAdd}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [again, setAgain] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const next = () => {
        navigate('/Register/Personal');
    };
    

    

    const onNext = (e) => {

        if (password.length < 8) {
            alert ('Password must be atleast 8 characters long')
            return
        }
        
        if (password !== again) {
            alert ('Both Passwords Must Match')
            return
        }
        
        e.preventDefault()
        //regAdd({email, password, phone})
        next();

    }
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
    )

}


export default RegPage;