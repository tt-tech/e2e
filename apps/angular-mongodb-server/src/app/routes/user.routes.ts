import * as authJwt from '../middlewares/auth-jwt';
import * as userCtr from '../controllers/user.controller';

export const userRoutes = app => {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    next();
  });

  app.get('/api/test/all', userCtr.allAccess);

  app.get('/api/test/user', [authJwt.verifyToken], userCtr.userBoard);

  app.get('/api/test/mod', [authJwt.verifyToken, authJwt.isModerator], userCtr.moderatorBoard);

  app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], userCtr.adminBoard);
};
