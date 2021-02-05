const Chance = require('chance');
const chanceObj = new Chance();

export function generatePerson() {
    const username = chanceObj.name().replace(' ', '.').toLowerCase();
    const email = username + '@gmail.com';
    const password = 'Testing';

    return {
        username: username,
        email: email,
        password: password
    };
}