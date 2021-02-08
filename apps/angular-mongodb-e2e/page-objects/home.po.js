import {Selector} from 'testcafe';

export const homePage = {
  addTutorial: Selector('a').withText('Add'),
  title: Selector('#title'),
  description: Selector('#description'),
  btnSubmit: Selector('button.btn.btn-success'),
  myTutorials: Selector('a').withText('My Tutorals App'),
  search: Selector('#search'),
  btnSearch: Selector('#btn-search'),
  listTutorials: Selector('li.list-group-item')
};
