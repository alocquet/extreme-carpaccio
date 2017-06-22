import {Query, Response} from './model';
import {Request} from 'express';
import {Service} from './service';

let service = new Service();

exports.order = function order(req: Request, res, next) {
  let query = <Query>req.body;
  res.json(service.computeTotal(query));
}

exports.feedback = function feedback(req, res, next) {
  console.info("FEEDBACK:", req.body.type, req.body.content);
  next();
}
