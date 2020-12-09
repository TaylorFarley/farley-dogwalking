const router = require("express").Router();
const passport = require("passport");
let string
// auth login

// auth logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// auth with google+
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.post("/getgoogleinfo", (req,res) => {
    res.send(string)
    // console.log(`the string is ${string}`)
}
)

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  // res.send(req.user);
   console.log(req.user);
  string = req.user
  res.redirect("http://localhost:3000/bookappointment");
});



module.exports = router;
