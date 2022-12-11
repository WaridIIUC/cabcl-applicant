import React from "react";
import "./Applicant.css";
const Applicant = ({ applicant }) => {
  return (
    <div className="col-md-12 m-4 card">
      <div className="d-flex row border border-primary"  style={{ background: "#d2f7e6" }}>
        <div className="applicants-image-div col-md-4">
          <img
            className="img-fluid border border-success"
            style={{ height: "300px",marginTop:"35px" }}
            src={applicant.imageURL}
            alt="img"
          />
        </div>
        <div className="p-3 card-body col-md-8">
          <fieldset className="border p-4 mb-4">
            <legend className="w-auto">
              <h3>Personal Information</h3>
            </legend>
            <div className="row">
              <p className="col-md-6">Applicant Name: {applicant.name}</p>
              <p className="col-md-6">Father Name: {applicant.fatherName}</p>
              <p className="col-md-6">Mother Name: {applicant.motherName}</p>
              <p className="col-md-6">Gender: {applicant.gender}</p>
              <p className="col-md-6">Date Of Birth: {applicant.dateOfBirth.split('T')[0]}</p>
              <p className="col-md-6">Mobile: {applicant.mobile}</p>
              <p className="col-md-6">Email: {applicant.email}</p>
              <p className="col-md-6">Facebook Profile Link: <a href = {applicant.facebook}>{applicant.facebook}</a></p>
            </div>
          </fieldset>
          <fieldset className="border p-4 mb-4">
            <legend className="w-auto">
              <h3>Present Address</h3>
            </legend>
            <div className="row">
              <p className="col-md-6">
                Present Address: {applicant.presentAddress}
              </p>
              <p className="col-md-6">Area: {applicant.area}</p>
              <p className="col-md-6">Post Office: {applicant.postOffice}</p>
              <p className="col-md-6">Thana: {applicant.pS}</p>
              <p className="col-md-6">District: {applicant.district}</p>
            </div>
          </fieldset>
          <fieldset className="border p-4 mb-4">
            <legend className="w-auto">
              <h3>Permanent Address</h3>
            </legend>
            <div className="row">
              <p className="col-md-6">
                Permanent Address: {applicant.permanentAddress}
              </p>
              <p className="col-md-6">Area: {applicant.pArea}</p>
              <p className="col-md-6">Post Office: {applicant.pPostOffice}</p>
              <p className="col-md-6">Thana: {applicant.pPS}</p>
              <p className="col-md-6">District: {applicant.pDistrict}</p>
            </div>
          </fieldset>
          <fieldset className="border p-4 mb-4">
            <legend className="w-auto">
              <h3>Educational Qualifications</h3>
            </legend>
            <div className="row">
              <p className="col-md-12">University: {applicant.university}</p>
              <p className="col-md-12">Degree: {applicant.degree}</p>
              <p className="col-md-12">Subject: {applicant.subject}</p>
            </div>
          </fieldset>
          <fieldset className="border p-4 mb-4">
            <legend className="w-auto">
              <h3>Experiences</h3>
            </legend>
            <div className="row">
              <p className="col-md-6">Experiences: {applicant.experiences}</p>
              <p className="col-md-6">
                Communication Skill: {applicant.communicationSkill.toString()}
              </p>
              <p className="col-md-6">
                Computer Skill: {applicant.computerSkill.toString()}
              </p>
            </div>
          </fieldset>

          <fieldset className="border p-4 mb-4">
            <legend className="w-auto">
              <h3>References</h3>
            </legend>
            <p className="text-primary">Person 1 Information</p>
            <div className="row">
              <p className="col-md-6">Name: {applicant.rfPName}</p>
              <p className="col-md-6">Address: {applicant.rfPAddress}</p>
              <p className="col-md-6">Designation & Organization: {applicant.rfPDesignation}</p>
              <p className="col-md-6">
                Mobile: {applicant.rfPMobile}
              </p>
            </div>

            <p className="text-primary">Person 2 Information</p>
            <div className="row">
              <p className="col-md-6">Name: {applicant.rfP2Name}</p>
              <p className="col-md-6">Address: {applicant.rfP2Address}</p>
              <p className="col-md-6">Designation & Organization: {applicant.rfP2Designation}</p>
              <p className="col-md-6">
                Mobile: {applicant.rfP2Mobile}
              </p>
            </div>

          </fieldset>
          <p className="col-md-12 text-center text-primary">
            Applied Date & Time: {applicant.createTime}
          </p>
        </div>
      </div>

      {/* <p>Update Time: {applicant.updateTime}</p> */}

      {/* <img style={{height: '300px'}} src={require(`../../images/${event.imageURL}`).default} alt="dstgg"/> */}
      {/* <h3>{applicant.name} <button onClick = {() => deleteEvent(event._id)}>Delete</button></h3> */}
    </div>
  );
};

export default Applicant;
