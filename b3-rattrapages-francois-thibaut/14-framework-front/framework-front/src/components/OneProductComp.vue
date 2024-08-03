<template>
    <div class="oneProduct product">
        <input type="hidden" id="slug" name="slug" :value="slug">
        <div class="leftSide">
            <img :src="imagePath" :alt="'image of ' + title" class="oneImg">
        </div>
        <div class="rightSide">
            <h1>{{ title }}</h1>
            <div>Description: {{ content }}</div>
            <div>Price: {{ price }}€</div>
            <div class="btnEdit">
                <div>Quantity: <input type="number" id="quantity" name="quantity" min="0" :placeholder="quantity"></div>
                <ButtonComp @click="changeQuantity" text="Change Quantity"/>
            </div>
            <div class="btnEdit">
                <div>Rating: <input type="number" id="rating" name="rating" max="5" min="0" :placeholder="rating">/5</div>
                <ButtonComp @click="changeRating" text="Change Rating"/>
            </div>
            <div>Expiration Date: {{ expirationDate }}</div>
            <div>Added Date: {{ addDate }}</div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ButtonComp from './ButtonComp.vue';

export default {
    name: 'ProductFull',
    components: {
        ButtonComp
    },
    methods: {
        ...mapMutations(['updateQuantity', 'updateRating']),
        changeRating() {

            let rating = document.getElementById('rating').value;

            if (rating < 0 || rating > 5) {
                alert('rating must be between 0 and 5');
                return;
            }

            this.updateRating({ Slug: document.getElementById('slug').value, rating: rating });
        },
        changeQuantity() {

            let quantity = document.getElementById('quantity').value;

            if (quantity.toString().includes('-')) {
                alert("Quantity can't be negative");
                return;
            }

            this.updateQuantity({ Slug: document.getElementById('slug').value, quantity: quantity });
        }
    },
    props: {
        title: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        imagePath: {
            type: String,
            required: false
        },
        expirationDate: {
            type: String,
            required: true
        },
        addDate: {
            type: String,
            required: true
        }
    }
}

</script>

<style>
.oneProduct{
    width: 100%;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
}

.leftSide{
    width: 50%;
    margin: 45px;
}

.rightSide{
    width: 50%;
    margin: 45px;
}

.rightSide>div{
    margin-bottom: 10px;
}

.oneImg{
    width: 100%;
}

.btnEdit{
    display: flex;
    flex-direction: row;
}

.btnEdit>button{
    margin: 0 30px;
}

</style>