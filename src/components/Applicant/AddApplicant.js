import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import successpic from'./successful.png';

const AddApplicant = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [successMessage, setSuccessMessage] = useState(false);
  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // console.log("Date", startDate);

  const onSubmit = (data) => {
    // console.log(data);
    document.querySelector("#loadingMessage").classList.remove("invisible");
    const applicantData = {
      designation: "MARKETING MANAGER",
      name: data.name,
      fatherName: data.fatherName,
      motherName: data.motherName,
      gender: data.gender,
      dateOfBirth: startDate,
      mobile: data.mobile,
      email: data.email,
      facebook: data.facebook,
      imageURL: imageURL,

      presentAddress: data.presentAddress,
      area: data.area,
      postOffice: data.postOffice,
      pS: data.pS,
      district: data.district,

      permanentAddress: data.permanentAddress,
      pArea: data.pArea,
      pPostOffice: data.pPostOffice,
      pPS: data.pPS,
      pDistrict: data.pDistrict,

      university: data.university,
      subject: data.subject,
      degree: data.degree,

      experiences: data.experiences,
      communicationSkill: data.communicationSkill,
      computerSkill: data.computerSkill,

      rfPName: data.rfPName,
      rfPAddress: data.rfPAddress,
      rfPDesignation: data.rfPDesignation,
      rfPMobile: data.rfPMobile,
      rfPEmail: data.rfPEmail,


      rfP2Name: data.rfP2Name,
      rfP2Address: data.rfP2Address,
      rfP2Designation: data.rfP2Designation,
      rfP2Mobile: data.rfP2Mobile,
      rfP2Email: data.rfP2Email,
      


      createTime: new Date().toLocaleString() + "",
      updateTime: new Date().toLocaleString() + "",

      isDeleted: false,
    };
    const url = `https://radiant-garden-87142.herokuapp.com/addApplicant`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicantData),
    }).then((res) => {
    
      document.querySelector("#loadingMessage").classList.add("invisible");

      setSuccessMessage(true);
      
      // console.log("server side response", res)
    });
  };

  const [imageURL, setImageURL] = useState(null);

  const handleImageUpload = (event) => {
    // console.log(event.target.files[0]);

    // Object.defineProperty(event.target.files[0], 'filename', {
    //   writable: true,
    //   value: "warid.png"
    // });

    // console.log("new file", event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "bae3b1a9b24ff4f781b345ab2cae65fc");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
        // console.log("image response", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      {successMessage &&
      <div className="d-flex justify-content-center" >
        <img className="img-fluid" src={successpic} alt="successful submission" />
      </div>
      }
      
    <h6 className="text-center text-info">If you face any problem on application, please call us on our contact number. <a href="https://cabcl-bd.com/contact">Contact Detail</a></h6>
    {!successMessage &&
    <div className="container" style={{ background: "#d2f7e6" }}>
      <h1 className="text-center m-3 pt-5">Application form</h1>
      <h6 className="text-center"><u>Designation: MARKETING MANAGER</u></h6>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="border p-4 mb-4">
          <legend className="w-auto">
            <h3>Personal Information</h3>
          </legend>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Applicant Name </label>
              <input
                className="form-control"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="fatherName">Father Name </label>
              <input
                className="form-control"
                {...register("fatherName", { required: true })}
              />
              {errors.fatherName && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="motherName">Mother Name </label>
              <input
                className="form-control"
                {...register("motherName", { required: true })}
              />
              {errors.motherName && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="gender">Gender </label>
              {/* <input
                className="form-control"
                {...register("gender", { required: true })}
              /> */}
              <select
                className="form-control"
                name="func"
                {...register("gender", { required: true })}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && <span  className="text-danger">This field is required</span>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="dateOfBirth">Date Of Birth (month/day/year)</label>
              {/* <input
                className="form-control"
                {...register("dateOfBirth", { required: true })}
              />
              {errors.dateOfBirth && <span  className="text-danger">This field is required</span>} */}
              <DatePicker
                className="form-control"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              {errors.dateOfBirth && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="mobile">Mobile </label>
              <input
                className="form-control"
                {...register("mobile", { required: true })}
              />
              {errors.mobile && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="file">Applicant Image </label>
              <input
                className="form-control"
                type="file"
                {...register("imageUpload", { required: true })}
                onChange={handleImageUpload}
              />
              {errors.imageUpload && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Email </label>
              <input
                className="form-control"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="facebook">Facebook Profile Link </label>
              <input
                className="form-control"
                {...register("facebook", { required: true })}
              />
              {errors.facebook && <span className="text-danger">This field is required</span>}
            </div>
            
          </div>
        </fieldset>

        <fieldset className="border p-4 mb-4">
          <legend className="w-auto">
            <h3>Address</h3>
          </legend>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="presentAddress">Present Address </label>
                  <input
                    className="form-control"
                    {...register("presentAddress", { required: true })}
                  />
                  {errors.presentAddress && <span  className="text-danger">This field is required</span>}
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="area">Area </label>
                  <input
                    className="form-control"
                    {...register("area", { required: true })}
                  />
                  {errors.area && <span  className="text-danger">This field is required</span>}
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="postOffice">Post Office </label>
                  <input
                    className="form-control"
                    {...register("postOffice", { required: true })}
                  />
                  {errors.postOffice && <span  className="text-danger">This field is required</span>}
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="pS">Thana </label>
                  <input
                    className="form-control"
                    {...register("pS", { required: true })}
                  />
                  {errors.pS && <span  className="text-danger">This field is required</span>}
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="district">District </label>
                  <input
                    className="form-control"
                    {...register("district", { required: true })}
                  />
                  {errors.district && <span  className="text-danger">This field is required</span>}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="permanentAddress">Permanent Address </label>
                  <input
                    className="form-control"
                    {...register("permanentAddress", { required: true })}
                  />
                  {errors.permanentAddress && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="pArea">Area </label>
                  <input
                    className="form-control"
                    {...register("pArea", { required: true })}
                  />
                  {errors.pArea && <span  className="text-danger">This field is required</span>}
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="pPostOffice">Post Office </label>
                  <input
                    className="form-control"
                    {...register("pPostOffice", { required: true })}
                  />
                  {errors.pPostOffice && <span  className="text-danger">This field is required</span>}
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="pPS">Thana </label>
                  <input
                    className="form-control"
                    {...register("pPS", { required: true })}
                  />
                  {errors.pPS && <span  className="text-danger">This field is required</span>}
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="pDistrict">District </label>
                  <input
                    className="form-control"
                    {...register("pDistrict", { required: true })}
                  />
                  {errors.pDistrict && <span  className="text-danger">This field is required</span>}
                </div>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className="border p-4 mb-4">
          <legend className="w-auto">
            <h3>Educational Information</h3>
          </legend>
          <div className="row">
            <div className="form-group col-md-12">
              <label htmlFor="university">University </label>
              <input
                className="form-control"
                {...register("university", { required: true })}
              />
              {errors.university && <span  className="text-danger">This field is required</span>}
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="subject">Subject </label>
              <input
                className="form-control"
                {...register("subject", { required: true })}
              />
              {errors.subject && <span  className="text-danger">This field is required</span>}
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="degree">Degree </label>
              <input
                className="form-control"
                {...register("degree", { required: true })}
              />
              {errors.degree && <span  className="text-danger">This field is required</span>}
            </div>
          </div>
        </fieldset>

        <fieldset className="border p-4 mb-4">
          <legend className="w-auto">
            <h3>Experiences</h3>
          </legend>
          <div className="row">
            <div className="form-group col-md-12">
              <label htmlFor="experiences">Experiences </label>
              <input
                className="form-control"
                {...register("experiences", { required: true })}
              />
              {errors.experiences && <span  className="text-danger">This field is required</span>}
            </div>
            <div className="form-group col-md-12">
            <label htmlFor="communicationSkill">Do you have good communication skill?</label>
              {/* <input
                className="form-control"
                {...register("gender", { required: true })}
              /> */}
              <select
                className="form-control"
                name="func"
                {...register("communicationSkill", { required: true })}
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {errors.communicationSkill && <span  className="text-danger">This field is required</span>}
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="computerSkill">Do you have adequate computer literacy to work MS Office packages?</label>
                  {/* <input
                    className="form-control"
                    {...register("gender", { required: true })}
                  /> */}
                  <select
                    className="form-control"
                    name="func"
                    {...register("computerSkill", { required: true })}
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {errors.computerSkill && <span  className="text-danger">This field is required</span>}
              </div>
            {/* <div className="form-group col-md-12">
              <label htmlFor="communicationSkill">Communication Skill </label>
              <input className="form-control" {...register("communicationSkill", { required: true })} />
              {errors.communicationSkill && <span  className="text-danger">This field is required</span>}
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="computerSkill">Computer Skill </label>
              <input className="form-control" {...register("computerSkill", { required: true })} />
              {errors.computerSkill && <span  className="text-danger">This field is required</span>}
            </div> */}
          </div>
        </fieldset>



        <fieldset className="border p-4 mb-4">
          <legend className="w-auto">
            <h3>References <span className="h6">(You must give 2 person references here)</span></h3>
          </legend>
          <p className="text-primary">Person 1 Information</p>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="rfPName">Person Name </label>
              <input
                className="form-control"
                {...register("rfPName", { required: true })}
              />
              {errors.rfPName && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="rfPAddress">Address </label>
              <input
                className="form-control"
                {...register("rfPAddress", { required: true })}
              />
              {errors.rfPAddress && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="rfPDesignation">Designation & Organization Name</label>
              <input
                className="form-control"
                {...register("rfPDesignation", { required: true })}
              />
              {errors.rfPDesignation && <span className="text-danger">This field is required</span>}
            </div>
            
            <div className="form-group col-md-6">
              <label htmlFor="rfPMobile">Mobile </label>
              <input
                className="form-control"
                {...register("rfPMobile", { required: true })}
              />
              {errors.rfPMobile && <span className="text-danger">This field is required</span>}
            </div>
    
            <div className="form-group col-md-6">
              <label htmlFor="rfPEmail">Email </label>
              <input
                className="form-control"
                {...register("rfPEmail", { required: true })}
              />
              {errors.rfPEmail && <span className="text-danger">This field is required</span>}
            </div>
            
          </div>

          <div>
            <p className="text-primary">Person 2 Information</p>
          </div>

          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="rfP2Name">Person Name </label>
              <input
                className="form-control"
                {...register("rfP2Name", { required: true })}
              />
              {errors.rfP2Name && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="rfP2Address">Address </label>
              <input
                className="form-control"
                {...register("rfP2Address", { required: true })}
              />
              {errors.rfP2Address && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="rfP2Designation">Designation & Organization Name</label>
              <input
                className="form-control"
                {...register("rfP2Designation", { required: true })}
              />
              {errors.rfP2Designation && <span className="text-danger">This field is required</span>}
            </div>
            
            <div className="form-group col-md-6">
              <label htmlFor="rfP2Mobile">Mobile </label>
              <input
                className="form-control"
                {...register("rfP2Mobile", { required: true })}
              />
              {errors.rfP2Mobile && <span className="text-danger">This field is required</span>}
            </div>
    
            <div className="form-group col-md-6">
              <label htmlFor="rfP2Email">Email </label>
              <input
                className="form-control"
                {...register("rfP2Email", { required: true })}
              />
              {errors.rfP2Email && <span className="text-danger">This field is required</span>}
            </div>
            
          </div>
        </fieldset>
        
        <p id="loadingMessage" className="invisible text-success">
          Your application is processing. Please Wait...
        </p>
        {/* <input {...register("createTime", { required: true })} />
            {errors.createTime && <span  className="text-danger">This field is required</span>}

            <input {...register("updateTime", { required: true })} />
            {errors.updateTime && <span  className="text-danger">This field is required</span>} */}

        <input className="btn btn-info mb-5" type="submit" />
      </form>
      <p id="loadingMessage" className="invisible text-success">
          Your application is processing. Please Wait...
        </p>
    </div>
}
    </div>
  );
};

export default AddApplicant;
