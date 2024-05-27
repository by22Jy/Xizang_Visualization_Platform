import Vue from 'vue'
import VueRouter from 'vue-router'
import MbiIndexPage from '@/views/map/MbiIndexPage.vue'
import GdpPage from '@/views/map/GdpPage.vue'
import MapPage from '@/views/map/MapPage.vue'
import ScreenPage from '@/views/map/ScreenPage.vue'
import WordCloudPage from '@/views/map/WordCloudPage.vue'
import PopularAttractionPage from '@/views/map/PopularAttractionPage.vue'
import TourismStrategyPage from '@/views/map/TourismStrategyPage.vue'
import testPage from '@/views/map/TestPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/screenPage'
  },
  {
    path: '/screenPage',
    component: ScreenPage
  },
  {
    path: '/mbi_index',
    component: MbiIndexPage
  },
  {
    path: '/gdpRank',
    component: GdpPage
  },
  {
    path: '/map',
    component: MapPage
  },
  {
    path: '/word',
    component: WordCloudPage
  },
  {
    path: '/attraction',
    component: PopularAttractionPage
  },
  {
    path: '/tourism',
    component: TourismStrategyPage
  },
  {
    path: '/lasa',
    component: testPage
  }
]

const router = new VueRouter({
  routes
})

export default router
