import { Link } from "react-router-dom"
import { useState } from "react"

const LogPage = ({}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const onSubmit = () => {
    
    }

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
            <input type="submit" value='Login' className="Logbtn"/> <br /><br />  
            </form>
        <Link to='/Register/Credentials'>Don't Have an Account?</Link>
        <Link to='/'>Main Menu</Link>
        </>
    )
}

export default LogPage