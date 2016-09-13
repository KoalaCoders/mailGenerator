const readline = require('readline');

function getUserData() {
  return new Promise(resolve => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Mail: ', (mail) => {
      rl.question('Password: ', (password) => {
        rl.close();
        resolve({mail, password});
      });
    });
  });
}

module.exports = getUserData;
