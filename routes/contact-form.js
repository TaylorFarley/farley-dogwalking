const sgMail = require('@sendgrid/mail');

var sendEmailContact = require("../sendEmailContact");
const router = require("express").Router();


router.post('/sendEmailContact', async (req, res) => {
 
 const sgMail = require('@sendgrid/mail')
 sgMail.setApiKey(process.env.SENDGRID_API_KEY)
 const msg = {
   to: 'hi@twfmade.ca', // Change to your recipient
   from: 'hi@twfmade.ca', // Change to your verified sender
   subject: 'email from contact form dogwalking',
   text: `email from ${req.body.name} at ${req.body.email} wanted to know ${req.body.message}`,
   html: `email from ${req.body.name} at ${req.body.email} wanted to know ${req.body.message}`,
 }
 sgMail
   .send(msg)
   .then(() => {
     console.log('Email sent')
   })
   .catch((error) => {
     console.error(error)
     console.error(error.response.body)
   })

 })


// router.post("/sendEmailContact", (req, res) => {
//     console.log(req.body)
//     let data = req.body
//   sendEmailContact.sendEmailContact(data);
//   res.send('sent')
// });
module.exports = router;
