<template>
    <div class="app">
        <header-component></header-component>

        <main class="container">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
    components: {
        // HeaderComponent: HeaderComponent
        // abbreviabile:
        HeaderComponent
    }
};
</script>

<style lang="scss" scoped></style>
