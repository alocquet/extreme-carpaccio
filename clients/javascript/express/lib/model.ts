export interface Query {
    prices: number[];
    quantities: number[];
    country: string;
    reduction: string;
}
export class Response {
    constructor(public total: number) {}
}