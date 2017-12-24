import Vue from 'vue'
import Router from 'vue-router'
import VaporDocs from '../components/docs/overview.vue';
import VaporPackageDocs from '../components/docs/package.vue';
import CatalogPackage from '../components/catalog/package.vue';

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
      path: '/package/:organization/:package/',
      name: 'package-info',
      component: CatalogPackage
    },
    {
      path: '/docs/:organization/:package/',
      name: 'package-docs',
      component: VaporPackageDocs
    }
  ]
})
