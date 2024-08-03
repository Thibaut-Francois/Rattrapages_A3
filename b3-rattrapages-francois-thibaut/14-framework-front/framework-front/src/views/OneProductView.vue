<template>
    <div style="margin-top: 40px;">
        <RouterLink to="/" class="back_btn">Back to products</RouterLink>

        <OneProduct :title="Product.title" :slug="Product.slug" :content="Product.description" :price="Product.price" :quantity="Product.quantity" :rating="Product.rating" :available="Product.available" :imagePath="Product.imagePath" :expirationDate="Product.expirationDate" :addDate="Product.addDate" />
    </div>
</template>

<script>
import OneProduct from '@/components/OneProductComp.vue';
import ButtonComp from '@/components/ButtonComp.vue';

export default {
    name: 'ProductView',
    components: {
        OneProduct,
        ButtonComp
    },
    computed: {
        Product() {
            let slug = this.$route.params.slug;
            slug = slug.slice(1);
            let product = this.$store.state.Products.find(product => product.slug == slug);
            return product;
        }
    }
}
</script>

<style scoped>
.back_btn{
    color: green;
    background-color: white;
    border: solid green 2px;
    text-decoration: none;
    margin: 15px;
    margin-top: 45px;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
}

.back_btn:hover{
    color: white;
    background-color: green;
    border-color: white;
}
</style>