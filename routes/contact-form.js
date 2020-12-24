var sendEmailContact = require("../sendEmailContact");
const router = require("express").Router();
router.post("/sendEmailContact", (req, res) => {
    console.log(req.body)
    let data = req.body
  sendEmailContact.sendEmailContact(data);
  res.send('sent')
});
module.exports = router;
