const routes = [
  {
    path: '/dynamic1',
    name: 'dynamic1',
    hidden: true,
    component: () => import('@/views/DynamicViews/1.vue')
  },
  {
    path: '/dynamic2',
    name: 'dynamic2',
    component: () => import('@/views/DynamicViews/2.vue')
  },
  {
    path: '/dynamic3',
    name: 'dynamic3',
    component: () => import('@/views/DynamicViews/3.vue')
  },
  {
    path: '/dynamic4',
    name: 'dynamic4',
    component: () => import('@/views/DynamicViews/4.vue')
  },
]

export default routes