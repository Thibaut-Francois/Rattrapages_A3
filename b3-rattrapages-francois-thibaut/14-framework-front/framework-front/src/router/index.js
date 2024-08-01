import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/AllProductsView.vue'
import ProductView from '../views/OneProductView.vue'

const routes = [
    {
        path: '/',
        name: 'Products',
        component: ProductsView
    },
    { 
        path: '/product/:slug',
        name: 'Product',
        component: ProductView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router