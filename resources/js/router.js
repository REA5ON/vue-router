import { createRouter, createWebHistory } from "vue-router";
import User from "./components/UserComponent.vue";
import ExampleComponent from "./components/HomeComponent.vue";
import NotFoundComponent from "./components/NotFoundComponent.vue";

const routes = [
    {path: '/', component: ExampleComponent},
    {path: '/user', component: User},
    {path: '/:page(.*)*', component: NotFoundComponent}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
