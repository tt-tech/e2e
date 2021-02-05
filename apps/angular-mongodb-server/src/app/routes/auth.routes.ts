import * as verifySignUp from '../middlewares/verify-signup';
import * as authCtr from '../controllers/auth.controller';

export const authRoutes = app => {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    next();
  });

  app.post(
    '/api/auth/signup',
    [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
    authCtr.signup
  );

  app.post('/api/auth/signin', authCtr.signin);
};
