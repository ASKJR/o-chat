import { Request, Response, NextFunction } from 'express';
const Key = require('../models/key');
const AppError = require('./appError');

module.exports = async (req: Request, res: Response, next: NextFunction) => {
  const apiKey = await Key.findOne({ apiKey: req.get('X-Api-Key') });
  if (!apiKey) {
    return next(new AppError(401, 'fail', 'X-Api-Key inválido.'));
  }
  return next();
};
