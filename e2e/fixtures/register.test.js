import { URLS } from '../utils/route.util';
import { RegisterElements } from '../page-objects/register.po';
//Declare chance
const Chance = require('chance');
const chanceObj = new Chance();

const user = chanceObj.name();
const username = user.toLowerCase();
const email = username.replace(' ', '-') + '@gmail.com';
const passwords = "Testing";

fixture('Welcome For Register!').page(URLS.REGISTER);

test('test for new user', async t => {
    //Act
    await t
        .typeText(RegisterElements.name, username)
        .typeText(RegisterElements.email, email)
        .typeText(RegisterElements.password, passwords)
        .click(RegisterElements.Btnregister)
});