export const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        name: 'Login',
        path: 'login',
        component: () => import('@/pages/auth/login.vue'),
      },
      {
        name: 'Register',
        path: 'register',
        component: () => import('@/pages/auth/register.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/common/[...error].vue'),
      },
      {
        path: 'no-existence',
        component: () => import('@/pages/common/[...error].vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/common/[...error].vue'),
      },
    ],
  },
  {
    name: 'Home',
    path: '/home',
    component: () => import('@/layouts/default.vue'),
    meta: { requiresAuth: true, role: 'admin' },
    children: [
      {
        path: '/',
        component: () => import('@/pages/home/index.vue'),
      },
    ],
  },
  {
    name: 'Data',
    path: '/data',
    component: () => import('@/layouts/default.vue'),
    meta: { requiresAuth: true, role: 'admin' },
    children: [
      {
        name: 'Service',
        path: 'service',
        component: () => import('@/pages/home/index.vue'),
      },
      {
        name: 'Process',
        path: 'process',
        component: () => import('@/pages/home/index.vue'),
      },
      {
        name: 'Visualization',
        path: 'visualization',
        component: () => import('@/pages/home/index.vue'),
      },
      /* { // UUID型
        name: '数据项',
        path: 'item/:uuid',
        component: () => import('@/pages/share/item.vue'),
        props: true,
      }, */
    ],
  },
  {
    path: '/user',
    component: () => import('@/layouts/horizontal.vue'),
    meta: { requiresAuth: true, role: 'user' },
    children: [],
  },
]
