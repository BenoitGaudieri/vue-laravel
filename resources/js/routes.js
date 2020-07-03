// Main dependencies
import Vue from "vue";
import VueRouter from "vue-router";

// Import Pages components
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import NotFound from "./pages/NotFound.vue";

// Add Router to Vue
Vue.use(VueRouter);

// Set APP routes
const router = new VueRouter({
    mode: "history",
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "*",
            component: NotFound
        }
    ]
});

export default router;
