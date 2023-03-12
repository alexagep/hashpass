function hashPass(rawPassword, { salt = 15, rounds = 10 }) {

  let hashed = md5(rawPassword + salt);
  for (let i = 0; i <= rounds; i++) {
    hashed = md5(hashed);
  }

  return `${salt}$${rounds}$${hashed}`;
}



function compare(rawPassword, hashedPassword) {
  try {
    const [ salt, rounds ] = hashedPassword.split('$');

    const hashedRawPassword = hashPass(rawPassword, { salt, rounds });
    return hashedPassword === hashedRawPassword;
  } catch (error) {
    throw Error(error.message);
  }
}

module.exports = {
  hashPass,
  compare
}