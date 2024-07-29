import { ProductManager } from "./ProductManager.js";

const productManager: ProductManager = new ProductManager();
productManager.init();

const form = document.getElementById("productForm") as HTMLFormElement;


// --- Event listener for the form ---

if (form) {
    // --test--
    console.log("FORM");

    form.onsubmit = (event: Event) => {
    //console.log(form, event);
    event.preventDefault();
    const data = new FormData(form);
    let inputTitleChoice = data.get("productTitle") as string; 
    let inputDescriptionChoice = data.get("productDescription") as string;
    let inputPriceChoice = data.get("productPrice") as unknown as number;
    let inputQuantityChoice = data.get("productQuantity") as unknown as number;
    let inputRatingChoice = data.get("productRating") as unknown as number;
    let inputImageChoice = data.get("productImage") as string;
    let inputExpirationDateChoice = data.get("productExpiry") as string;

    console.log(inputQuantityChoice);

    if (inputQuantityChoice < 0) {
        console.log("Quantity must be positive");
        return;

    }

    if (
        inputTitleChoice &&
        inputDescriptionChoice &&
        inputPriceChoice &&
        inputQuantityChoice &&
        inputRatingChoice &&
        inputImageChoice &&
        inputExpirationDateChoice
    ) {
        console.log("FORM OK");
        let productCreated = productManager.addProduct(
        inputTitleChoice,
        inputDescriptionChoice,
        inputPriceChoice,
        inputQuantityChoice,
        inputRatingChoice,
        inputImageChoice,
        new Date(inputExpirationDateChoice),
        );
    } else {
        console.log("fill all fields");
    }
    };
}