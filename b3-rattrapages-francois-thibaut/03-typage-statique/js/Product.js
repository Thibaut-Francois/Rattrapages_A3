"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, name, description, price, quantity, rating, available, image, expiryDate, addedDate) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.rating = rating;
        this.available = available;
        this.image = image;
        this.expiryDate = expiryDate;
        this.addedDate = addedDate;
    }
    Object.defineProperty(Product.prototype, "get_id", {
        get: function () { return this.id; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "get_name", {
        get: function () { return this.name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "get_description", {
        get: function () { return this.description; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "get_price", {
        get: function () { return this.price; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "get_quantity", {
        get: function () { return this.quantity; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "get_rating", {
        get: function () { return this.rating; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "get_available", {
        get: function () { return this.available; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "get_image", {
        get: function () { return this.image; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "get_expiryDate", {
        get: function () { return this.expiryDate; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "get_addedDate", {
        get: function () { return this.addedDate; },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
exports.Product = Product;
