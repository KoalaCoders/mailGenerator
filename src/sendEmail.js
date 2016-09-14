const nodemailer = require('nodemailer');
const fs = require('fs');
const mails = require('./data.js');

function sendEmail(data) {
  const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          user: data.mail,
          pass: data.password
      }
  });

  const mailOptions = {
      from: `"KoalaCoders" <${data.mail}>`, // sender address
      to: mails.join(', '), // list of receivers
      subject: 'KPI JavaScript courses', // Subject line
      html: fs.readFileSync('./data/mail.html').toString() // html body
  };


  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });

};

module.exports = sendEmail;
