const router = require("express").Router();
const passport = require("passport");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let mongoose = require("mongoose");

let string;


router.post("/logout", (req, res) => {
  req.logout();
  res.send("logged out");

  // console.log(`the string is ${string}`)
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    let userInfo = {
      _id: user._id,
      username: user.username,
      email: user.email,
      address: user.address,
      phone: user.phone,
    };
    return res.json(userInfo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password) console.log("need email and password");

    const user = await User.findOne({ email: email });
    if (!user) console.log("user not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) console.log("invalid username/password");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const userInfo = await User.findById(user._id);
    console.log(userInfo)
    res.json({
      token,
      user: {
        id: user._id,
        displayName: user.displayName,
        email: userInfo.email,
        address: userInfo.address,
        phone: userInfo.phone
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/register", async (req, res) => {
  let { username, email, password, phone, address, passwordCheck } = req.body;

  // validate

  const existingUser = await User.findOne({ email: email });
  if (existingUser) console.log("email exists");

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    email,
    password: passwordHash,
    address,
    phone,
  });
  const savedUser = await newUser.save();
  res.send(savedUser);
});
// auth with google+
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);


router.post("/getgoogleinfo", (req, res) => {
  res.send(string);
 
});

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  // res.send(req.user);
  console.log(req.user);
  string = req.user;
  res.redirect("http://localhost:3000/bookappointment");
});

module.exports = router;
