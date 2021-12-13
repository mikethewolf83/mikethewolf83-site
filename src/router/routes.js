
const routes = [
  {
    path: '/',
    component: () => import('layouts/PortfolioLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'knowledge', component: () => import('pages/Knowledge.vue') },
      { path: 'portfolio', component: () => import('pages/Portfolio.vue') },
      { path: 'resume', component: () => import('pages/Resume.vue') },
      { path: 'contact', component: () => import('pages/Contact.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
