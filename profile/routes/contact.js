var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});


/*router.post('/sendMail', function(req, res) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Yahoo',
        auth: {
            user: 'rmmohanv@yahoo.co.in',
            pass: 'n*dakota*$123'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: req.body.email, // sender address
        to: 'rmmohan@gmail.com', // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.message, // plain text body
        html: '<p>' + req.body.message + '</p>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
});
*/


module.exports = router;
