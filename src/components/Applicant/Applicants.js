import React, { useEffect, useState } from 'react';
import Applicant from '../Applicant/Applicant';
const Applicants = () => {

    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/applicants")
        .then(res => res.json())
        .then(data => setApplicants(data))
    }, [])
    
    console.log(applicants);

    const handleLogout = event => {
        localStorage.setItem("cabcl-admin", JSON.stringify([]));
        window.location.reload();
    }

    return (
        <div>
            <p className='text-center m-5'>Login User Name: {JSON.parse(localStorage.getItem("cabcl-admin")).name}
                <button className='btn btn-danger ml-3' onClick={handleLogout}>Logout</button>
            </p>
            <h1 className='text-center'>Applicants</h1>
            <div className="row m-2 d-flex justify-content-center">
            {
                applicants.map(applicant => <Applicant applicant = {applicant} key = {applicant._id}></Applicant>)
            }
        </div>
        </div>
    );
};

export default Applicants;