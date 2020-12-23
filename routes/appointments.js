var express = require("express");
var router = express.Router();
var sendEmail = require('../sendEmail')
const appointment = require("../models/appointmentModel");
let mongoose = require("mongoose");
  
router.post("/checkavailabletimes", async (req, res) => {
  let timeslots_default = [
    { time: "7:00am-7:30am" },
    { time: "7:30am-8:00am" },
    { time: "8:00am-8:30am" },
    {time: "11:00am-11:30am"},
    {time: "11:30am-12:00pm"},
    {time: "5:00pm-5:30pm"},
  ];
  try {
    console.log(req.body.thedate);
    appointment.find({ thedate: req.body.thedate }, (error, data) => {
      if (data[0] == undefined) {
        console.log("No Appointments Found");
        res.send(timeslots_default)
      } else {
        console.log("Appointments Found: BELOW:");
        console.log(data[0].timeslots)
        let availabletimeslots = data[0].timeslots
        res.send(availabletimeslots);
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.post("/reservation", async (req, res) => {
  let {thedate, pickedtime, email, googleId, username, address, phone} = req.body.obj
//  console.log(thedate)
//  console.log(pickedtime)
 const newApt = new appointment({
  thedate,
  timeslots: pickedtime,
  uid: "1",
  email,
  googleId,
  username,
  address,
  phone
});
 //
 try {

  appointment.find({ thedate: req.body.obj.thedate }, (error, data) => {
    if (data[0] == undefined) {
      sendEmail.sendEmail()
      console.log("No Dates Found");
      appointment.create(newApt, async(error, data) => {
        if (error) {
          return next(error);
        } else {
              res.send('successfully created')
        }
      });
    } else {
       console.log("A Date Found");   
       sendEmail.sendEmail()  
      appointment.findOneAndUpdate(
        { thedate: req.body.obj.thedate }, 
        { $push: { timeslots: req.body.obj.pickedtime } },
        function (error, success) {
          if (error) {
              console.log(error);
          } else {
              console.log(success);
          }
      }
         );
    }
  });
} catch (err) {
  res.status(500).json({ error: err.message });
}
 //
});

module.exports = router;
