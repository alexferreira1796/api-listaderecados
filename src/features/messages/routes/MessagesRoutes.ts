import { Router } from 'express';
import validUser from '../../user/middlewares/md-valid-user';
import MessagesController from '../controllers/MessagesController';
import validDescription from '../middlewares/md-valid-description';
import validDetails from '../middlewares/md-valid-details';
import validMessage from '../middlewares/md-valid-message';

class MessagesRoutes {
  public init(): Router {
    const routes = Router();

    const controller = new MessagesController();

    routes.get('/messages', controller.index);
    routes.post('/messages/:id', [validDescription, validDetails], controller.store);
    routes.get('/messages/:id', [validMessage], controller.show);
    routes.get('/messages/users/:id', [validUser], controller.getAll);
    routes.put('/messages/:id', [validMessage, validDescription, validDetails], controller.update);
    routes.delete('/messages/:id', [validMessage], controller.delete);

    return routes;
  }
}

export default MessagesRoutes;