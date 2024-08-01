<template>
    <ButtonComp @click="showForm" text="Add a product"/>
    <div class="box">
        <div class="form">
            <fieldset>
                <legend> Add a product : </legend>

                <label for="title">Title :</label>
                <input type="text" id="title" name="title" required><br><br>
                <label for="content">Content :</label>
                <input type="text" id="content" name="content" required><br><br>
                <label for="price">Price :</label>
                <input type="number" id="price" name="price" required><br><br>
                <label for="quantity">Quantity :</label>
                <input type="number" id="quantity" name="quantity" required min="0"><br><br>
                <label for="stars">Stars :</label>
                <input type="number" id="stars" name="stars" required max="5" min="0"><br><br>
                <label for="available">Available :</label>
                <input type="checkbox" id="available" name="available" required><br><br>
                <label for="imagePath">Image Path :</label>
                <input type="text" id="imagePath" name="imagePath" required><br><br>
                <label for="expirationDate">Expiration Date :</label>
                <input type="date" id="expirationDate" name="expirationDate" required><br><br>
                <label for="category">Category :</label>
                <select id="category" name="category" required>
                    <option value="0"></option>
                    <option value="1">Category 1</option>
                    <option value="2">Category 2</option>
                    <option value="3">Category 3</option>
                </select><br><br>
                <ButtonComp @click="addProducts" text="Validate"/>
            </fieldset>
        </div>
    </div>
    <div @click="hideForm" class="overlay"></div>
</template>

<script>
import ButtonComp from './ButtonComp.vue';

export default {
    name: 'FormComp',
    components: {
        ButtonComp
    },
    methods: {
        hideForm() {
            document.querySelector('.overlay').style.display = 'none';
            document.querySelector('.box').style.display = 'none';
        },
        showForm() {
            document.querySelector('.overlay').style.display = 'block';
            document.querySelector('.box').style.display = 'block';
        },
        addProducts() {
            let title = document.getElementById('title').value;
            let slug = title.toLowerCase().replace(/ /g, '-');
            let content = document.getElementById('content').value;
            let price = document.getElementById('price').value;
            let quantity = document.getElementById('quantity').value;
            let stars = document.getElementById('stars').value;
            let available = document.getElementById('available').checked;
            let imagePath = document.getElementById('imagePath').value;
            let expirationDate = document.getElementById('expirationDate').value;
            let addDate = new Date().toISOString();
            addDate = addDate.slice(0, 10);
            let category = document.getElementById('category').value;

            if (!title || !content || !price || !quantity || !stars || !imagePath || !expirationDate) {
                alert('Please fill all the fields');
                return;
            }

            if (isNaN(price) || isNaN(quantity) || isNaN(stars)) {
                alert('Price, quantity and stars must be numbers');
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

            if (quantity == 0) {
                available = false;
            } else {
                available = true;
            }

            if (stars < 0 || stars > 5) {
                alert('Stars must be between 0 and 5');
                return;
            }

            this.$store.commit('addProduct', {
                title: title,
                slug: slug,
                description: content,
                price: price,
                quantity: quantity,
                stars: stars,
                available: available,
                imagePath: imagePath,
                expirationDate: expirationDate,
                addDate: addDate,
                category: category
            });

            this.hideForm();
        }
    },
    
}
</script>

<style scoped>

</style>