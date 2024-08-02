<template>
    <RouterLink to="/">Back to products</RouterLink>
    <div>
        <ProductSingle :title="Product.title" :slug="Product.slug" :content="Product.description" :price="Product.price" :quantity="Product.quantity" :rating="Product.rating" :available="Product.available" :imagePath="Product.imagePath" :expirationDate="Product.expirationDate" :addDate="Product.addDate" />
    </div>
</template>

<script>
import ProductSingle from '@/components/OneProductComp.vue';
import ButtonComp from '@/components/ButtonComp.vue';

export default {
    name: 'ProductView',
    components: {
        ProductSingle,
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

</style>