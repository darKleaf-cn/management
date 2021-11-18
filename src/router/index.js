import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/index.vue';
import Home from '../views/home/Home';
import Login from '../views/login/Login';
import Register from '../views/login/Register';
import CommodityManage from '../views/commodity/CommodityManage';
import CommodityClassify from '../views/commodity/CommodityClassify';
import CommodityCreate from '../views/commodity/CommodityCreate';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: '登录',
    component: Login,
    hidden: true
  },
  {
    path: '/register',
    name: '注册',
    component: Register,
    hidden: true
  },
  {
    path: '/',
    redirect: 'home',
    hidden: true
  },
  {
    path: '/',
    component: Index,
    isSingle: true,
    icon: 'el-icon-s-home',
    children: [
      {
        path: '/home',
        component: Home,
        name: '我的主页'
      }
    ]
  },
  {
    path: '/commodity',
    component: Index,
    name: '我的商品',
    icon: 'el-icon-s-goods',
    children: [
      {
        path: 'commodityManage',
        name: '商品管理',
        component: CommodityManage
      },
      {
        path: 'commodityClassify',
        name: '商品分类',
        component: CommodityClassify
      },
      {
        path: 'commodityCreate',
        name: '创建商品',
        component: CommodityCreate
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
