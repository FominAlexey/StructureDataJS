import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Queue from '../views/Queue/Queue.vue'
import Stack from '../views/Stack/Stack.vue'
import List from '../views/List/List.vue'

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
        {
            path: '/Stack',
            name: 'Stack',
            component: Stack
        },
        {
            path: '/List',
            name: 'List',
            component: List
        }
    ]
})

export default router