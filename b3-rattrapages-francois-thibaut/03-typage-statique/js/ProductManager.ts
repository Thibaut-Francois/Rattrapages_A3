import { Product } from "./Product.js";

export class ProductManager {
    products: Product[];
    productContainer: HTMLElement;

    constructor() {
        this.products = [];
        this.productContainer = document.getElementById("product")!;

        const savedProduct = localStorage.getItem("product");
        if (savedProduct) {
            this.products = JSON.parse(savedProduct);
            this.renderTasks();
        }

    }

    addProduct(productName: string, description: string, price: number, quantity: number, rating: number, available: boolean, image: string, expiryDate: Date, addedDate: Date) {
    {

    }

    removeTask(id: string) { 
        
    }

    editTask(id: string, newName: string, newDescription: string, newDate: string, newPriority: string) {

    }

    saveTasksToLocalStorage() {

    }

    // --- Display tasks ---

    renderTasks() {

    }

    openEditForm(taskId: string) {

    }

    // --- Event listener for the form ---

    init() {

    }
}

export default ProductManager;
