<template>
    <div class="header">
        <img src="../assets/picard.png" alt="logo picard">
    </div>
    <section>
        <div>
            <FormComp/>
        </div>
        <div class="filterChoice">
            <div>
                <label for="filter">Select a category :   </label>
                <select id="filter" name="filter" @click="filter">
                    <option value="noFilter">sans filtres</option>
                    <option value="Viande_et_Poisson">Viande et Poisson</option>
                    <option value="Légumes_et_Fruits">Légumes et Fruits</option>
                    <option value="Desserts">Desserts</option>
                </select>
            </div>
        </div>
    </section>
    <div class="ProductsList">
        <ProductFull v-for="product in Products" :key="product.slug" :title="product.title" :category="product.category" :slug="product.slug" :price="product.price" :quantity="product.quantity" :rating="product.rating" :available="product.available" :imagePath="product.imagePath" :expiarationDate="product.expirationDate" :addDate="product.addDate"/>
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
                if (filter === 'noFilter') {
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

<style>
img{
    width: 50%;
}

.header{
    display: flex;
    justify-content: center;
    margin: 25px;
}

.header>img{
    width: auto;
}

.filterChoice{
    margin: 15px 15px;
    padding: 15px;
    background-color: #ADD8E6;
    width:24%;
    border-radius: 15px;
}

.filterChoice{
    display: flex;
    justify-content: space-around;
}

.ProductsList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>