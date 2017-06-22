import { Query }  from './model';
import { TaxCalculator } from './taxcalculator';

export class Service {
    computeTotal(query: Query): number {
         var t = new TaxCalculator();
         t.calculate(query);
        return undefined;
    }
}