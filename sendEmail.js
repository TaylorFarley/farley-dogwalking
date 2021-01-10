
const sgMail = require('@sendgrid/mail');
const sendEmail = async(newApt)=>{
  
   
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: 'hi@twfmade.ca', // Change to your recipient
      from: 'hi@twfmade.ca', // Change to your verified sender
      subject: 'email from contact form dogwalking',
      text: `${newApt.email}wants a walk at ${newApt.thedate} at ${newApt.timeslots}`,
      html: `${newApt.email}wants a walk at ${newApt.thedate} at ${newApt.timeslots}`,
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
  }

  exports.sendEmail = sendEmail