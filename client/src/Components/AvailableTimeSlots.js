import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import moment from "moment";
import axios from "axios";
import Stripe from "./Stripe";

import UserContext from "../context/UserContext";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 280,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    minWidth: 280,
  },
}));

export default function SimpleSelect(props) {
  const SITE_KEY = "6LchJioaAAAAADlyrXnpBEQZckXkhjS4kGz6rkuC";
  const { userData, setUserData } = useContext(UserContext);
  const [book, setbook] = useState(false);
  const classes = useStyles();
  const [availabletimeslot, setavailabletimeslot] = React.useState("");
  const [response, setResponse] = useState(null);
  let thedate = moment(props.selectedDate).format("YYYY-MM-DD");
  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    }

    // load the script by passing the URL
    loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`, function () {
      console.log("Script loaded!");
    });
  }, []);
  const handleOnClick = e => {
    e.preventDefault();
   
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(token => {
        submitData(token);
      });
    });
  }

  const submitData = token => {
    // call a backend API to verify reCAPTCHA response
    fetch('/verify', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": userData.email,
        "g-recaptcha-response": token
      })
    }).then(res => res.json()).then(res => {
   
      setResponse(res);
   
      if(res.success)
      reservation()

    });
  }

  const handleChange = (event) => {
    setavailabletimeslot(event.target.value);
  };

  let obj = {
    thedate,
    pickedtime: availabletimeslot.time,
    email: userData.email,
    googleId: userData.googleId,
    username: userData.username,
    address: userData.address,
    phone: userData.phone,
    service: props.service,
  };
  const reservation = () => {
    setbook(true);
    const reserve = axios
      .post("/appointments/reservation", {
        obj,
      })
      .then(props.fn());
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Time Slots</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={availabletimeslot}
          onChange={handleChange}
        >
          {props.availableTimeSlots.map((x, index) => {
            return (
              <MenuItem value={props.availableTimeSlots[index]}>
                {" "}
                {props.availableTimeSlots[index].time}
              </MenuItem>
            );
          })}
        </Select>
        <Button variant="outlined" onClick={handleOnClick}>
          Book!
        </Button>
   
      </FormControl>
      {book ? (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      }}>
     
          <Stripe
            service={props.service}          
          />
        </div>
      ) : null}
    </div>
  );
}
