import {URLS} from '../utils/route.util';
import {loginElements} from '../page-objects/login.po';
fixture('Welcome login!').page(URLS.LOGIN);

test('should welcome the new project', async t => {
  await t.typeText(loginElements.email).typeText(loginElements.password);
});
