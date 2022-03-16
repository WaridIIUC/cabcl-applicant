import React, { useContext, useState } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [stringForServerSideResponse, setStringForServerSideResponse] = useState("mU%pvGSS'vC7#:s*687uI^6Oysk'TO");

    
    if (localStorage.getItem("cabcl-admin") !== null){
        if(JSON.parse(localStorage.getItem("cabcl-admin")).rowE2AuJ9mblCs6W37DWfuW4bf9zAd === stringForServerSideResponse){
        loggedInUser.email = JSON.parse(localStorage.getItem("cabcl-admin")).email;
        console.log("logged ", loggedInUser.email);
        }
    }
    
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;