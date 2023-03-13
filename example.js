const { hashPass, compare } = require("./index");



const hashedPass = hashPass('password', {})

console.log(hashedPass);

const isEqualPass = compare('password', hashedPass)

console.log(isEqualPass);