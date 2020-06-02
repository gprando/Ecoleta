import { Router } from 'express';

import ItemsController from './controllers/ItemsController';
import PointController from './controllers/PointController';

const routes = Router();

routes.get('/items', ItemsController.index);

routes.post('/points', PointController.store);
routes.get('/points/:id', PointController.show);
routes.get('/points', PointController.index);

export default routes;