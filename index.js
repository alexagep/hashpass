const md5 = require("md5");

const hashPass = (rawPassword, { salt = 20, rounds = 15 }) => {
  let hashed = md5(rawPassword + salt);
  for (let i = 0; i <= rounds; i++) {
    hashed = md5(hashed);
  }

  return `${salt}$${rounds}$${hashed}`;
};

const compare = (rawPassword, hashedPassword) => {
  try {
    const [salt, rounds] = hashedPassword.split("$");

    const hashedRawPassword = hashPass(rawPassword, { salt, rounds });
    return hashedPassword === hashedRawPassword;
  } catch (error) {
    throw Error(error.message);
  }
}

module.exports = {
  hashPass,
  compare,
};
