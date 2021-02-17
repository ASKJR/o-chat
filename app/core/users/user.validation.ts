const { check } = require('express-validator');

exports.userValidation = [
  check('name')
    .trim()
    .not()
    .isEmpty()
    .withMessage('O nome do usuário é obrigatório.'),
];
