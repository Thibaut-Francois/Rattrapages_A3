import { IProduct } from "./IProduct.js";

export class Product implements IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    rating: number;
    available: boolean;
    image: string;
    expiryDate: Date;
    addedDate: Date;

    constructor(id: string, name: string, description: string, price:number, quantity:number, rating:number, available: boolean, image: string, expiryDate: Date, addedDate: Date) {
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

    get get_id() { return this.id; }
    get get_name() { return this.name; }
    get get_description() { return this.description; }
    get get_price() { return this.price; }
    get get_quantity() { return this.quantity; }
    get get_rating() { return this.rating; }
    get get_available() { return this.available; }
    get get_image() { return this.image; }
    get get_expiryDate() { return this.expiryDate; }
    get get_addedDate() { return this.addedDate; }
}