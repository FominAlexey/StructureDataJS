import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Queue from '../views/Queue/Queue.vue'
import Stack from '../views/Stack/Stack.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Main
        },
        {
            path: '/Queue',
            name: 'Queue',
            component: Queue
        },
        ,
        {
            path: '/Stack',
            name: 'Stack',
            component: Stack
        }
    ]
})

export default router