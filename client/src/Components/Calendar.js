import React, { Fragment, useState, useEffect, useContext } from "react";
import AvailableTimeSlots from "./AvailableTimeSlots";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import axios from "axios";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker } from "@material-ui/pickers";
import UserContext from "../context/UserContext";

const Calendar = (props) => {
  const { userData, setUserData } = useContext(UserContext);
  const [selectedDate, setselectedDate] = useState(new Date());
  const [availableTimeSlots, setavailableTimeSlots] = useState([{}]);
  const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();

  useEffect(() => {
    let thedate = moment(selectedDate).format("YYYY-MM-DD");
    const makeApt = axios
      .post("/appointments/checkavailabletimes", {
        thedate,
      })
      .then((res) => {
        setavailableTimeSlots(res.data);
      });
  }, [selectedDate]);

  //time slots algo
  let array1 = [
    "7:00am-7:30am",
    "7:30am-8:00am",
    "8:00am-8:30am",
    "11:00am-11:30am",
    "11:30am-12:00pm",
    "5:00pm-5:30pm"
  ];
  
  array1 = array1.filter((val) => !availableTimeSlots.includes(val));

  let objs = array1.map(function (x) {
    return {
      time: x,
    };
  });
  //time slot algo end

  let fn = () => {
    setselectedDate(new Date());
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          variant="inline"
          label="Select Date and Time"
          value={selectedDate}
          autoOk={true}
          disablePast={true}
          onChange={setselectedDate}
          format="MM/dd/yyyy"
        />
      </MuiPickersUtilsProvider>
      <AvailableTimeSlots
        availableTimeSlots={objs}
        selectedDate={selectedDate}
        fn={fn}
        service={props.service}
      />
    </>
  );
};

export default Calendar;
