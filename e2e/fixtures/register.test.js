import { URLS } from '../utils/route.util';
import { Selector } from 'testcafe';
//Declare  chance js 
const Chance = require('chance');
const chanceObj = new Chance();
//declare Selector
const name = Selector('#name');
const email = Selector('#email');
const password = Selector('#password');

//work with chance js
const User = chanceObj.name().toLowerCase;
const Email = User.replace(' ', '-') + '@gmail.com';
const password = "Testing";

fixture('Welcome For Register!').page(URLS.REGISTER);
test('test for new user', async t => {

    await t
        .debug()
        .typeText(name, 'Mohamed')
        .typeText(email, 'Mohamed-12@gmail.com')
});