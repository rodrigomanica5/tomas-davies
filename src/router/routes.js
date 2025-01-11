import { services } from 'src/services.js'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Home (IndexPage)
      {
        name: 'home-page',
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      // Service Detail
      {
        path: 'service-detail/:slug',
        name: 'service-detail',
        component: () => import('pages/ServiceDetails.vue'),
        props: route => {
          const foundService = services.find(s => s.slug === route.params.slug)
          return foundService
            ? {
                serviceTitle: foundService.title,
                serviceImage: foundService.image,
                serviceDescription: foundService.description
              }
            : {}
        }
      },
      // Thank You Page
      {
        path: 'thank-you',
        name: 'thank-you',
        component: () => import('pages/ThankYou.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes