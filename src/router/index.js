import Vue from 'vue'
import Router from 'vue-router'
import VaporDocs from '../components/docs/overview.vue';
import Documentation from '../components/docs/package.vue';
import TypeDocs from '../components/docs/type.vue';
import Package from '../components/package.vue';
import PackageInfo from '../components/catalog/package-info.vue';
import FAQ from '../components/faq.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: VaporDocs
    },
    {
      path: '/docs/',
      name: 'docs',
      component: VaporDocs
    },
    {
      path: '/docs/types/:type',
      name: 'type-docs',
      component: TypeDocs
    },
    {
      path: '/packages/:organization/:package/',
      name: 'package-info',
      component: Package,
      children: [
        {
          name: 'docs',
          path: 'docs',
          component: Documentation
        },
        {
          name: '/',
          path: 'package-home',
          component: PackageInfo
        }
      ]
    },
    {
      path: '/faq/:article',
      name: 'faq',
      component: FAQ
    }
  ]
})
