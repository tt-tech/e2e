import {URLS} from '../utils/route.util';
import {Selector} from 'testcafe';
//Declare  chance js
const Chance = require('chance');
const chanceObj = new Chance();
//declare Selector
const name = Selector('#name');
const email = Selector('#email');
const password = Selector('#password');
const Btnregister = Selector('button').withText('Register');

//work with chance js
const User = chanceObj.name();
const Username = User.toLowerCase();
const Email = Username.replace(' ', '-') + '@gmail.com';
const passwords = 'Testing';
fixture('Welcome For Register!').page(URLS.REGISTER);

test('test for new user', async t => {
  //Act
  await t
    .debug()
    .typeText(name, Username)
    .typeText(email, Email)
    .typeText(password, passwords)
    //.expect(passwords.length > 6)
    .click(Btnregister);
});
