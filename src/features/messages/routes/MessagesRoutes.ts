import { Router } from 'express';
import MessagesController from '../controllers/MessagesController';

class MessagesRoutes {
  public init(): Router {
    const routes = Router();

    const controller = new MessagesController();

    routes.get('/messages', controller.index);
    routes.post('/messages/:id', controller.store);
    routes.get('/messages/:id', controller.show);
    routes.get('/messages/users/:id', controller.getAll);
    routes.put('/messages/:id', controller.update);
    routes.delete('/messages/:id', controller.delete);

    return routes;
  }
}

export default MessagesRoutes;