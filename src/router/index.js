import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Registration from '../views/registration.vue'
import HouseRegistration from '../views/house_information.vue'
import house_details from '../views/house_details.vue'
import StudentDetail from '../views/registration_detail.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/house',
    name:  'HouseRegistration',
    component:  HouseRegistration
  },
  {
    path: '/house-details/:id',
    name:  'HouseDetails',
    component:  house_details
  },
  {
    path: '/student-details/:id',
    name:  'studentDetails',
    component:  StudentDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
