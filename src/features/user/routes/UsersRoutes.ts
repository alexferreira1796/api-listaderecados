import { Router } from 'express';
import UserController from '../controllers/UserController';
import validUser from '../middlewares/md-valid-user';

class UsersRoutes {
  public init(): Router {
    const routes = Router();

    const controller = new UserController();

    routes.get('/users', controller.index);
    routes.post('/users', controller.store);
    routes.get('/users/:id', [validUser], controller.index);
    routes.get('/users/name/:name', [validUser], controller.getName);
    routes.get('/users/:id', [validUser], controller.show);
    routes.put('/uses/:id', [validUser], controller.update);
    routes.delete('/users/:id', [validUser], controller.delete);

    return routes;
  }
}

export default UsersRoutes;