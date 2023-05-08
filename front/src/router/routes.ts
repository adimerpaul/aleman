import { RouteRecordRaw } from 'vue-router'
import MainLayout from 'layouts/MainLayout.vue'
import IndexPage from 'pages/IndexPage.vue'
import LoginPage from 'pages/LoginPage.vue'
import PlantelPage from 'pages/PlantelPage.vue'
import HistoriaPage from 'pages/HistoriaPage.vue'
import MisionVision from 'pages/MisionVision.vue'
import ValoresPage from 'pages/ValoresPage.vue'
import PlantelAdministrativoPage from 'pages/PlantelAdministrativoPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: IndexPage, meta: { requiresAuth: true } },
      { path: 'plantel', component: PlantelPage, meta: { requiresAuth: true } },
      { path: 'plantelAdministrativo', component: PlantelAdministrativoPage, meta: { requiresAuth: true } },
      { path: 'historia', component: HistoriaPage, meta: { requiresAuth: true } },
      { path: 'misionVision', component: MisionVision, meta: { requiresAuth: true } },
      { path: 'valores', component: ValoresPage, meta: { requiresAuth: true } }
    ]
  },
  {
    path: '/login',
    component: LoginPage
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
