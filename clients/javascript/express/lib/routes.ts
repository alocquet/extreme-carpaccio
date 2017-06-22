import {Query, Response} from './model';
import {Request} from 'express';

exports.order = function order(req: Request, res, next) {
  // TODO implement from here
  console.log('prices - ' + (<Query>req.body).prices;
  res.json(new Response(0));
}

exports.feedback = function feedback(req, res, next) {
  console.info("FEEDBACK:", req.body.type, req.body.content);
  next();
}
