import {URLS} from '../utils/route.util';
import {loginElements} from '../page-objects/login.po';
import {password} from '../utils/constant.util';
import {
  tutorialsElements,
  updateToturial,
  publishedTutorials,
  UnPublishedTutorials
} from '../page-objects/editTutorials.po';

fixture('Welcome For edit tutorials')
  .page(URLS.LOGIN)

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
  await t.expect(updateToturial.mgsSucces.exists).ok();
});

test('test for Published Tutorial', async t => {
  //Arrange
  const msgSuccess = 'Tutorial was updated successfully.';
  //Act
  await t
    .debug()
    .click(publishedTutorials.Tutorials)
    .click(publishedTutorials.listTutorial)
    .click(publishedTutorials.btnEdit)
    .click(publishedTutorials.btnPublish);
  //Assert
  await t.expect(publishedTutorials.status.exists).ok();
  await t.expect(publishedTutorials.msgAccess.innerText).contains(msgSuccess);
});

test('test for UnPublished Tutorial', async t => {
  //Arrange
  const msgSuccess = 'Tutorial was updated successfully.';
  //Act
  await t
    .debug()
    .click(UnPublishedTutorials.Tutorials)
    .click(UnPublishedTutorials.listTutorial)
    .click(UnPublishedTutorials.btnEdit)
    .click(UnPublishedTutorials.btnPublish);
  //Assert
  await t.expect(UnPublishedTutorials.status.exists).ok();
  await t.expect(UnPublishedTutorials.msgAccess.innerText).contains(msgSuccess);
});
