
const routes = [
  {

    // name: MainLayout,
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        // IndexPage 首頁
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        // 關於晶糸
        path: 'aboutpage',
        component: () => import('pages/AboutPage.vue'),
        meta: {
          title: '關於晶糸'
        }
      },
      {
        // 使用說明
        path: 'instructionspage',
        component: () => import('pages/InstructionsPage.vue'),
        meta: {
          title: '使用說明'
        }
      },
      {
        // 註冊
        path: 'signup',
        component: () => import('pages/SignUp.vue'),
        meta: {
          title: '註冊'
        }
      },
      {
        // 登入
        path: 'login',
        component: () => import('pages/LogIn.vue'),
        meta: {
          title: '登入'
        }
      },
      {
        // 購物車
        path: '...',
        component: () => import('pages/.vue'),
        meta: {
          title: '購物車'
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
