import router from '.'
// import MainLayoutVue from 'layouts/MainLayout.vue'
// import IndexPageVue from 'pages/IndexPage.vue'
import { useUserStore } from 'src/stores/user'

const routes = [

  // 前端路由
  {
    // name: MainLayout,
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        // IndexPage 首頁
        path: '',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          title: '晶 ✧ 糸',
          login: false,
          admin: false
        }
      },
      {
        // 關於晶糸
        path: 'aboutpage',
        component: () => import('pages/indexpage/AboutPage.vue'),
        meta: {
          title: '關於晶糸',
          login: false,
          admin: false
        }
      },
      {
        // 聯絡我們
        path: 'contactus',
        component: () => import('pages/indexpage/ContactUs.vue'),
        meta: {
          title: '聯絡我們',
          login: false,
          admin: false
        }
      },
      {
        // 註冊
        path: 'signup',
        component: () => import('pages/SignUp.vue'),
        meta: {
          title: '註冊',
          login: false,
          admin: false
        }
      },
      {
        // 登入
        path: 'login',
        component: () => import('pages/LogIn.vue'),
        meta: {
          title: '登入',
          login: false,
          admin: false
        }
      },
      {
        // 會員資料
        path: 'personpage',
        component: () => import('pages/member/PersonPage.vue'),
        meta: {
          title: '會員資料',
          login: true,
          admin: false
        }
      },
      {
        // 收藏清單
        path: 'lovelist',
        component: () => import('pages/member/LoveList.vue'),
        meta: {
          title: '收藏清單',
          login: true,
          admin: false
        }
      },
      {
        // 購物車
        path: 'cartpage',
        component: () => import('pages/member/CartPage.vue'),
        meta: {
          title: '購物車',
          login: true,
          admin: false
        }
      },
      {
        // 訂單紀錄
        path: 'orderpage',
        component: () => import('pages/member/OrderPage.vue'),
        meta: {
          title: '訂單紀錄',
          login: true,
          admin: false
        }
      }
    ]
  },
  // 管理員路由
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/administrator/AdminPage.vue'),
        meta: {
          title: '後台管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'memberspage',
        component: () => import('src/pages/administrator/MembersPage.vue'),
        meta: {
          title: '後台管理｜會員管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'productspage',
        component: () => import('src/pages/administrator/ProductsPage.vue'),
        meta: {
          title: '後台管理｜商品管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'orderspage',
        component: () => import('src/pages/administrator/OrdersPage.vue'),
        meta: {
          title: '後台管理｜訂單管理',
          login: true,
          admin: true
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  // 404路由
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
