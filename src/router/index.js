import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import Member from '../components/member/member'
import Cart from '../components/cart/cart'
import Search from '../components/search/search'
import NewsList from '../components/news-list/news-list'
import NewsInfo from '../components/news-info/news-info'
import ImgList from '../components/img-list/img-list'
import ImgInfo from '../components/img-info/img-info'
import GoodsList from '../components/goods-list/goods-list'
import GoodsInfo from '../components/goods-info/goods-info'
import GoodsDetail from '../components/goods-detail/goods-detail'
import GoodsComment from '../components/goods-comments/goods-comments'

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
    },
    {
      path: '/home/imglist',
      component: ImgList
    },
    {
      path: '/home/imginfo/:imgid',
      component: ImgInfo
    },
    {
      path: '/home/goodslist',
      component: GoodsList
    },
    {
      path: '/home/goodsinfo/:id',
      name: 'goodsinfo',
      component: GoodsInfo
    },
    {
      path: '/home/goodsdetail/:id',
      name: 'goosdetail',
      component: GoodsDetail
    },
    {
      path: 'home/goodscomment/:id',
      name: 'goodscomment',
      component: GoodsComment
    }
  ],
  linkActiveClass: 'mui-active'
})