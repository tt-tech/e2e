import {URLS} from '../utils/route.util';
import {RegisterElements} from '../page-objects/register.po';
import {generatePerson} from '../utils/person.util';

fixture('Welcome For Register page').page(URLS.REGISTER);

test('test for new user', async t => {
  //Arrange
  const person = generatePerson();

  //Act
  await t
    .debug()
    .typeText(RegisterElements.name, person.username)
    .typeText(RegisterElements.email, person.email)
    .typeText(RegisterElements.password, person.password)
    .click(RegisterElements.btnRegister);

  //Assert
  //await t.expect(RegisterElements.helloUser.innerText).contains(person.email);
});
