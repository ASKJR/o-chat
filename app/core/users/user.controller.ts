const User = require('../../models/user');
const base = require('../../common/baseController');

exports.create = base.createOne(User);
exports.update = base.updateOne(User);
exports.delete = base.deleteOne(User);
exports.get = base.get(User);
