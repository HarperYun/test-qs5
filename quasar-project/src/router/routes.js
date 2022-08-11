
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
