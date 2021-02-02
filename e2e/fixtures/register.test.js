import { URLS } from '../utils/route.util';
import { RegisterElements } from '../page-objects/register.po';

const Chance = require('chance');
const chanceObj = new Chance();

const User = chanceObj.name();
const Username = User.toLowerCase();
const Email = Username.replace(' ', '-') + '@gmail.com';
const passwords = "Testing";

fixture('Welcome For Register!').page(URLS.REGISTER);

test('test for new user', async t => {
    //Act
    await t
        .typeText(RegisterElements.name, Username)
        .typeText(RegisterElements.email, Email)
        .typeText(RegisterElements.password, passwords)
        //.expect(passwords.length > 6)
        .click(RegisterElements.Btnregister)
});