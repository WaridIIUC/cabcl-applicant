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

    return (
        <div>
            <h1>Applicants</h1>
            <div className="row d-flex justify-content-center">
            {
                applicants.map(applicant => <Applicant applicant = {applicant} key = {applicant._id}></Applicant>)
            }
        </div>
        </div>
    );
};

export default Applicants;