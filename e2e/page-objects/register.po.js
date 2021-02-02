import { Selector } from 'testcafe';

export const RegisterElements = {
    name: Selector('#name'),
    email: Selector('#email'),
    password: Selector('#password'),
    Btnregister: Selector('button').withText('Register')
}