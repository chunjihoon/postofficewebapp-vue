// import { createRouter, createWebHistory } from 'vue-router'
// import app from '../App.vue'
// import products from '../views/products.vue'

// const App = require("../App.vue");

const createRouter = require('vue-router').createRouter;
const createWebHistory = require('vue-router').createWebHistory;

const app = require('../App.vue');
const products = require('../views/products.vue');
const favorites = require('../views/favorites.vue');
const mypage = require('../views/mypage.vue');
const test = require('../views/test.vue');

const router = createRouter({
  history: createWebHistory(), //import.meta.env.BASE_URL // process.env.BASE_URL
  routes: [
    {
      path: '/',
      name: app,
      component: app
    },
    {
      path: '/products',
      name: products,
      component: products
    },
    {
      path: '/favorites',
      name: favorites,
      component: favorites
    },
    {
      path: '/mypage',
      name: mypage,
      component: mypage
    },
    {
      path: '/test',
      name: test,
      component: test
    }
  ]
});

//module.exports = router;
// return router;

// var _vueapp = new vueapp({
//   router: router
// }).$mount('#app')
