<template>
    <h1>All Products</h1>
    <section>
        <div>
            <label for="filter">Filter by category :   </label>
            <select id="filter" name="filter" @click="filter">
                <option value="0"></option>
                <option value="1">Viande et Poisson</option>
                <option value="2">Légumes et Fruits</option>
                <option value="3">Desserts</option>
            </select>
        </div>
        <div>
            <FormComp/>
        </div>
    </section>
    <div class="bigContainer">
        <ProductFull v-for="product in Products" :key="product.slug" :title="product.title" :category="product.category" :slug="product.slug" :price="product.price" :quantity="product.quantity" :stars="product.stars" :available="product.available" :imagePath="product.imagePath" :expiarationDate="product.expirationDate" :addDate="product.addDate"/>
    </div>
    
</template>

<script>
import ProductFull from '@/components/ManyProductComp.vue';
import ButtonAction from '@/components/ButtonComp.vue';
import FormComp from '@/components/FormComp.vue';

export default {
    name: 'ProductsView',
    components: {
        ProductFull,
        ButtonAction,
        FormComp
    },
    methods: {
        filter() {
            let filter = document.getElementById('filter').value;
            let products = document.querySelectorAll('.product');

            products.forEach(product => {
                if (filter == 0) {
                    product.style.display = 'block';
                } else if (product.classList.contains(filter)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }
    },
    computed: {
        Products() {
            let products =this.$store.state.Products;
            return products;
        }
    }
}
</script>

<style scoped>

</style>