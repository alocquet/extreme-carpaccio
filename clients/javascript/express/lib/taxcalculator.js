"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaxCalculator {
    calculate(total, countryCode) {
        return total * this.getTaxes()[countryCode];
    }
    getTaxes() {
        var array = {
            'DE': 1.2,
            'UK': 1.21,
            'FR': 1.23,
            'IT': 1.25,
            'ES': 1.19,
            'PL': 1.21,
            'RO': 1.2,
            'NL': 1.2,
            'BE': 1.24,
            'EL': 1.2,
            'CZ': 1.19,
            'PT': 1.23,
            'HU': 1.27,
            'SE': 1.23,
            'AT': 1.22,
            'BG': 1.21,
            'DK': 1.21,
            'FI': 1.17,
            'SK': 1.18,
            'IE': 1.21,
            'HR': 1.23,
            'LT': 1.23,
            'SI': 1.24,
            'LV': 1.2,
            'EE': 1.22,
            'CY': 1.21,
            'LU': 1.25,
            'MT': 1.2
        };
        return array;
    }
}
exports.TaxCalculator = TaxCalculator;
//# sourceMappingURL=taxcalculator.js.map