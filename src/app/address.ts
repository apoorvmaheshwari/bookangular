export class Address {
    name: string="";
    addressline1: string="";
    addressline2: string="";
    addressline3: string="";
    creditcard: number=0;
    constructor(name, addressline1, addressline2, addressline3, creditcard) {
        this.name = name;
        this.addressline1 = addressline1;
        this.addressline2 = addressline2;
        this.addressline3 = addressline3;
        this.creditcard = creditcard;

    }
}
