<template>
  <header class="main-header">
    <nav class="navbar navbar-expand navbar-dark bg-primary">
      <a class="navbar-brand" href="#">{{ title }}</a>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "The Vue"
    };
  }
};
</script>
