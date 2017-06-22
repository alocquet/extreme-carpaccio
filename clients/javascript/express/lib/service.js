"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taxcalculator_1 = require("./taxcalculator");
class Service {
    computeTotal(query) {
        var t = new taxcalculator_1.TaxCalculator();
        t.calculate(query);
        return undefined;
    }
}
exports.Service = Service;
//# sourceMappingURL=service.js.map