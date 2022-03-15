import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddApplicant from "./components/Applicant/AddApplicant";
import Applicants from "./components/Applicant/Applicants";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { createContext, useState } from "react";
import { useEffect } from "react";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  console.log("1st", loggedInUser);
  useEffect(() => {
    if (localStorage.length > 0) {
      const adminInfo = {
        email: JSON.parse(localStorage.getItem("cabcl-admin")).email,
        name: JSON.parse(localStorage.getItem("cabcl-admin")).name,
        password: JSON.parse(localStorage.getItem("cabcl-admin")).password,
      };

      console.log("local", adminInfo);
      setLoggedInUser(adminInfo);
    }
  }, []);

  console.log("2st", loggedInUser);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              CABCL
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link text-uppercase" to="/">
                    add Applicant
                  </Link>
                </li>
                <li className="nav-item active">
                <Link className="nav-link text-uppercase" to="/applicants">Applicants</Link>
                </li>
                <li className="nav-item">
                <Link style={{padding:"10px 20px"}} className="nav-link btn btn-info" to="/login">Login</Link>
                </li>
                
              </ul>
            </div>
          </nav>
          {/* <ul>
            <li>
              <Link to="/">addApplicant</Link>
            </li>
            <li>
              <Link to="/applicants">Applicants</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <hr /> */}
          <Switch>
            <Route exact path="/">
              <AddApplicant></AddApplicant>
            </Route>
            <PrivateRoute path="/applicants">
              <Applicants></Applicants>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
