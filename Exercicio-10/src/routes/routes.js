import {createRouter, createWebHistory} from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Cadastro from '../views/newTalent.vue'

const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes:[
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/sobre',
                name: 'Sobre',
                component: About
            },
            {
                path: '/cadastro',
                name: 'Cadastro',
                component: Cadastro
            }
        ]
})

export default router