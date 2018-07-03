import { Router } from 'express';

import * as userController from './user.controllers';
import { authLocal } from '../../services/auth.services';

const routes = new Router();

routes.post('/signup', userController.signUp);
routes.post('/login', authLocal, userController.login);

export default routes;
