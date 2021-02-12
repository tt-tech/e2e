import {Selector, ClientFunction} from 'testcafe';

export const tutorialsElements = {
  btnAdd: Selector('a').withText('Add'),
  title: Selector('#title'),
  description: Selector('#description'),
  btnSubmit: Selector('button').withText('Submit'),
  msgSucces: Selector('h4').withText('Tutorial was submitted successfully!')
};

export const updateToturial = {
  Tutorials: Selector('a').withText('Tutorials'),
  listTutorial: Selector('ul.list-group').child('li').nth(-1),
  btnEdit: Selector('a').withText('Edit'),
  title: Selector('#title'),
  description: Selector('#description'),
  btnUpdate: Selector('button').withText('Update'),
  mgsSucces: Selector('p').withText('Tutorial was updated successfully.')
};

export const publishedTutorials = {
  Tutorials: Selector('a').withText('Tutorials'),
  listTutorial: Selector('ul.list-group').child('li').nth(0),
  btnEdit: Selector('a').withText('Edit'),
  btnPublish: Selector('button').withText('Publish'),
  status: Selector('div.form-group').withText('Published'),
  msgAccess: Selector('p').withText('Tutorial was updated successfully.')
};

export const UnPublishedTutorials = {
  Tutorials: Selector('a').withText('Tutorials'),
  listTutorial: Selector('ul.list-group').child('li').nth(0),
  btnEdit: Selector('a').withText('Edit'),
  btnPublish: Selector('button').withText('Publish'),
  status: Selector('div.form-group').withText('Pending'),
  msgAccess: Selector('p').withText('Tutorial was updated successfully.')
};

export const deleteTutorials = {
  Tutorials: Selector('a').withText('Tutorials'),
  listTutorial: Selector('ul.list-group').child('li').nth(0),
  btnEdit: Selector('a').withText('Edit'),
  btnDelete: Selector('button').withText('Delete'),
  msgSucces: Selector('div').child('p')
};
