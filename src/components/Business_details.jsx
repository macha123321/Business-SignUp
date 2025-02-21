import React, { useState } from 'react'; 
import { Link, useLocation, useNavigate } from 'react-router-dom'; 

const Business_details = () => { 
    
    const [btype, setBtype] = useState(''); 
    const [bname, setBname] = useState(''); 
    const [regNum, setRegNum] = useState(''); 
    const [about, setAbout] = useState(''); 
    const [treatment, setTreatment] = useState(''); 
    const [based, setBased] = useState(''); 
    const [address, setAddress] = useState(''); 
    const [postCode, setPostCode] = useState(''); 
    const [ID, setID] = useState(''); 
    const [certificate, setCertificate] = useState(''); 
    const [registered, setSelectedCheckbox] = useState(null); 
    const navigate = useNavigate(); const location = useLocation(); 
    const { id } = location.state; 
    
    const handleCheckboxChange = (event) => { 
        setSelectedCheckbox(event.target.value); 
    }; 
    
    const onSubmit = async (e) => { 
        e.preventDefault(); 
        const business = { btype, registered, bname, regNum, about, treatment, based, address, postCode, ID, certificate }; 
        
        const res = await fetch(`http://localhost:5000/Details/${id}`); 
        const data = await res.json(); const updatedData = { ...data, ...business }; 
        
        await fetch(`http://localhost:5000/Details/${id}`, 
            { method: 'PUT', headers: { 'Content-type': 'application/json' }, 
            body: JSON.stringify(updatedData) }); 
            
            navigate('/Register');
  };

  return (
    <>
      <h1>Business Details</h1>
      <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
            <label>*What type of Business do you proposed?</label>
            <input 
                type="text"
                placeholder="Description" 
                value={btype}
                required 
                onChange={(e) => setBtype(e.target.value)}
            />
        </div><br /><br />
        <div className="form-control">
                    <label>*Is your Business Registered?</label>
                    <label>
                        <input
                        type="checkbox"
                        value="Yes"
                        checked={registered === 'Yes'}
                        onChange={handleCheckboxChange}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        value="No"
                        checked={registered === 'No'}
                        onChange={handleCheckboxChange}
                        />
                        No
                    </label>
        </div><br /><br />
        <div className="form-control">
            <label>*Business Name</label>
            <input 
                type="text"
                placeholder="Business Name" 
                value={bname}
                required 
                onChange={(e) => setBname(e.target.value)}
            />
        </div><br /><br />
        <div className="form-control">
            <label>*Business Registration Number</label>
            <input 
                type="text"
                placeholder="e.g. AB12345678" 
                value={regNum}
                required 
                onChange={(e) => setRegNum(e.target.value)}
            />
        </div><br /><br />
        <div className="form-control">
            <label>*About Your Business</label>
            <input 
                type="text"
                placeholder="Description" 
                value={about}
                required 
                onChange={(e) => setAbout(e.target.value)}
            />
        </div><br /><br />
        <div className="form-control">
            <label>*What's type of treatment(s) do you propose?</label>
            <input 
                type="text"
                placeholder="Treatments" 
                value={treatment}
                required 
                onChange={(e) => setTreatment(e.target.value)}
            />
        </div><br /><br />
        <div className="form-control">
            <label>*Where are you based?</label>
            <input 
                type="text"
                placeholder="City" 
                value={based}
                required 
                onChange={(e) => setBased(e.target.value)}
            />
        </div><br /><br />
        <div className="form-control">
            <label>Business Address</label>
            <input 
                type="text"
                placeholder="Address" 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
        </div><br /><br />
        <div className="form-control">
            <label>Post Code</label>
            <input 
                type="text"
                placeholder="Post Code" 
                value={postCode}
                onChange={(e) => setPostCode(e.target.value)}
            />
        </div><br /><br />
        <div className="form-control">
            <label>Upload your ID / Proof of Address</label>
            <input type="file" value={ID} onChange={(e) => setID(e.target.value)} multiple/>
        </div><br /><br />
        <div className="form-control">
            <label>Upload any Beauty Certificate</label>
            <input type="file" value={certificate} onChange={(e) => setCertificate(e.target.value)} multiple/>
        </div><br /><br />
        <div className="form-control-check">
                    <label>I've read and accepted the<Link to='/Terms&Conditions'>Terms & Conditions</Link></label>
                        <input
                        type="checkbox"
                        required
                        />
                        <br /><br />
                    <label>I would like to receive email on all the latest news, promos and updates from Businesses.</label>
                        <input
                        type="checkbox"
                        required
                        />
                        
        </div><br /><br />
        <input type="submit" value="Join us As Partner" className="regBtn"/>
      </form>
      <Link to='/Register/Personal'>Go Back</Link>
      <Link to='/Login'>Already Have an Account?</Link>
      <Link to='/'>Main Menu</Link>
    </>
  );
};

export default Business_details;

