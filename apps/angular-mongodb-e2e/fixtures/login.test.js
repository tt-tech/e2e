import { URLS } from '../utils/route.util';
import { loginElements } from '../page-objects/login.po';

fixture('Welcome For login').page(URLS.LOGIN);

test.only('test for login ', async t => {
    //Arrange
    const username = 'steven.reyes';
    const password = 'Testing';

    //Act
    await t
        .typeText(loginElements.username, username)
        .typeText(loginElements.password, password)
        .click(loginElements.btnLogin);

    //Assert
    //await t.eval(() => location.reload(true));
    await t.pressKey('Command+R');
    await t.wait(4000)
        //     await t.expect(RegisterElements.username.exists).ok();
        //     await t.expect(RegisterElements.helloUser.innerText).contains(username);
        // 
});