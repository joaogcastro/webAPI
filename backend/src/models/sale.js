export class Sale {
    constructor(saleId = null, date = null, employee = null, products = null, commission = null, totalPrice = null) {
        this.saleId = saleId;
        this.date = date;
        this.employee = employee;
        this.products = products;
        this.commission = commission;
        this.totalPrice = totalPrice;
    }
}
