import { ProductManager } from "./ProductManager.js";
const productManager = new ProductManager();
productManager.init();
const form = document.getElementById("productForm");
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
        console.log(inputImageChoice);
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
