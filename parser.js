const getUserData = require('./src/getUserData.js');
const sendEmail = require('./src/sendEmail.js');


getUserData().then(sendEmail);
