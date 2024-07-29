import { Product } from "./Product.js";
export class ProductManager {
    products;
    productContainer;
    constructor() {
        this.products = [];
        this.productContainer = document.getElementById("product");
        const savedProduct = localStorage.getItem("product");
        if (savedProduct) {
            this.products = JSON.parse(savedProduct).map((product) => new Product(product.name, product.description, product.price, product.quantity, product.rating, product.image, new Date(product.expiryDate), new Date(product.addedDate)));
            this.renderProducts();
        }
    }
    addProduct(productName, description, price, quantity, rating, image, expiryDate) {
        console.log("add product");
        const newProduct = new Product(productName, description, price, quantity, rating, image, expiryDate);
        this.products.push(newProduct);
        this.saveProductToLocalStorage();
        this.renderProducts();
    }
    removeProduct(id) {
        this.products = this.products.filter((product) => product.id !== id);
        this.saveProductToLocalStorage();
        this.renderProducts();
    }
    editProduct(id, newName, newDescription, newPrice, newQuantity, newRating, newAvailable, newImage, newExpiryDate, newAddedDate) {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex !== -1) {
            this.products[productIndex] = new Product(newName, newDescription, newPrice, newQuantity, newRating, newImage, newExpiryDate);
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
            console.log(typeof product.addedDate);
            productElement.innerHTML = `
                <section class="oneProduct">
                    <div><b>Name:</b> ${product.name}</div>
                    <div><b>Description:</b> ${product.description}</div>
                    <div><b>Price:</b> ${product.price}$</div>
                    <div><b>Quantity:</b> ${product.quantity}</div>
                    <div><b>Rating:</b> ${product.rating}/5</div>
                    <div><b>This product is ${product.available == true ? "available" : "NOT available"}</b></div>
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
    openEditForm(productId) {
        let product = this.products.find(p => p.id === productId);
        const editForm = document.getElementById('editForm');
        if (product) {
            editForm.elements.namedItem('editProductName').value = product.name;
            editForm.elements.namedItem('editProductDescription').value = product.description;
            editForm.elements.namedItem('editProductPrice').value = product.price.toString();
            editForm.elements.namedItem('editProductQuantity').value = product.quantity.toString();
            editForm.elements.namedItem('editProductRating').value = product.rating.toString();
            editForm.elements.namedItem('editProductImage').value = product.image;
            editForm.elements.namedItem('editProductExpiry').value = product.expiryDate.toISOString().split('T')[0];
            editForm.style.display = 'flex';
            editForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const editedName = editForm.elements.namedItem('editProductName').value;
                const editedDescription = editForm.elements.namedItem('editProductDescription').value;
                const editedPrice = editForm.elements.namedItem('editProductPrice').value;
                const editedQuantity = editForm.elements.namedItem('editProductQuantity').value;
                const editedRating = editForm.elements.namedItem('editProductRating').value;
                const editedImage = editForm.elements.namedItem('editProductImage').value;
                const editedExpiryDate = editForm.elements.namedItem('editProductExpiry').value;
                this.editProduct(product.id, editedName, editedDescription, parseInt(editedPrice), parseInt(editedQuantity), parseInt(editedRating), true, editedImage, new Date(editedExpiryDate), product.addedDate);
                editForm.style.display = 'none';
            });
        }
    }
    // --- Event listener for the form ---
    init() {
        this.renderProducts();
        this.productContainer.addEventListener("click", (event) => {
            if (event.target && event.target.classList.contains('edit-btn')) {
                const productId = event.target.getAttribute('data-id');
                console.log("id:", productId);
                this.openEditForm(productId);
            }
            if (event.target &&
                event.target.classList.contains("remove-btn")) {
                const productId = (event.target.getAttribute("data-id"));
                this.removeProduct(productId);
            }
        });
    }
}
export default ProductManager;
