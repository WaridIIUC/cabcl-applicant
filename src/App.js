import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddApplicant from './components/Applicant/AddApplicant';
import Applicants from './components/Applicant/Applicants';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
export const UserContext = createContext();



function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
    <div>
      <ul>
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
      <hr />
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
