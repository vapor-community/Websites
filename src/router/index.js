import Vue from 'vue'
import Router from 'vue-router'
import VaporDocs from '../components/docs/overview.vue';
import Documentation from '../components/docs/package.vue';
import Package from '../components/package.vue';
import PackageInfo from '../components/catalog/package-info.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'docs',
      component: VaporDocs
    },
    {
      path: '/docs/',
      name: 'docs',
      component: VaporDocs
    },
    {
      path: '/:organization/:package/',
      name: 'package-info',
      component: Package,
      children: [
        {
          name: 'docs',
          path: 'docs',
          component: Documentation
        },
        {
          name: 'package',
          path: 'package',
          component: PackageInfo
        }
      ]
    },
  ]
})
