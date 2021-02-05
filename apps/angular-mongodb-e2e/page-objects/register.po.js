import {Selector} from 'testcafe';

export const RegisterElements = {
  name: Selector('#name'),
  email: Selector('#email'),
  password: Selector('#password'),
  btnRegister: Selector('button').withText('Register'),
  helloUser: Selector('#hello-user')
};
