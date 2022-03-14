import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { useForm } from 'react-hook-form';


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

        const onSubmit = data => {
            console.log(data);
            const adminData = {
                email: data.email,
                password: data.password,
            }

            console.log("admin", adminData);

        const url = `http://localhost:5000/adminLogin`;
        fetch(url, {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
          })
          .then(res => res.json())
            .then(data => {
                console.log("admin db", data)
                if(data != ""){
                    localStorage.setItem("cabcl-admin", JSON.stringify(data));
                    setLoggedInUser(data);
                    history.push(from);
                }

                else{
                    console.log("password invalid", data.length);
                    
                    console.log(document.querySelector('#errorMessage'));
                    document.querySelector('#errorMessage').classList.remove('invisible');

                    console.log(document.querySelector('#errorMessage'));
                }
                
            })

        // console.log("hello");
        // var user = {email: "warid.cse.iiuc@gmail.com", name: "warid"};
        // setLoggedInUser(user);
        // console.log("from", from);
        // console.log(loggedInUser);
        // history.replace(from);

    
        
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="email">Email </label>
            <input {...register("email", { required: true })} /> 
            {errors.email && <span>This field is required</span>}<br />

            <label htmlFor="password">Password </label>
            <input {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}<br />

            <input type="submit" />

            <p id = "errorMessage" className="invisible">Email or Password is incorrect</p>
            </form>
        </div>
    );
};

export default Login;