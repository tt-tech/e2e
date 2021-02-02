import {baseUrl} from './constant.util';

export function composePath(route) {
  return `${baseUrl}/#/${route}`;
}

export const URLS = {
  LOGIN: composePath('login'),
  REGISTER: composePath('register')
};
