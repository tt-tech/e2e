import { URLS } from '../utils/route.util';

fixture('Welcome login!').page(URLS.LOGIN);

test('should welcome the new project', async t => {
    await t.expect(1).eql(1);
});