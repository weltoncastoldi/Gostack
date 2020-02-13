import { Router } from 'express';

// import User from './app/models/User';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/user', UserController.store);

export default routes;
