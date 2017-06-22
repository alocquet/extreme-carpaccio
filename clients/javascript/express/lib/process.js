"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const service_1 = require("./service");
let service = new service_1.Service();
exports.order = function order(input, onResult) {
    let resp = new model_1.Response(service.computeTotal(input));
    onResult(null, resp);
};
//# sourceMappingURL=process.js.map