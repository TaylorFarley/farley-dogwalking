var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();
// verify reCAPTCHA response
router.post('/', (req, res, next) => {
  var VERIFY_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRETKEY}&response=${req.body['g-recaptcha-response']}`;
  return fetch(VERIFY_URL, { method: 'POST' })
    .then(res => res.json())
    .then(json => res.send(json));
});


module.exports= router