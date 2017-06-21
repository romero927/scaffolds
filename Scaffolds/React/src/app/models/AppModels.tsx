//INTERFACE TO BE USED IN COMPONENT PROPS INTERFACE
export interface IApp {
    count: number,
    AddAction:Function,
    GetAPI:Function
}

//API EXAMPLE MODEL
export class RateValue {
        name: string;   
        value: string;     
}

export class IAPI{
    base: string;
    date: string;
    rates: Array<RateValue>;

    constructor(data:any)
    {
        this.base = data.base;
        this.date = data.date;
        this.rates = new Array<RateValue>();
        for(var key in data.rates)
        {
            let Rate:RateValue = new RateValue();
            Rate.name = key;
            Rate.value = data.rates[key];
            this.rates.push(Rate);
        }
    }
}