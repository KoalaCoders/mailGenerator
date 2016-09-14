const mailRegExp = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
const fs = require('fs');

const data = fs.readFileSync('./data/dataset.csv')
  .toString()
  .split('\n')
  .map((s) => s.replace(/\"/g, '').split(','));

const mails = data.reduce(
  (total, row) => {
    total.push(
      ...row.filter((cell) => cell.match(mailRegExp))
    );
  return total;
}, []);

module.exports = mails;
