import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddApplicant = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const applicantData = {
      name: data.name,
      fatherName: data.fatherName,
      motherName: data.motherName,
      gender: data.gender,
      dateOfBirth: data.dateOfBirth,
      mobile: data.mobile,
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
      communicationSkill: Boolean(data.communicationSkill),
      computerSkill: Boolean(data.computerSkill),

      createTime: new Date().toLocaleString() + "",
      updateTime: new Date().toLocaleString() + "",

      isDeleted: false,
    };
    const url = `http://localhost:5000/addApplicant`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicantData),
    }).then((res) => console.log("server side response", res));
  };

  const [imageURL, setImageURL] = useState(null);

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "bae3b1a9b24ff4f781b345ab2cae65fc");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1 className="text-center mb-3">Application form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset class="border p-4 mb-4">
          <legend class="w-auto">
            <h3>Personal Information</h3>
          </legend>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Applicant Name </label>
              <input
                className="form-control"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="fatherName">Father Name </label>
              <input
                className="form-control"
                {...register("fatherName", { required: true })}
              />
              {errors.fatherName && <span>This field is required</span>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="motherName">Mother Name </label>
              <input
                className="form-control"
                {...register("motherName", { required: true })}
              />
              {errors.motherName && <span>This field is required</span>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="gender">Gender </label>
              <input
                className="form-control"
                {...register("gender", { required: true })}
              />
              {errors.gender && <span>This field is required</span>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="dateOfBirth">Date Of Birth </label>
              <input
                className="form-control"
                {...register("dateOfBirth", { required: true })}
              />
              {errors.dateOfBirth && <span>This field is required</span>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="mobile">Mobile </label>
              <input
                className="form-control"
                {...register("mobile", { required: true })}
              />
              {errors.mobile && <span>This field is required</span>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="file">Applicant Image </label>
              <input
                className="form-control"
                type="file"
                {...register("imageUpload", { required: true })}
                onChange={handleImageUpload}
              />
              {errors.imageUpload && <span>This field is required</span>}
            </div>
          </div>
        </fieldset>

        <fieldset class="border p-4 mb-4">
          <legend class="w-auto">
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
                  {errors.presentAddress && <span>This field is required</span>}
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="area">Area </label>
                  <input
                    className="form-control"
                    {...register("area", { required: true })}
                  />
                  {errors.area && <span>This field is required</span>}
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="postOffice">Post Office </label>
                  <input
                    className="form-control"
                    {...register("postOffice", { required: true })}
                  />
                  {errors.postOffice && <span>This field is required</span>}
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="pS">Thana </label>
                  <input
                    className="form-control"
                    {...register("pS", { required: true })}
                  />
                  {errors.pS && <span>This field is required</span>}
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="district">District </label>
                  <input
                    className="form-control"
                    {...register("district", { required: true })}
                  />
                  {errors.district && <span>This field is required</span>}
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
                    <span>This field is required</span>
                  )}
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="pArea">Area </label>
                  <input
                    className="form-control"
                    {...register("pArea", { required: true })}
                  />
                  {errors.pArea && <span>This field is required</span>}
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="pPostOffice">Post Office </label>
                  <input
                    className="form-control"
                    {...register("pPostOffice", { required: true })}
                  />
                  {errors.pPostOffice && <span>This field is required</span>}
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="pPS">Thana </label>
                  <input
                    className="form-control"
                    {...register("pPS", { required: true })}
                  />
                  {errors.pPS && <span>This field is required</span>}
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="pDistrict">District </label>
                  <input
                    className="form-control"
                    {...register("pDistrict", { required: true })}
                  />
                  {errors.pDistrict && <span>This field is required</span>}
                </div>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset class="border p-4 mb-4">
          <legend class="w-auto">
            <h3>Educational Information</h3>
          </legend>
          <div className="row">
            <div className="form-group col-md-12">
              <label htmlFor="university">University </label>
              <input
                className="form-control"
                {...register("university", { required: true })}
              />
              {errors.university && <span>This field is required</span>}
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="subject">Subject </label>
              <input
                className="form-control"
                {...register("subject", { required: true })}
              />
              {errors.subject && <span>This field is required</span>}
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="degree">Degree </label>
              <input
                className="form-control"
                {...register("degree", { required: true })}
              />
              {errors.degree && <span>This field is required</span>}
            </div>
          </div>
        </fieldset>

        <fieldset class="border p-4 mb-4">
          <legend class="w-auto">
            <h3>Experiences</h3>
          </legend>
          <div className="row">
            <div className="form-group col-md-12">
              <label htmlFor="experiences">Experiences </label>
              <input className="form-control" {...register("experiences", { required: true })} />
              {errors.experiences && <span>This field is required</span>}
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="communicationSkill">Communication Skill </label>
              <input className="form-control" {...register("communicationSkill", { required: true })} />
              {errors.communicationSkill && <span>This field is required</span>}
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="computerSkill">Computer Skill </label>
              <input className="form-control" {...register("computerSkill", { required: true })} />
              {errors.computerSkill && <span>This field is required</span>}
            </div>
          </div>
        </fieldset>
        {/* <input {...register("createTime", { required: true })} />
            {errors.createTime && <span>This field is required</span>}

            <input {...register("updateTime", { required: true })} />
            {errors.updateTime && <span>This field is required</span>} */}

        <input className="btn btn-info mb-5" type="submit" />
      </form>
    </div>
  );
};

export default AddApplicant;
