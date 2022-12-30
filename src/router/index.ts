/* eslint-disable */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

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
        component: () => import(/* webpackChunkName: "purchase" */ '../views/Purchase.vue')
    },
    {
        path: '/PurchaseNew',
        name: 'PurchaseNew',
        component: () => import(/* webpackChunkName: "purchasenew" */ '../views/PurchaseNew.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
