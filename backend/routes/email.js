var express = require('express');

var router = express.Router();
var MailConfig = require("../config/email");
var hbs = require("nodemailer-express-handlebars");
var gmailTransport = MailConfig.GmailTransport;
var smtpTransport = MailConfig.SMTPTransport;

router.post("/", (req, res, next) => {
  //MailConfig.ViewOption(gmailTransport, hbs);
  console.log(req)
  let HelperOptions = {
    from: '"Tariqul islam" <pafbuyandsell12@gmail.com>',
    to: req.body.email,
    
    subject: "Hellow world!",
    text: 'You have registered =>>>>>>>', 
    context: {
      name: "tariqul_islam",
      email: "Kalpaniomalka@gmail.com",
      address: "52, Kadamtola Shubag dhaka"
    }
  };
  gmailTransport.sendMail(HelperOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.json(error);
    }
    console.log("email is send");
    console.log(info);
    res.json(info);
  });
});
module.exports= router