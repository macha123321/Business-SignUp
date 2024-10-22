import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Personal_details = (personalAdd) => {

    const [DOB, setDOB] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');

    const navigate = useNavigate();

    const next = () => {
        navigate('/Register/Business');
    };


    const [gender, setSelectedCheckbox] = useState(null);
      
    const handleCheckboxChange = (event) => {
        setSelectedCheckbox(event.target.value);
    };

    const onNext = (e) => {
        e.preventDefault()
        let today = new Date ();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        if (day < 10) {
            day = '0' + day;
          }
        if (month < 10) {
            month = '0' + month;
          }

        today = `${year}-${month}-${day}`;
        
        if (today <= DOB) {
            alert ('Please enter a valid Date of Birth')
            return
        }

        let DOBYear = DOB.slice(0,4)
        let DOBMonth = DOB.slice(5,7)
        let DOBDay = DOB.slice(8,10)        
            

        if (DOBYear > (year-18) ) {
                    alert ('You need to be above 18 years old to register')
                    return
        }
        //personalAdd({ fname, lname, gender, DOB})
        next();
    
    }
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
  )
}

export default Personal_details
