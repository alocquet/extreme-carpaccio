import {Query, Response} from './model';
import {Request} from 'express';
import {OrderProcessor} from './process';

let processor = new OrderProcessor();

exports.order = function order(req: Request, res, next) {
  let query = <Query>req.body;
  console.info(query);
  processor.order(query, (err, resp) => res.json(resp));
}

exports.feedback = function feedback(req, res, next) {
  console.info("FEEDBACK:", req.body.type, req.body.content);
  next();
}
