const express = require('express');

const router = express.Router();

const users = require('../../core/users/user.routes');

router.use('/users', users);

module.exports = router;
