import {Selector} from 'testcafe';

export const loginElements = {
  username: Selector('#username'),
  email: Selector('#email'),
  password: Selector('#password'),
  btnLogin: Selector('#login'),
  helloUser: Selector('#hello-user'),
  logOut: Selector('a').withText('LogOut')
};
