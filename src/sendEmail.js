const nodemailer = require('nodemailer');

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
      to: 'igor.motorny@railsreactor.com', // list of receivers
      subject: 'KPI JavaScript courses', // Subject line
      text: 'Hello world 🐴', // plaintext body
      html: '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScBwYgQsgb_mSIjTEZIltPzy2kLyPwUCymE6KDUU_ZIL1y-jg/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>' // html body
  };


  transporter.sendMail(mailOptions, (error, info) => {
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });

};

module.exports = sendEmail;
