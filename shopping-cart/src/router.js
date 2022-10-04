import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

import TheProducts from "./components/TheProducts";
import TheCard from "./components/TheCard";

export default new VueRouter({
    mode:'history',
    routes:[
        {
            component: TheProducts,
            path:'/products'
        },
        {
            component: TheCard,
            path: '/card'
        }
    ]
})