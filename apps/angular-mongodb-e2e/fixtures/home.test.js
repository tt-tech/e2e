import { URLS } from '../utils/route.util';
import { loginElements, homePage } from '../page-objects/login.po';

fixture('Welcome For login').page(URLS.LOGIN);

test.only('test for login ', async t => {
    //Arrange
    const username = 'tony.perry';
    const password = 'Testing';
    //Act
    await t
        .typeText(loginElements.username, username)
        .typeText(loginElements.password, password)
        .click(loginElements.btnLogin);
    await t.eval(() => location.reload(true));
    await t
        .click(homePage.addTutorial)
        .typeText(homePage.title, 'javascript (e2e)')
        .typeText(homePage.description, 'testing project with testcafe ')
        .wait(4000);
    //Assert
});