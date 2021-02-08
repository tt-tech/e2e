import {URLS} from '../utils/route.util';
import {loginElements} from '../page-objects/login.po';

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
  //Assert
  await t.eval(() => location.reload(true));
  await t.expect(loginElements.helloUser.exists).ok();
  await t.expect(loginElements.helloUser.innerText).contains(username);
});
