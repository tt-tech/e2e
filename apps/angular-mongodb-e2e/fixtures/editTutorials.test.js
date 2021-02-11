import { URLS } from '../utils/route.util';
import { loginElements } from '../page-objects/login.po';
import { password } from '../utils/constant.util';
import { tutorialsElements, updateToturial } from '../page-objects/editTutorials.po';

fixture('Welcome For edit tutorials').page(URLS.LOGIN)

.beforeEach(async t => {
    //Arrange
    const userName = 'peter.flowers';
    const title = 'javascript';
    const description = 'testing javascript with testcafe ';
    //Act
    await t
        .typeText(loginElements.username, userName)
        .typeText(loginElements.password, password)
        .click(loginElements.btnLogin);
    await t.eval(() => location.reload(true));
    await t
        .click(tutorialsElements.btnAdd)
        .typeText(tutorialsElements.title, title)
        .typeText(tutorialsElements.description, description)
        .click(tutorialsElements.btnSubmit);
    //assert
    await t.expect(tutorialsElements.msgSucces.exists).ok();
});

test('test for update tutorials', async t => {
    //Arrange
    const updateTitle = 'javascript 2021';
    const updatedescription = 'javascript with testcafe (e2e)  2021';
    //Act
    await t
        .click(updateToturial.Tutorials)
        .click(updateToturial.listTutorial)
        .click(updateToturial.btnEdit)
        .click(updateToturial.title)
        .pressKey('ctrl+a delete')
        .typeText(updateToturial.title, updateTitle)
        .click(updateToturial.description)
        .pressKey('ctrl+a delete')
        .typeText(updateToturial.description, updatedescription)
        .click(updateToturial.btnUpdate);
    //Assert
    await t.expect(updateToturial.mgsSucces.exists).ok()
})

test('test for Published', async t => {

})