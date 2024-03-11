
import type router from '@/router';
<template>
  <div class="container">
    <v-img src="/404.jpg" height="30vh"/>
    <div class="text-center">
      <p>It seems you're lost.</p>
      <p>
        <span>You can start again from the </span>
        <RouterLink to="/">Projects page </RouterLink>
      </p>

    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 15vh;
}
</style>