import {URLS} from '../utils/route.util';
import {password} from '../utils/constant.util';
import {registerElements, getUrl} from '../page-objects/register.po';
import {generatePerson} from '../utils/person.util';

fixture('Welcome For register page ').page(URLS.REGISTER);

test('test for new user ', async t => {
  //Arrange
  const person = generatePerson();
  const msgAccept = 'Your registration is successful!';
  //Act
  await t
    .typeText(registerElements.userName, person.username)
    .typeText(registerElements.email, person.email)
    .typeText(registerElements.password, password)
    .click(registerElements.btnRegister);
  //Assert
  await t.expect(registerElements.msgSuccess.innerText).contains(msgAccept);
});
