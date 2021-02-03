import { URLS } from '../utils/route.util';
import { loginElements } from '../page-objects/login.po';
fixture('Welcome For login').page(URLS.LOGIN);
//Arrange
const email = 'chester-mills@gmail.com';
const password = 'Testing';
test('should welcome the new project', async t => {
    await t
        .debug()
        .typeText(loginElements.email, email)
        .typeText(loginElements.password, password)
        .click(loginElements.btnLogin)
});