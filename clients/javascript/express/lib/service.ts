import { Query }  from './model';
import {TaxCalculator} from './taxcalculator';

export class Service {

taxCalculator = new TaxCalculator();

    computeTotal(query: Query): number {
        if(!query.prices){
            return;
        }
        console.log(query.prices);
        let total = query.prices.reduce((total, price, idx) => {
            return total + query.quantities[idx] * price;
        },0);
        total = this.taxCalculator.calculate(total, query.country);
        total = this.computeReduc(total, query.reduction);
        total = parseFloat(total.toFixed(2));
        return total;
    }

    computeReduc(total: number, reduction: string){
        if(reduction === 'STANDARD') {
            if(total >= 50000) {
                return total * 0.85;
            } else if(total >= 10000) {
                return total * 0.9;
            } else if(total >= 7000) {
                return total * 0.93;
            } else if(total >= 5000) {
                return total * 0.95;
            } else if(total >= 1000) {
                return total * 0.97;
            } else  {
                return total;
            } 
        } else if (reduction === 'HALF PRICE') {
            return total / 2;
        }
    }
}