import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import Home from './Components/Home/Home';
import Bokking from './Components/Bokking/Bokking';
import UserInformation from './Components/UserInformation/UserInformation';
import Athentication from './Components/Athentication/Athentication/Athentication';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivetRoute path="/booking">
            <Bokking></Bokking>
          </PrivetRoute>
          <Route path="/UserInfo">
            <UserInformation></UserInformation>
          </Route>
          <Route path="/login">
           <Athentication></Athentication>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
