import { createRouter, createWebHistory } from 'vue-router'


import DashboardView from '@/view/DashboardView.vue'
import MapPage from '@/view/MapPage.vue'
import PlansPage from '@/view/PlansPage.vue'
import LoginPage from '@/view/LoginPage.vue'

const routes = [
{ path: '/', name: 'Dashboard', component: DashboardView},
{path:'/Login', name:'Login' , component: LoginPage},
{ path: '/Map', name: 'Map', component: MapPage },
{ path: '/Plans', name: 'Plans', component: PlansPage },
// {
//   path: '/profile',
//   name: 'Profile',
//   component: ProfilePage,
//   children:[
//     { path:'myTicket', name:'myTicket', component:() => import('@/view/profile/MyTicketPage.vue') },
//     { path:'massageAdmin', name:'massageAdmin', component:() => import('@/view/profile/massageAdminPage.vue') }
//   ]
// },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
