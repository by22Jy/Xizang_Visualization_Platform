import Vue from 'vue'
import VueRouter from 'vue-router'
import MbiIndexPage from '@/views/MbiIndexPage.vue'
import GdpPage from '@/views/GdpPage.vue'
import MapPage from '@/views/MapPage.vue'
import ScreenPage from '@/views/ScreenPage.vue'
import WordCloudPage from '@/views/WordCloudPage.vue'
import PopularAttractionPage from "@/views/PopularAttractionPage.vue";
import TourismStrategyPage from "@/views/TourismStrategyPage.vue";
import testPage from "@/views/TestPage.vue";

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
