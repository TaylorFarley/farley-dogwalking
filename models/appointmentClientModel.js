const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const AppointmentClientSchema = new Schema({
  thedate: {
    type: String,
    required: true
  }, 
  email: {
    type: String  
  },   
  googleId: {
    type: String  
  }, 
  username: {
    type: String  
  },   
  address: {
    type: String  
  },  
  phone: {
    type: String  
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
module.exports = AppointmentClient = mongoose.model("AppointmentClient", AppointmentClientSchema);