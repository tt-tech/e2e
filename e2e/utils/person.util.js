const Chance = require('chance');
const chanceObj = new Chance();

export function generatePerson() {
    const username = chanceObj.name().toLowerCase();
    const email = username.replace(' ', '-') + '@gmail.com';
    const password = "Testing";

    return {
        username: username,
        email: email,
        password: password
    }
}