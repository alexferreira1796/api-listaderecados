import { Router } from 'express';
import UserController from '../controllers/UserController';

class UsersRoutes {
  public init(): Router {
    const routes = Router();

    const controller = new UserController();

    routes.get('/users', controller.index);
    routes.post('/users', controller.store);
    routes.get('/users/:id', controller.index);
    routes.get('/users/:id', controller.show);
    routes.put('/uses/:id', controller.update);
    routes.delete('/users/:id', controller.delete);

    return routes;
  }
}

export default UsersRoutes;