export class Sale {
    constructor(idSale = null, date = null, employee = null, products = null, commission = null, totalPrice = null) {
        this.idSale = idSale;
        this.date = date;
        this.employee = employee;
        this.products = products;
        this.commission = commission;
        this.totalPrice = totalPrice;
    }
}
