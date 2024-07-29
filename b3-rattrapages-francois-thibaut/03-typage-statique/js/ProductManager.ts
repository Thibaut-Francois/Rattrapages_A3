import { Product } from "./Product.js";
import { IProduct } from "./IProduct.js";

export class ProductManager {
    products: Product[];
    productContainer: HTMLElement;

    constructor() {
        this.products = [];
        this.productContainer = document.getElementById("product")!;

        const savedProduct = localStorage.getItem("product");
        if (savedProduct) {
            this.products = JSON.parse(savedProduct).map((product:IProduct)=> new Product(product.name, product.description, product.price, product.quantity, product.rating, product.image, new Date(product.expiryDate), new Date(product.addedDate)));
            this.renderProducts();
        }

    }

    addProduct(productName: string, description: string, price: number, quantity: number, rating: number, image: string, expiryDate: Date) {
        console.log("add product");
        const newProduct: Product = new Product(productName, description, price, quantity, rating, image, expiryDate);
        this.products.push(newProduct);
        this.saveProductToLocalStorage();
        this.renderProducts();
    }

    removeProduct(id: string) { 
        this.products = this.products.filter((product) => product.id !== id);
        this.saveProductToLocalStorage();
        this.renderProducts();
    }

    editProduct(id: string, newName: string, newDescription: string, newPrice: number, newQuantity: number, newRating: number, newAvailable: boolean, newImage: string, newExpiryDate: Date, newAddedDate: Date) {
        const productIndex = this.products.findIndex(product => product.id === id);

        if (productIndex !== -1) {
            this.products[productIndex] = new Product(
                newName,
                newDescription,
                newPrice,
                newQuantity,
                newRating,
                newImage,
                newExpiryDate,
            );
            this.saveProductToLocalStorage();
            this.renderProducts();
        }
    }

    saveProductToLocalStorage() {
        localStorage.setItem("product", JSON.stringify(this.products));
    }

    // --- Display products ---

    renderProducts() {
            this.productContainer.innerHTML = "";
            this.products.forEach((product) => {
            const productElement = document.createElement("div");

            // --test--
            //console.log(typeof product.addedDate)

            productElement.innerHTML = `
                <section class="oneProduct">
                    <div><b>Name:</b> ${product.name}</div>
                    <div><b>Description:</b> ${product.description}</div>
                    <div><b>Price:</b> ${product.price}$</div>
                    <div><b>Quantity:</b> ${product.quantity}</div>
                    <div><b>Rating:</b> ${product.rating}/5</div>
                    <div><b>This product is ${product.available == true ? "available" : "NOT available" }</b></div>
                    <div> <img style="height:100px;" src="${product.image}" /> </div>
                    <div><b>Expiry Date:</b> ${product.expiryDate.toLocaleDateString()}</div>
                    <div><b>Added Date:</b> ${product.addedDate.toLocaleDateString()}</div>

                    <button class="remove-btn" data-id="${product.id}">delete</button>
                    <button class="edit-btn" data-id="${product.id}">edit</button>
                </section>
            `;
            this.productContainer.appendChild(productElement);
        });
    }

    openEditForm(productId: string) {
        
        let product = this.products.find(p => p.id === productId);
        
        const editForm = document.getElementById('editForm') as HTMLFormElement;
        if(product){
            (editForm.elements.namedItem('editProductName') as HTMLInputElement).value = product.name;
            (editForm.elements.namedItem('editProductDescription') as HTMLInputElement).value = product.description;
            (editForm.elements.namedItem('editProductPrice') as HTMLInputElement).value = product.price.toString();
            (editForm.elements.namedItem('editProductQuantity') as HTMLInputElement).value = product.quantity.toString();
            (editForm.elements.namedItem('editProductRating') as HTMLInputElement).value = product.rating.toString();
            (editForm.elements.namedItem('editProductImage') as HTMLInputElement).value = product.image;
            (editForm.elements.namedItem('editProductExpiry') as HTMLInputElement).value = product.expiryDate.toISOString().split('T')[0];

            editForm.style.display = 'flex';

            editForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const editedName = (editForm.elements.namedItem('editProductName') as HTMLInputElement).value;
                const editedDescription = (editForm.elements.namedItem('editProductDescription') as HTMLInputElement).value;
                const editedPrice = (editForm.elements.namedItem('editProductPrice') as HTMLInputElement).value;
                const editedQuantity = (editForm.elements.namedItem('editProductQuantity') as HTMLInputElement).value;
                const editedRating = (editForm.elements.namedItem('editProductRating') as HTMLInputElement).value;
                const editedImage = (editForm.elements.namedItem('editProductImage') as HTMLInputElement).value;
                const editedExpiryDate = (editForm.elements.namedItem('editProductExpiry') as HTMLInputElement).value;
                this.editProduct(product.id, editedName, editedDescription, parseInt(editedPrice), parseInt(editedQuantity), parseInt(editedRating), true, editedImage, new Date(editedExpiryDate), product.addedDate);

                editForm.style.display = 'none';
            });
        }   
    }

    // --- Event listener for the form ---

    init() {
        this.renderProducts();

        this.productContainer.addEventListener("click", (event) => {

            if (event.target && (event.target as HTMLElement).classList.contains('edit-btn')) {
                const productId = (event.target as HTMLElement).getAttribute('data-id')!;
                //console.log("id:",productId);
                this.openEditForm(productId);
            }
            if (
                event.target &&
                (event.target as HTMLElement).classList.contains("remove-btn")
            ) {
                const productId = ((event.target as HTMLElement).getAttribute("data-id")!);
                this.removeProduct(productId);
            }
            
        });
    }
}

export default ProductManager;
