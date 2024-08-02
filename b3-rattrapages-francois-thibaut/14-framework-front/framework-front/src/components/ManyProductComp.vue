<template>
    <div :class="'container product ' + category" :slug="slug">
        <h2>{{ title }}</h2>
        <section>
            <div>
                <img :src="imagePath" :alt="'image of ' + title" loading="lazy">
            </div>
            <div>   
                <ul>
                    <div>Price:{{ price }} $</div>
                    <div>Rating: {{ rating }}/5</div>
                    <div>{{ available ? `This product is available (${quantity} left)` : 'This product is NOT available' }}</div>
                    <div>Expiration Date: {{ expiarationDate }}</div>
                    <div>Added Date: {{ addDate }}</div>
                    <div><router-link :to="'/product/:'+slug">See more...</router-link></div>
                </ul>
                <ButtonComp :action="deleteProduct" text="Delete"/>
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

</style>