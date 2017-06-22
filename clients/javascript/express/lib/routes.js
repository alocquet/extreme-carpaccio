"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = function order(req, res, next) {
    // TODO implement from here
    console.log('prices - ' + req.body.prices);
    res.json({});
};
exports.feedback = function feedback(req, res, next) {
    console.info("FEEDBACK:", req.body.type, req.body.content);
    next();
};
//# sourceMappingURL=routes.js.map