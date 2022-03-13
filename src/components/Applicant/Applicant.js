import React from 'react';

const Applicant = ({applicant}) => {
    return (
        <div className="col-md-4 m-4 border">

                <p>Applicant Name: {applicant.name}</p>
                <p>Father Name: {applicant.fatherName}</p>
                <p>Mother Name: {applicant.motherName}</p>
                <p>Gender: {applicant.gender}</p>
                <p>Date Of Birth: {applicant.dateOfBirth}</p>
                <p>Mobile: {applicant.mobile}</p>

                <p>Present Address: {applicant.presentAddress}</p>
                <p>Area: {applicant.area}</p>
                <p>Post Office: {applicant.postOffice}</p>
                <p>Thana: {applicant.pS}</p>
                <p>District: {applicant.district}</p>

                <p>Permanent Address: {applicant.permanentAddress}</p>
                <p>Area: {applicant.pArea}</p>
                <p>Post Office: {applicant.pPostOffice}</p>
                <p>Thana: {applicant.pPS}</p>
                <p>District: {applicant.pDistrict}</p>
                <p>University: {applicant.university}</p>

                <p>Degree: {applicant.degree}</p>
                <p>Subject: {applicant.subject}</p>
                <p>Experiences: {applicant.experiences}</p>

                <p>Communication Skill: {applicant.communicationSkill.toString()}</p>
                <p>Computer Skill: {applicant.computerSkill.toString()}</p>



                <p>Applied Date & Time: {applicant.createTime}</p>
                {/* <p>Update Time: {applicant.updateTime}</p> */}



                
            {/* <img style={{height: '300px'}} src={require(`../../images/${event.imageURL}`).default} alt="dstgg"/> */}
            <img className="img-fluid" style={{height: '300px'}} src={applicant.imageURL} alt="img"/>
            {/* <h3>{applicant.name} <button onClick = {() => deleteEvent(event._id)}>Delete</button></h3> */}

            
        </div>
    );
};

export default Applicant;