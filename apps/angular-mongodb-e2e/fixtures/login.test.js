import { URLS } from '../utils/route.util';
import { loginElements } from '../page-objects/login.po';
import { generatePerson } from '../utils/person.util';
import { password } from '../utils/constant.util';

fixture('Welcome For login').page(URLS.LOGIN);

test.only('test for login page  ', async t => {
    //Arrange
    const person = generatePerson();
    const username = 'peter.flowers';
    //Act
    await t
        .typeText(loginElements.username, username)
        .typeText(loginElements.password, password)
        .click(loginElements.btnLogin);
    await t.eval(() => location.reload(true));
    //Assert
    await t.expect(loginElements.helloUser.exists).ok();
    await t.expect(loginElements.helloUser.innerText).contains(username);
    await t.expect(loginElements.logOut.innerText).contains(person.logOut);
});