<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useDisplay } from 'vuetify'
import { reactive, computed } from 'vue'

const { name } = useDisplay()
const react = reactive({drawer: false});

const mobile = computed(() => {
  return name.value == 'sm' || name.value =='xs'
})
</script>

<template>
  <v-app class="app-wrapper">
    <header class="text-uppercase">
      <RouterLink to="/"> Natalia Dorofeieva </RouterLink>

      <div v-if="!mobile">
        <nav>
          <RouterLink to="/">Illustrations</RouterLink>
          <RouterLink to="/plein-airs">PleinAirs</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
      <v-icon v-else :icon="react.drawer ? 'mdi-close' : 'mdi-menu'" class="pr-3" @click.stop="react.drawer = !react.drawer"></v-icon>
      <v-navigation-drawer
        v-model="react.drawer"
        location="bottom"
        :scrim="false"
        temporary
        :class="['full-height', { 'menu': react.drawer }]"
      >
        <nav class="mobile-menu">
          <RouterLink class="d-block text-center py-5" to="/">Projects</RouterLink>
          <RouterLink class="d-block text-center py-5" to="/plein-airs">PleinAirs</RouterLink>
          <RouterLink class="d-block text-center py-5" to="/personal-illustrations">Personal illustrations</RouterLink>
          <RouterLink class="d-block text-center py-5" to="/about">About</RouterLink>
        </nav>
      </v-navigation-drawer>
    </header>

    <RouterView v-if="!mobile || !react.drawer"/>
  </v-app>
</template>

<style scoped>
  header {
    line-height: 1.5;
    max-height: 100vh;
    display: flex;
    justify-content: space-between;
    font-size: large;
    font-weight: 200;
  }

  a {
    padding: 0 20px;
    text-decoration: none;
    color: inherit;
    opacity: 0.9;
  }

  a:visited {
    color: inherit;
  }
  
  a:hover {
    opacity: 1;
  }

  nav a.router-link-active {
    opacity: 1;
  }

  .menu {
    top: 65px;
  }

  .mobile-menu a {
    font-weight: 400;
    font-size: 1.5rem;
  }

  :global(.app-wrapper .v-application__wrap) {
    min-height: fit-content;
  }
</style>
