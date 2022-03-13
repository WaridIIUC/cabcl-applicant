import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddApplicant = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
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

            isDeleted: false
        }
        const url = `http://localhost:5000/addApplicant`;
        fetch(url, {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(applicantData)
          })
          .then(res => console.log('server side response', res))
    }

    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "bae3b1a9b24ff4f781b345ab2cae65fc");
        imageData.append("image", event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <h1>Application form</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Applicant Name </label>
            <input {...register("name", { required: true })} /> 
            {errors.name && <span>This field is required</span>}<br />

            <label htmlFor="fatherName">Father Name </label>
            <input {...register("fatherName", { required: true })} />
            {errors.fatherName && <span>This field is required</span>}<br />

            <label htmlFor="motherName">Mother Name </label>
            <input {...register("motherName", { required: true })} />
            {errors.motherName && <span>This field is required</span>}<br />

            <label htmlFor="gender">Gender </label>
            <input {...register("gender", { required: true })} />
            {errors.gender && <span>This field is required</span>}<br />

            <label htmlFor="dateOfBirth">Date Of Birth </label>
            <input {...register("dateOfBirth", { required: true })} />
            {errors.dateOfBirth && <span>This field is required</span>}<br />

            <label htmlFor="mobile">Mobile </label>
            <input {...register("mobile", { required: true })} />
            {errors.mobile && <span>This field is required</span>}<br />

            <label htmlFor="file">Applicant Image </label>
            <input type = "file" {...register("imageUpload", { required: true })} onChange = {handleImageUpload}/>
            {errors.imageUpload && <span>This field is required</span>}<br />

            <label htmlFor="presentAddress">Present Address </label>
            <input {...register("presentAddress", { required: true })} />
            {errors.presentAddress && <span>This field is required</span>}<br />
            
            <label htmlFor="area">Area </label>
            <input {...register("area", { required: true })} />
            {errors.area && <span>This field is required</span>}<br />

            <label htmlFor="postOffice">Post Office </label>
            <input {...register("postOffice", { required: true })} />
            {errors.postOffice && <span>This field is required</span>}<br />

            <label htmlFor="pS">Thana </label>
            <input {...register("pS", { required: true })} />
            {errors.pS && <span>This field is required</span>}<br />

            <label htmlFor="district">District </label>
            <input {...register("district", { required: true })} />
            {errors.district && <span>This field is required</span>}<br />

            <label htmlFor="permanentAddress">Permanent Address </label>
            <input {...register("permanentAddress", { required: true })} />
            {errors.permanentAddress && <span>This field is required</span>}<br />

            <label htmlFor="pArea">Area </label>
            <input {...register("pArea", { required: true })} />
            {errors.pArea && <span>This field is required</span>}<br />

            <label htmlFor="pPostOffice">Post Office </label>
            <input {...register("pPostOffice", { required: true })} />
            {errors.pPostOffice && <span>This field is required</span>}<br />

            <label htmlFor="pPS">Thana </label>
            <input {...register("pPS", { required: true })} />
            {errors.pPS && <span>This field is required</span>}<br />

            <label htmlFor="pDistrict">District </label>
            <input {...register("pDistrict", { required: true })} />
            {errors.pDistrict && <span>This field is required</span>}<br />

        
            <label htmlFor="university">University </label>
            <input {...register("university", { required: true })} />
            {errors.university && <span>This field is required</span>}<br />

            <label htmlFor="subject">Subject </label>
            <input {...register("subject", { required: true })} />
            {errors.subject && <span>This field is required</span>}<br />

            <label htmlFor="degree">Degree </label>
            <input {...register("degree", { required: true })} />
            {errors.degree && <span>This field is required</span>}<br />


            <label htmlFor="experiences">Experiences </label>
            <input {...register("experiences", { required: true })} />
            {errors.experiences && <span>This field is required</span>}<br />


            <label htmlFor="communicationSkill">Communication Skill </label>
            <input {...register("communicationSkill", { required: true })} />
            {errors.communicationSkill && <span>This field is required</span>}<br />

            <label htmlFor="computerSkill">Computer Skill </label>
            <input {...register("computerSkill", { required: true })} />
            {errors.computerSkill && <span>This field is required</span>}<br />


            {/* <input {...register("createTime", { required: true })} />
            {errors.createTime && <span>This field is required</span>}

            <input {...register("updateTime", { required: true })} />
            {errors.updateTime && <span>This field is required</span>} */}

        

            <input type="submit" />
            </form>
        </div>
    );
};

export default AddApplicant;