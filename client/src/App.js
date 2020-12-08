import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import $ from "jquery";
import BookAppointment from "./Components/pages/BookAppointment";
import Home from "./Components/pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/BookAppointment">
          <BookAppointment />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
