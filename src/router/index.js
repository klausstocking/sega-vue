import Vue from 'vue';
import VueRouter from 'vue-router';
import Ping from '../components/Ping.vue';
import GetList from '../components/GetList.vue';
import Books from '../components/Books.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
    {
      path: '/',
      name: 'Books',
      component: Books,
    },
    {
      path: '/getList',
      name: 'GetList',
      component: GetList,
    },
  ],

});
