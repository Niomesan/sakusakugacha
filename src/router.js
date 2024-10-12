import { createMemoryHistory, createWebHistory, createRouter } from 'vue-router'

import Homepage from './views/Home.vue'
import GachaView from './views/Gacha.vue'
import Preview from './views/Preview.vue'
import Cards from './views/Cards.vue'
import CardsView from './views/Cardspreview.vue'

const routes = [
    { path: '/', component: Homepage },
    { path: '/gacha', component: GachaView },
    { path: '/gachapreview', component: Preview },
    { path: '/cardsgacha', component: Cards },
    { path: '/cards', component: CardsView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
