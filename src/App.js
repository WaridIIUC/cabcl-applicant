import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddApplicant from "./components/Applicant/AddApplicant";
import Applicants from "./components/Applicant/Applicants";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { createContext, useState } from "react";
import { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  const [stringForServerSideResponse, setStringForServerSideResponse] = useState("mU%pvGSS'vC7#:s*687uI^6Oysk'TO");
  const [isLogin, setIsLogin] = useState(false);


  console.log("1st", loggedInUser);
  useEffect(() => {
    // if (localStorage.length > 0) {
    if (localStorage.getItem("cabcl-admin") !== null) {
      if(JSON.parse(localStorage.getItem("cabcl-admin")).rowE2AuJ9mblCs6W37DWfuW4bf9zAd === stringForServerSideResponse){
      const adminInfo = {
        email: JSON.parse(localStorage.getItem("cabcl-admin")).email,
        name: JSON.parse(localStorage.getItem("cabcl-admin")).name,
        password: JSON.parse(localStorage.getItem("cabcl-admin")).password,
      };

      console.log("local", adminInfo);
      setLoggedInUser(adminInfo);
    }
  }
  }, []);

  console.log("2st", loggedInUser);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div>
        <Navbar bg="light" expand="lg">
            {/* <Container> */}
            <Link className="text-primary navbar-brand" to="/">
              Creative AB Corporation Ltd.
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className=" justify-content-end" id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link text-uppercase mb-2" to="/">
                  <span className="p-2 text-primary rounded border border-primary">
                    Home
                  </span>
                </Link>
                {/* <Nav.Link> */}
                <Link className="nav-link text-uppercase" to="/applicants">
                  <span className="p-2 text-success rounded border border-success">
                    Login
                  </span>
                </Link>
                {/* </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
            {/* </Container> */}
          </Navbar>
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
