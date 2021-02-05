import { Selector } from 'testcafe';

export const registerElements = {
    userName: Selector('#username'),
    email: Selector('#email'),
    password: Selector('#password'),
    btnRegister: Selector('button').withText('Sign Up'),
};