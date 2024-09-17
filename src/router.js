import { createMemoryHistory, createWebHistory, createRouter } from 'vue-router'

import Homepage from './views/Home.vue'
import GachaView from './views/Gacha.vue'

const routes = [
    { path: '/', component: Homepage },
    { path: '/gacha', component: GachaView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
