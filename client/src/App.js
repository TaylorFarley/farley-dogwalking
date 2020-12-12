import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import $ from "jquery";
import BookAppointment from "./Components/pages/BookAppointment";
import Home from "./Components/pages/Home";
import Nav from './Components/Nav'
import UserContext from "./context/UserContext";
function App() {
  const [userData, setUserData] = useState ({
    email: null,
    googleId: null,
    username: null,
    _id:  null,
    address: null,
    phone: null
  })
  return (
  
    <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
   <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/BookAppointment">
          <BookAppointment />
        </Route>
      </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
