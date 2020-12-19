import React, {useState, useEffect} from "react";
import Axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import $ from "jquery";
import BookAppointment from "./Components/pages/BookAppointment";
import Home from "./Components/pages/Home";
import Nav from './Components/Nav'
import UserContext from "./context/UserContext";
function App() {
  const [userData, setUserData] = useState ({
    email: null,
    password: null,
    verifyPassword: null,
    googleId: null,
    username: null,
    _id:  null,
    address: null,
    phone: null
  })

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:4000/auth/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }        
      )
     if(tokenRes.data.email)
        setUserData({
          email: tokenRes.data.email,        
          username: tokenRes.data.username,
          _id:  tokenRes.data._id,
          address: tokenRes.data.address,
          phone: tokenRes.data.phone
        })
      
    };

    checkLoggedIn();
  }, []);
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
