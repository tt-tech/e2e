import {URLS} from '../utils/route.util';
import {loginElements} from '../page-objects/login.po';
import {password} from '../utils/constant.util';
import {getUrl} from '../page-objects/edit-tutorials.po';
import {
  tutorialsElements,
  updateToturial,
  publishedTutorials,
  UnPublishedTutorials,
  deleteTutorials
} from '../page-objects/edit-tutorials.po';
import {createTextChangeRange} from 'typescript';

fixture('Welcome For edit tutorials')
  .page(URLS.LOGIN)

  .beforeEach(async ctx => {
    //Arrange
    ctx.userName = 'peter.flowers';
    //Act
    await ctx
      .typeText(loginElements.username, ctx.userName)
      .typeText(loginElements.password, password)
      .click(loginElements.btnLogin);
    await ctx.eval(() => location.reload(true));
  });

test('test for add tutorials', async t => {
  //Arrange
  const title = 'javascript';
  const description = 'test javascript (e2e)';
  //Act
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
  const status = 'Published';
  //Act
  await t
    .click(publishedTutorials.Tutorials)
    .click(publishedTutorials.listTutorial)
    .click(publishedTutorials.btnEdit)
    .click(publishedTutorials.btnPublish);
  //Assert
  await t.expect(publishedTutorials.status.exists).ok();
  await t.expect(publishedTutorials.msgAccess.innerText).contains(msgSuccess);
  await t.expect(publishedTutorials.status.innerText).contains(status);
});

test('test for UnPublished Tutorial', async t => {
  //Arrange
  const msgSuccess = 'Tutorial was updated successfully.';
  const status = 'Pending';

  //Act
  await t
    .click(UnPublishedTutorials.Tutorials)
    .click(UnPublishedTutorials.listTutorial)
    .click(UnPublishedTutorials.btnEdit)
    .click(UnPublishedTutorials.btnPublish);
  //Assert
  await t.expect(UnPublishedTutorials.status.exists).ok();
  await t.expect(UnPublishedTutorials.msgAccess.innerText).contains(msgSuccess);
  await t.expect(UnPublishedTutorials.status.innerText).contains(status);
});

test('test for delete tutorials ', async t => {
  //Arrange
  const url = 'http://localhost:4200/#/tutorials';
  //Act
  await t
    .click(deleteTutorials.Tutorials)
    .click(deleteTutorials.listTutorial)
    .click(deleteTutorials.btnEdit)
    .click(deleteTutorials.btnDelete);
  //Assert
  await t.expect(getUrl()).eql(url);
});
