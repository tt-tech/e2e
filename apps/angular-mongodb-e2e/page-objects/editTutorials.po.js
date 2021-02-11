import { Selector } from 'testcafe';

export const tutorialsElements = {
    btnAdd: Selector('a').withText('Add'),
    title: Selector('#title'),
    description: Selector('#description'),
    btnSubmit: Selector('button').withText('Submit'),
    msgSucces: Selector('h4').withText('Tutorial was submitted successfully!')
};

export const updateToturial = {
    Tutorials: Selector('a').withText('Tutorials'),
    listTutorial: Selector('ul.list-group').child('li').nth(0),
    btnEdit: Selector('a').withText('Edit'),
    title: Selector('#title'),
    description: Selector('#description'),
    btnUpdate: Selector('button').withText('Update'),
    mgsSucces: Selector('p').withText('Tutorial was updated successfully.')
}