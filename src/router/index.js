import Vue from 'vue'
import Router from 'vue-router'
import Home from '../Home.vue';
import VaporDocs from '../components/catalog/overview.vue';
import PackageDocsOverview from '../components/docs/package.vue';
import TypeDocs from '../components/docs/type.vue';
import AllPackages from '../components/catalog/overview.vue';
import PackageInfo from '../components/catalog/package-info.vue';
import FAQ from '../components/faq.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Documentation',
      path: '/docs/',
      component: VaporDocs
    },
    {
      name: 'Package Catalog',
      path: '/catalog',
      component: AllPackages,
    },
    {
      name: 'Package Home',
      path: '/catalog/:organization/:package/',
      component: PackageInfo
    },
    {
      name: 'Package Docs',
      path: '/catalog/:organization/:package/docs',
      component: PackageDocsOverview,
    },
    {
      name: 'Type Docs',
      path: '/catalog/:organization/:package/docs/types/:type',
      component: TypeDocs
    },
    {
      path: '/faq/:article',
      name: 'faq',
      component: FAQ
    }
  ]
})
