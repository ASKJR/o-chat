const { Router } = require('express');
const UserController = require('./user.controller');
const { userValidation } = require('./user.validation');

const routes = Router();

routes.post('/', userValidation, UserController.create);
routes.put('/:id', userValidation, UserController.update);
routes.delete('/:id', UserController.delete);
routes.get('/', UserController.get);

module.exports = routes;
