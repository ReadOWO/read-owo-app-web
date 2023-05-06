import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),//import.meta.env.BASE_URL
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../components/main-content.component.vue')
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('../components/main-content.component.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../components/login.component.vue')
        },
        {
            path: "/register",
            name: "Register",
            component: () => import("../components/register.component.vue"),
        }
    ]
})
export default router
