import { createRouter, createWebHistory } from 'vue-router'
import Page1View from '../views/page1/Page1View.vue'
import Page2View from '../views/page2/Page2View.vue'
import Page3View from '../views/page3/Page3View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/page1' },
    {
      path: '/page1',
      children: [
        {
          path: '',
          name: 'page1',
          component: Page1View,
          props: route => ({ section: 'none' })
        },
        {
          path: 'section1',
          name: 'page1-section1',
          component: Page1View,
          props: route => ({ section: 'Section 1' })
        },
        {
          path: 'section2',
          name: 'page1-section2',
          component: Page1View,
          props: route => ({ section: 'Section 2' })
        },
        {
          path: 'section3',
          name: 'page1-section3',
          component: Page1View,
          props: route => ({ section: 'Section 3' })
        },
        {
          path: 'section4',
          name: 'page1-section4',
          component: Page1View,
          props: route => ({ section: 'Section 4' })
        },
      ],
    },
    {
      path: '/page2',
      children: [
        {
          path: '',
          name: 'page2',
          component: Page2View,
          props: route => ({ section: 'none' })
        },
        {
          path: 'section1',
          name: 'page2-section1',
          component: Page2View,
          props: route => ({ section: 'Section 1' })
        },
        {
          path: 'section2',
          name: 'page2-section2',
          component: Page2View,
          props: route => ({ section: 'Section 2' })
        },
        {
          path: 'section3',
          name: 'page2-section3',
          component: Page2View,
          props: route => ({ section: 'Section 3' })
        },
        {
          path: 'section4',
          name: 'page2-section4',
          component: Page2View,
          props: route => ({ section: 'Section 4' })
        },
      ],
    },
    {
      path: '/page3',
      children: [
        {
          path: '',
          name: 'page3',
          component: Page3View,
          props: route => ({ section: 'none' })
        },
        {
          path: 'section1',
          name: 'page3-section1',
          component: Page3View,
          props: route => ({ section: 'Section 1' })
        },
        {
          path: 'section2',
          name: 'page3-section2',
          component: Page3View,
          props: route => ({ section: 'Section 2' })
        },
        {
          path: 'section3',
          name: 'page3-section3',
          component: Page3View,
          props: route => ({ section: 'Section 3' })
        },
        {
          path: 'section4',
          name: 'page3-section4',
          component: Page3View,
          props: route => ({ section: 'Section 4' })
        },
      ],
    },
  ],
})

export default router
