import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const API_URL = 'http://localhost:5000/Details';

const LogPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const user = users.find(user => user.email === email && user.password === password && user.phone === phone);
        if (user) {
            setError('');
            alert('Login successful!');
        } else {
            setError('Invalid credentials. Please try again.');
        }
    };

    return(
        <>
            <h1>Login Page</h1>
            <form className="check-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Email</label>
                    <input 
                        type="email"
                        placeholder="Email" 
                        value={email}
                        required 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div><br /><br />
                <div className="form-control">
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div><br /><br />
                <div className="form-control">
                    <label>Phone Number</label>
                    <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        value={phone} 
                        required
                        onChange={(e) => setPhone(e.target.value)} 
                    />
                </div>
                {error && <p style={{color: 'red'}}>{error}</p>}
                <input type="submit" value='Login' className="Logbtn"/> <br /><br />  
            </form>
            <Link to='/Register/Credentials'>Don't Have an Account?</Link>
            <Link to='/'>Main Menu</Link>
        </>
    )
}

export default LogPage;
