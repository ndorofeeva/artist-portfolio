import type router from '@/router';

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { computed } from 'vue'

const { name } = useDisplay()

const mobile = computed(() => {
  return name.value == 'sm' || name.value =='xs'
})
</script>

<template>
  <div :class="{ 'container': !mobile }">
    <div v-if="mobile">
      <v-img height="40vh" class="my-8" src="/404.jpg"/>
      <div class="text-center">
        <p class="text-h1">404</p>
        <p>It seems you're lost.</p>
        <p>
          <span>Let me guide you back </span>
          <RouterLink to="/"> Home </RouterLink>
        </p>
      </div>
    </div>
    <v-row v-else>
      <v-col>
        <v-img src="/404.jpg" height="50vh"/>
      </v-col>
      <v-col class="text-center">
        <p class="text-h1">404</p>
        <p>It seems you're lost.</p>
        <p>
          <span>Let me guide you back </span>
          <RouterLink to="/"> Home </RouterLink>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.container {
  margin-top: 15vh;
  padding: 0 15vh;
}

.container .text-center {
  align-self: center;
}
</style>