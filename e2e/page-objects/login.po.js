import {Selector} from 'testcafe';

export const loginElements = {
  email: Selector('#email'),
  password: Selector('#password'),
  btnLogin: Selector('button').withText('Login'),
  helloUser: Selector('#hello-user')
};
