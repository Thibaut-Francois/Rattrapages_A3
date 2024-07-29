import { ProductManager } from "./ProductManager.js";
const productManager = new ProductManager();
productManager.init();
const form = document.getElementById("productForm");
const spanPrice = document.getElementById("spanPrice");
const spanQuantity = document.getElementById("spanQuantity");
const spanRating = document.getElementById("spanRating");
const spanExpirationDate = document.getElementById("spanExpiration");
// --- Event listener for the form ---
if (form) {
    // --test--
    console.log("FORM");
    form.onsubmit = (event) => {
        //console.log(form, event);
        event.preventDefault();
        const data = new FormData(form);
        let inputTitleChoice = data.get("productTitle");
        let inputDescriptionChoice = data.get("productDescription");
        let inputPriceChoice = data.get("productPrice");
        let inputQuantityChoice = data.get("productQuantity");
        let inputRatingChoice = data.get("productRating");
        let inputImageChoice = data.get("productImage");
        let inputExpirationDateChoice = data.get("productExpiry");
        //console.log(inputRatingChoice);
        if (inputPriceChoice < 0) {
            // console.log("Price must be positive");
            if (spanPrice) {
                spanPrice.style.display = "block";
            }
            return;
        }
        else if (inputQuantityChoice < 0) {
            // console.log("Quantity must be positive");
            if (spanQuantity) {
                spanQuantity.style.display = "block";
            }
            return;
        }
        else if (inputRatingChoice < 0 || inputRatingChoice > 5) {
            // console.log("Rating must be between 1 and 5");
            if (spanRating) {
                spanRating.style.display = "block";
            }
            return;
        }
        else if (inputExpirationDateChoice < new Date().toISOString().split('T')[0]) {
            // console.log("Expiration date must be in the future");
            if (spanExpirationDate) {
                spanExpirationDate.style.display = "block";
                return;
            }
        }
        else {
            spanPrice.style.display = "none";
            spanQuantity.style.display = "none";
            spanRating.style.display = "none";
            spanExpirationDate.style.display = "none";
        }
        if (inputTitleChoice &&
            inputDescriptionChoice &&
            inputPriceChoice &&
            inputQuantityChoice &&
            inputRatingChoice &&
            inputImageChoice &&
            inputExpirationDateChoice) {
            console.log("FORM OK");
            let productCreated = productManager.addProduct(inputTitleChoice, inputDescriptionChoice, inputPriceChoice, inputQuantityChoice, inputRatingChoice, inputImageChoice, new Date(inputExpirationDateChoice));
        }
        else {
            console.log("fill all fields");
        }
    };
}
