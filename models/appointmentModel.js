const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const AppointmentSchema = new Schema({
  thedate: {
    type: String,
    required: true
  },    
  uid: {
    type: String,
    required: true
  },
  timeslots: {
    type: Array
  },
  service: {
    type: String  
  }, 
  date: {
    type: Date,
    default: Date.now
  }

});
module.exports = Appointment = mongoose.model("Appointments", AppointmentSchema);