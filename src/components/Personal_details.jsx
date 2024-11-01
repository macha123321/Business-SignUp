import React, { useState } from 'react'; 
import { Link, useLocation, useNavigate } from 'react-router-dom'; 

const Personal_details = () => { 
    const [DOB, setDOB] = useState(''); 
    const [fname, setFname] = useState(''); 
    const [lname, setLname] = useState(''); 
    const [gender, setSelectedCheckbox] = useState(null); 
    const navigate = useNavigate(); 
    const location = useLocation(); 
    const { id } = location.state; 
    
    const handleCheckboxChange = (event) => { 
        setSelectedCheckbox(event.target.value); 
    }; 
        
        const onNext = async (e) => { 
            e.preventDefault(); 
            
            const personal = { DOB, fname, lname, gender }; 
            
            const res = await fetch(`http://localhost:5000/Details/${id}`); 
            
            const data = await res.json(); 
            
            const updatedData = { ...data, ...personal }; 
            await fetch(`http://localhost:5000/Details/${id}`, 
                { method: 'PUT', headers: { 'Content-type': 'application/json' }, 
                body: JSON.stringify(updatedData) }); 
                
                navigate('/Register/Business', { state: { id } });
  };

  return (
    <>
      <h1>Personal Details</h1>
      <form className="add-form" onSubmit={onNext}>
      <div className="form-control">
                <label>*First Name</label>
                <input 
                    type="text"
                    placeholder="First Name" 
                    value={fname}
                    required 
                    onChange={(e) => setFname(e.target.value)} 
                />
            </div>
            <div className="form-control"><br /><br />
                <label>*Surname</label>
                <input 
                    type="text" 
                    placeholder="Surname" 
                    value={lname} 
                    required
                    onChange={(e) => setLname(e.target.value)}
                />
                </div>
                <div className="form-control"><br /><br />
                    <label>What's your gender? (optional)</label>
                    <label>
                        <input
                        type="checkbox"
                        value="Male"
                        checked={gender === 'Male'}
                        onChange={handleCheckboxChange}
                        />
                        Male
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        value="Female"
                        checked={gender === 'Female'}
                        onChange={handleCheckboxChange}
                        />
                        Female
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        value="Non-Binary"
                        checked={gender === 'Non-Binary'}
                        onChange={handleCheckboxChange}
                        />
                        Non-Binary
                    </label><br /><br />
                    <label>*Date Of Birth</label>
                    <input type="date" 
                    placeholder="Date of Birth" 
                    value={DOB} 
                    required 
                    onChange={(e) => setDOB(e.target.value)} >
                    </input><br /><br /> 
                </div>
                <input type="submit" value='Next' className="nextbtn"/>
      </form>
      <Link to='/Register/Credentials'>Go Back</Link>
      <Link to='/Login'>Already Have an Account?</Link>
      <Link to='/'>Main Menu</Link>
    </>
  );
};

export default Personal_details;
