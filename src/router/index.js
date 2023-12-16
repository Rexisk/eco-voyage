import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalculatorView from '../views/CalculatorView.vue'
import RentalView from '../views/RentalView.vue'
import LocationView from '../views/LocationView.vue'
import AccomodationView from '../views/AccomodationView.vue'
import TravelPackage1 from '../views/TravelPackageView1.vue'
import TravelPackage2 from '../views/TravelPackageView2.vue'
import TravelPackage3 from '../views/TravelPackageView3.vue'
import OffsetView from '../views/OffsetView.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/OffsetCarbon',
    name: 'OffsetView',
    component: OffsetView
  },
  {
    path: '/TravelPackage1',
    name: 'TravelPackage1',
    component: TravelPackage1
  },
  {
    path: '/TravelPackage2',
    name: 'TravelPackage2',
    component: TravelPackage2
  },
  {
    path: '/TravelPackage3',
    name: 'TravelPackage3',
    component: TravelPackage3
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: CalculatorView
  },
  {
    path: '/accoms',
    name: 'Accomodation',
    component: AccomodationView
  },
  {
    path: '/rental',
    name: 'rental',
    component: RentalView
  },
  {
    path: '/location',
    name: 'location',
    component: LocationView
  }
  // {
  //   path: '/calculator',
  //   name: 'calculator',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/CalculatorView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router