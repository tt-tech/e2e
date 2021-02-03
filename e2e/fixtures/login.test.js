import { URLS } from '../utils/route.util';
import { loginElements } from '../page-objects/login.po';
fixture('Welcome For login').page(URLS.LOGIN);

test('test for login ', async t => {
    //Arrange
    const email = 'chester-mills@gmail.com';
    const password = 'Testing';
    const med = 'Hello,' + email;
    //Act
    await t
        .typeText(loginElements.email, email)
        .typeText(loginElements.password, password)
        .click(loginElements.btnLogin);
    //Assert
    //.expect(loginElements.helloUser.innerText).contains(email)
});