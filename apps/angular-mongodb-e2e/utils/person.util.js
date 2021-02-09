const Chance = require('chance');
const chanceObj = new Chance();

export function generatePerson() {
  const username = chanceObj.name().replace(' ', '.').toLowerCase();
  const email = username + '@gmail.com';
  const logOut = 'LogOut';
  return {
    username: username,
    email: email,
    logOut: logOut
  };
}
