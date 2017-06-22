"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
let service = new service_1.Service();
exports.order = function order(req, res, next) {
    let query = req.body;
    res.json(service.computeTotal(query));
};
exports.feedback = function feedback(req, res, next) {
    console.info("FEEDBACK:", req.body.type, req.body.content);
    next();
};
//# sourceMappingURL=routes.js.map