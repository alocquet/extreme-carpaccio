import {Query, Response} from './model';
import {Request} from 'express';
import {Service} from './service';
var process = require('./process');

let service = new Service();

exports.order = function order(req: Request, res, next) {
  let query = <Query>req.body;
  console.log(query);
  
  process.order(query, (err, resp) => res.json(resp));
}

exports.feedback = function feedback(req, res, next) {
  console.info("FEEDBACK:", req.body.type, req.body.content);
  next();
}
