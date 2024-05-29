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
import CardStack from "@/views/CardStack.vue";
import HomePage from "@/views/HomePage.vue";
import CulturePage from "@/views/CulturePage.vue";
import AIPage from "@/views/AIPage.vue";
import TravelPage from "@/views/TravelPage.vue";
import AliGdp from "@/views/eco/AliGdp.vue";
import EcoGdp from "@/views/EcoGdp.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: CardStack
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/culture',
    name: '/CulturePage',
    component: CulturePage
  },
  {
    path: '/ai',
    component: AIPage
  },
  {
    path: '/eco',
    component: EcoGdp
  },
  {
    path: '/test',
    component: AliGdp
  },
  {
    path: '/travel',
    component: TravelPage
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
