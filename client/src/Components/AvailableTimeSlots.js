import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import moment from "moment";
import axios from "axios";

import UserContext from "../context/UserContext";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const { userData, setUserData } = useContext(UserContext);
  const [book, setbook] = useState(false)
  const classes = useStyles();
  const [availabletimeslot, setavailabletimeslot] = React.useState('');
  let thedate = moment(props.selectedDate).format("YYYY-MM-DD")

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
  }
    const reservation = () =>{
        setbook(true)
        const reserve = axios.post("/appointments/reservation", {
            obj,

          }).then(props.fn());
    }

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
          
            {props.availableTimeSlots.map((x,index)=>{
                return (
                    <MenuItem value={props.availableTimeSlots[index]}> {props.availableTimeSlots[index].time}</MenuItem>
                )
            })}
       
         
        </Select>
        <Button variant="outlined" onClick={reservation}>Book!</Button>
      </FormControl>
            {book?(<h1>Thanks! We will confirm with you as soon as pawsible!</h1>):null}
    </div>
  );
}