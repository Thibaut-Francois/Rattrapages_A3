<template>
    <div class="box">
        <div class="form">
                <h2> Add a product</h2>

                <div>
                    <label for="title">Product name: </label>
                    <input type="text" id="title" name="title" placeholder="product name" required>

                    <label for="content">Product description: </label>
                    <input type="text" id="content" name="content" placeholder="product desc" required>

                    <label for="price">Product Price: </label>
                    <input type="number" id="price" name="price" placeholder="product price" required>

                    <label for="quantity">Product Quantity: </label>
                    <input type="number" id="quantity" name="quantity" placeholder="product quantity" required min="0">

                    <label for="rating">Product rating: </label>
                    <input type="number" id="rating" name="rating" placeholder="product rating" required max="5" min="0">

                    <div>
                        <label for="available">Available: </label>
                        <input type="checkbox" id="available" name="available" required>
                    </div>

                    <label for="imagePath">Product image: </label>
                    <input type="text" id="imagePath" name="imagePath" placeholder="url image" required>

                    <label for="expirationDate">Product expiry: </label>
                    <input type="date" id="expirationDate" name="expirationDate" required>

                    <label for="category">Category: </label>
                    <select id="category" name="category" required>
                        <option value="noFilter"></option>
                        <option value="Viande_et_Poisson">Viande et Poisson</option>
                        <option value="Légumes_et_Fruits">Légumes et Fruits</option>
                        <option value="Desserts">Desserts</option>
                    </select>
                </div>

                <ButtonComp @click="addProducts" class="btnSubmit" text="Add the product"/>
        </div>
    </div>
</template>

<script>
import ButtonComp from './ButtonComp.vue';

export default {
    name: 'FormComp',
    components: {
        ButtonComp
    },
    methods: {
        addProducts() { 
            let title = document.getElementById('title').value;
            let slug = title.toLowerCase().replace(/ /g, '-')+ Date.now().toString();
            let content = document.getElementById('content').value;
            let price = document.getElementById('price').value;
            let quantity = document.getElementById('quantity').value;
            let rating = document.getElementById('rating').value;
            let available = document.getElementById('available').checked;
            let imagePath = document.getElementById('imagePath').value;
            let expirationDate = document.getElementById('expirationDate').value;
            let addDate = new Date().toISOString();
            addDate = addDate.slice(0, 10);
            let category = document.getElementById('category').value;

            if (!title || !content || !price || !quantity || !rating || !imagePath || !expirationDate) {
                alert('Please fill all the fields');
                return;
            }

            if (isNaN(price) || isNaN(quantity) || isNaN(rating)) {
                alert('Price, quantity and rating must be numbers');
                return;
            }
            
            if (price < 0) {
                alert('Price must be greater than 0');
                return;
            }

            if (quantity.toString().includes('-')) {
                alert("Quantity can't be negative");
                return;
            }

            if (expirationDate < new Date().toISOString().split('T')[0]) {
                alert('Expiration date must be in the future');
                return;
            }

            if (quantity == 0) {
                available = false;
            } else {
                available = true;
            }

            if (rating < 0 || rating > 5) {
                alert('rating must be between 0 and 5');
                return;
            }

            this.$store.commit('addProduct', {
                title: title,
                slug: slug,
                description: content,
                price: price,
                quantity: quantity,
                rating: rating,
                available: available,
                imagePath: imagePath,
                expirationDate: expirationDate,
                addDate: addDate,
                category: category
            });

        }
    },
    
}
</script>

<style scoped>
input{
    margin-bottom: 15px;
}

h2{
    text-align: center;
}

.box{
    width: 50%;
    margin: 0 auto;
}

.form{
    background-color: rgb(173, 230, 216);
    padding: 25px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
}

.form>div{
    display: flex;
    flex-direction: column;
}

.btnSubmit{
    margin-top: 15px;
}

</style>