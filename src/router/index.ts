/* eslint-disable */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store/index'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/TreasuresGift',
        name: 'Treasures Gift',
        component: () => import(/* webpackChunkName: "treasuresgift" */ '../views/TreasuresGiftView.vue')
    },
    {
        path: '/GoodGirlKarma',
        name: 'Good Girl, Karma',
        component: () => import(/* webpackChunkName: "goodgirlkarma" */ '../views/GoodGirlKarmaView.vue')
    },
    {
        path: '/purchase',
        name: 'Purchase',
        component: () => import(/* webpackChunkName: "purchasenew" */ '../views/PurchaseNew.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeResolve(async to => {
    store.commit('resetPurchaseFormNew');
});

export default router;
