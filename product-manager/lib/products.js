// JavaScript source code
class product {
    constructor(name, price, description, qty) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.qty = qty;
    }

    exports.products = function () {
        let products = ['hat', 'bag', 'shirt', 'gloves', 'socks'];
        return JSON.stringify(products);
    };


