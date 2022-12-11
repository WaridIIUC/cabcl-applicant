import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [stringForServerSideResponse, setStringForServerSideResponse] = useState("mU%pvGSS'vC7#:s*687uI^6Oysk'TO");


  const onSubmit = (data) => {
    document.querySelector("#loadingMessage").classList.remove("invisible");
    // console.log(data);
    const adminData = {
      email: data.email,
      password: data.password,
    };

    const newAdminDataForLocalStorage = {
      _id:"",
      name:"",
      email:"",
      passwordAdmin:"",
      rowE2AuJ9mblCs6W37DWfuW4bf9zAd: "",
    }

    // console.log("admin", adminData);

    const url = `https://radiant-garden-87142.herokuapp.com/adminLogin`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adminData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("admin db", data);
        if (data != "") {
          newAdminDataForLocalStorage._id = data._id;
          newAdminDataForLocalStorage.email = data.email;
          newAdminDataForLocalStorage.name = data.name;
          newAdminDataForLocalStorage.password = data.passwordAdmin;
          newAdminDataForLocalStorage.rowE2AuJ9mblCs6W37DWfuW4bf9zAd = stringForServerSideResponse;
          localStorage.setItem("cabcl-admin", JSON.stringify(newAdminDataForLocalStorage));
          setLoggedInUser(data);
          history.push(from);
        } else {
          // console.log("password invalid", data.length);

          // console.log(document.querySelector("#errorMessage"));
          document.querySelector("#errorMessage").classList.remove("invisible");
          document.querySelector("#loadingMessage").classList.add("invisible");
          // console.log(document.querySelector("#errorMessage"));
        }
      });

    // console.log("hello");
    // var user = {email: "warid.cse.iiuc@gmail.com", name: "warid"};
    // setLoggedInUser(user);
    // console.log("from", from);
    // console.log(loggedInUser);
    // history.replace(from);
  };

  return (
    <div className="container col-md-4">
      <h1 className="text-center m-5">Login</h1>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email </label>
          <input
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-danger">This field is required</span>}
        </div>

        <div className="form-group">
        <label htmlFor="password">Password </label>
        <input type = "password" className="form-control" {...register("password", { required: true })} />
        {errors.password && <span className="text-danger">This field is required</span>}
        </div>
       
        <br />

        <input className="btn btn-warning w-100" type="submit" />

        <p id="errorMessage" className="invisible text-danger">
          Email or Password is incorrect
        </p>

        <p id="loadingMessage" className="invisible text-success">
          Please Wait...
        </p>
      </form>
    </div>
  );
};

export default Login;
