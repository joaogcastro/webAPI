export class Product {
    constructor(productId = null, name = null, brand = null, color = null, size = null, quantity = null, price = null) {
        this.productId = productId;
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.size = size;
        this.quantity = quantity;
        this.price = price;
    }
}
