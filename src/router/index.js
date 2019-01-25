import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import Member from '../components/member/member'
import Cart from '../components/cart/cart'
import Search from '../components/search/search'
import NewsList from '../components/news-list/news-list'
import NewsInfo from '../components/news-info/news-info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/home/newslist',
      component: NewsList
    },
    {
      path: '/home/newsinfo/:id',
      component: NewsInfo
    }
  ],
  linkActiveClass: 'mui-active'
})