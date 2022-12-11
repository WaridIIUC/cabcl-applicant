import React, { useEffect, useState } from 'react';
import Applicant from '../Applicant/Applicant';
const Applicants = () => {

    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        fetch("https://radiant-garden-87142.herokuapp.com/applicants")
        .then(res => res.json())
        .then(data => {
            setApplicants(data);
            document.querySelector("#loadingMessage").classList.add("invisible");

        })
    }, [])
    
    // console.log(applicants);

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
            <h6 className='text-center'>Total Applicants: {applicants.length}</h6>
            <p id="loadingMessage" className="text-success text-center">
                Please Wait...
            </p>
            <div className="row m-2 d-flex justify-content-center">
            {
                applicants.map(applicant => <Applicant applicant = {applicant} key = {applicant._id}></Applicant>)
            }
        </div>
        </div>
    );
};

export default Applicants;