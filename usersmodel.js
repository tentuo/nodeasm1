const {readFileSync} = require('fs');
let loadUser = () => JSON.parse(readFileSync('datanam.json'));

module.exports = {loadUser};