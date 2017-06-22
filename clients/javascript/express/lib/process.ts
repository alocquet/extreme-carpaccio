import {Query, Response} from './model';
import {Service} from './service';

let service = new Service();

exports.order = function order(input: Query, onResult) {
  let resp = new Response(service.computeTotal(input));
  onResult(null, resp);
}
