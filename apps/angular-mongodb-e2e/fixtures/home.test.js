import { URLS } from '../utils/route.util';
import { loginElements } from '../page-objects/login.po';
import { homePage } from '../page-objects/home.po';
import { password } from '../utils/constant.util';

fixture('Welcome For home ').page(URLS.LOGIN);

test('test for home page ', async t => {
    //Arrange
    const username = 'peter.flowers';
    const title = 'javascript';
    const description = 'testing project with testcafe ';
    //Act
    await t
        .typeText(loginElements.username, username)
        .typeText(loginElements.password, password)
        .click(loginElements.btnLogin);
    await t.eval(() => location.reload(true));
    await t
        .click(homePage.addTutorial)
        .typeText(homePage.title, title)
        .typeText(homePage.description, description)
        .click(homePage.btnSubmit)
        .click(homePage.myTutorials)
        .typeText(homePage.search, title)
        .click(homePage.btnSearch);
    //Assert
    await t.expect(homePage.listTutorials.innerText).contains(title);
});