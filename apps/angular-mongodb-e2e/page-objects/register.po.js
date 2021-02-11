import {Selector, ClientFunction} from 'testcafe';

export const registerElements = {
  userName: Selector('#username'),
  email: Selector('#email'),
  password: Selector('#password'),
  btnRegister: Selector('button').withText('Sign Up'),
  msgSuccess: Selector('#successful_message_registration')
};

export const getUrl = ClientFunction(() => window.location.href);
