"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
exports.order = function order(req, res, next) {
    // TODO implement from here
    console.log('prices - ' + req.body.prices);
    let resp = new model_1.Response();
    resp.total = 0;
    res.json(resp);
};
exports.feedback = function feedback(req, res, next) {
    console.info("FEEDBACK:", req.body.type, req.body.content);
    next();
};
//# sourceMappingURL=routes.js.map