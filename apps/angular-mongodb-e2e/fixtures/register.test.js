import {URLS} from '../utils/route.util';
import {registerElements} from '../page-objects/register.po';
import {generatePerson} from '../utils/person.util';
import {loginElements} from '../page-objects/login.po';

fixture('Welcome For register page ').page(URLS.REGISTER);

test.only('test for new user ', async t => {
  //Arrange
  const person = generatePerson();
  //Act
  await t
    .debug()
    .typeText(registerElements.userName, person.username)
    .typeText(registerElements.email, person.email)
    .typeText(registerElements.password, person.password)
    .click(registerElements.btnRegister)
    .typeText(loginElements.username, person.username)
    .typeText(loginElements.password, person.password)
    .click(loginElements.btnLogin);
  //Assert
  await t.eval(() => location.reload(true));
  await t.expect(loginElements.helloUser.exists).ok();
  await t.expect(loginElements.helloUser.innerText).contains(person.username);
});
