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
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Appointment = mongoose.model("Appointments", AppointmentSchema);