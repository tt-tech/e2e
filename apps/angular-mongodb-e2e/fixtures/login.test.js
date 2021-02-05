import { URLS } from '../utils/route.util';
import { loginElements } from '../page-objects/login.po';
import { RegisterElements } from '../page-objects/register.po';

fixture('Welcome For login').page(URLS.LOGIN);

test.only('test for login ', async t => {
    //Arrange
    const username = 'adil.benmoussa';
    const password = 'testing';

    //Act
    await t
        .typeText(loginElements.username, username)
        .typeText(loginElements.password, password)
        .click(loginElements.btnLogin);

    //Assert
    await t.eval(() => location.reload(true));
    await t.expect(RegisterElements.username.exists).ok();
    await t.expect(RegisterElements.helloUser.innerText).contains(username);
});