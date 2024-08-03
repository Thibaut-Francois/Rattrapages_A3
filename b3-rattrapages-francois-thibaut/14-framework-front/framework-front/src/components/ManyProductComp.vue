<template>
    <div :class="'container product ' + category" :slug="slug">
        <section>
            <section>
                <div>Name: {{ title }}</div>
                <div>Price: {{ price }}€</div>
                <div>Rating: {{ rating }}/5</div>
                <div>Quantity: {{ quantity }}</div>
                <div>{{ available ? `This product is available` : 'This product is NOT available' }}</div>
                <div>
                    <img :src="imagePath" :alt="'image of ' + title" loading="lazy">
                </div>
                <div>Expiration Date: {{ expiarationDate }}</div>
                <div>Added Date: {{ addDate }}</div>
            </section>
            <div class="twoButtons">
                <ButtonComp :action="deleteProduct" text="Delete" class="remove-btn"/>
                <router-link :to="'/product/:'+slug" class="edit-btn">Edit</router-link>
            </div>
        </section>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ButtonComp from './ButtonComp.vue';
import { RouterLink } from 'vue-router';

export default {
    name: 'ProductFull',
    components: {
        ButtonComp
    },
    methods: {
        ...mapMutations(['removeProduct']),
        deleteProduct() {
            this.removeProduct({ slug: this.slug });
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
        available: {
            type: Boolean,
            required: true
        },
        imagePath: {
            type: String,
            required: false
        },
        expiarationDate: {
            type: String,
            required: true
        },
        addDate: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    }
}

</script>

<style scoped>
.container{
    width: 30%;
    margin-bottom: 50px;
    padding: 20px;
    color: #0814ac !important;
    border: solid 3px #0814ac ;
    border-radius: 15px;
}

.twoButtons{
    margin-top: 10px;
    display: flex;
}

.remove-btn{
    color: red;
    background-color: white;
    border-color: red;
    margin: 0 5px;
}

.remove-btn:hover{
    color: white;
    background-color: red;
    border-color: white;
}

.edit-btn{
    color: blue;
    background-color: white;
    border: solid blue 2px;
    text-decoration: none;
    margin: 0 5px;
    padding: 10px 20px;
    width: auto;
    border-radius: 10px;
    cursor: pointer;
}

.edit-btn:hover{
    color: white;
    background-color: blue;
    border-color: white;
}

</style>