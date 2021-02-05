import { URLS } from '../utils/route.util';
import { registerElements } from '../page-objects/register.po';
import { generatePerson } from '../utils/person.util';
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
        //Assert
});