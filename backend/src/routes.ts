import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import ItemsController from './controllers/ItemsController';
import PointController from './controllers/PointController';

const routes = Router();
const upload = multer(multerConfig);

routes.get('/items', ItemsController.index);

routes.get('/points/:id', PointController.show);
routes.get('/points', PointController.index);


routes.post('/points', upload.single('image'), PointController.store);

export default routes;