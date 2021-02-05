import * as tutorialsCtr from '../controllers/tutorial.controller';
import * as authJwt from '../middlewares/auth-jwt';

export const tutorialsRoutes = (app: any) => {
  // Create a new Tutorial
  app.post('/api/tutorials/', [authJwt.verifyToken], tutorialsCtr.create);

  // Retrieve all Tutorials
  app.get('/api/tutorials/', [authJwt.verifyToken], tutorialsCtr.findAll);

  // Retrieve all published Tutorials
  app.get('/api/published', [authJwt.verifyToken], tutorialsCtr.findAllPublished);

  // Retrieve a single Tutorial with id
  app.get('/api/:id', [authJwt.verifyToken], tutorialsCtr.findOne);

  // Update a Tutorial with id
  app.put('/api/:id', [authJwt.verifyToken], tutorialsCtr.update);

  // Delete a Tutorial with id
  app.delete('/api/:id', [authJwt.verifyToken], tutorialsCtr.remove);
};
