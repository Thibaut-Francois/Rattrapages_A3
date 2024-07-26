export interface IProduct {
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
}
