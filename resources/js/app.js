/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

import Vue from "vue";

// Import main Vue Component and Routes
import App from "./App.vue";
import router from "./routes.js";

const app = new Vue({
    el: "#app",
    // router: router,
    router,
    render: h => h(App)
});
