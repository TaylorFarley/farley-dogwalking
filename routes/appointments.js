var express = require("express");
var router = express.Router();
var sendEmail = require('../sendEmail')
const appointment = require("../models/appointmentModel");
const appointmentClient = require("../models/appointmentClientModel");
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
    console.log(req.body);
    appointment.find({ thedate: req.body.thedate}, (error, data) => {
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
  let {thedate, pickedtime, email, googleId, username, address, phone, service} = req.body.obj
//  console.log(thedate)
//  console.log(pickedtime)
console.log(service)
 const newAptClient = new appointmentClient({
  thedate,
  timeslots: pickedtime,
  uid: "1",
  email,
  googleId,
  username,
  address,
  phone,
  service
});

const newApt = new appointment({
  thedate,
  timeslots: pickedtime,
  uid: "1",  
  service,
});
 //
 try {

  appointment.find({ thedate: req.body.obj.thedate, service: req.body.obj.service }, (error, data) => {
    if (data[0] == undefined) {
      sendEmail.sendEmail(newAptClient)
      console.log("No Dates & Service Found");
      appointment.create(newApt, async(error, data) => {
        if (error) {
          return next(error);
        } else {
              res.send('successfully created')
              appointmentClient.create(newAptClient, async(error, data) => {
                if (error) {
                  return next(error);
                } else {
                     console.log('done')
                }
              });
        }
      });
    } else {
       console.log("A Date and Service Found");   
       sendEmail.sendEmail(newAptClient)  
      appointment.findOneAndUpdate(
        { thedate: req.body.obj.thedate, service: req.body.obj.service },        
        { $push: { timeslots: req.body.obj.pickedtime } },
        function (error, success) {
          if (error) {
              console.log(error);
          } else {
              console.log(success);
              appointmentClient.create(newAptClient, async(error, data) => {
                if (error) {
                  return next(error);
                } else {
                     console.log('done')
                }
              });
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
