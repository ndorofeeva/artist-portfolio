<script setup lang="ts">
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref } from 'vue'

const visibleRef = ref(false);
const indexRef = ref(0); // default 0
const imgsRef = ref([
  { src: '/Park/2.png', title: 'Composition variations and references' },
  { src: '/Park/2.jpg', title: 'Final illustration' },
  { src: '/Park/3.png', title: 'Composition variations as matrix studies' },
  { src: '/Park/4.png', title: 'Color exploration' },
]);

const onShow = (index: number) => {
  visibleRef.value = true;
  indexRef.value = index;
}
const onHide = () => (visibleRef.value = false);
</script>

<template>
  <main>
    <v-container class="park">
      <h1 class="text-center my-3">Silent night</h1>
      <p class="text-center">Illustration of the story about William, an elderly widower, who comes every evening to the same bench in the park</p> 
      <p class="text-center mb-10">where he used to spend happy days with his wife Dorothy.</p>
      <v-img @click="onShow(0)" src="/Park/2.png" class="my-3"/>
      <p class="text-center mb-5 mt-2 font-italic grey text-body-2">Composition variations and references</p>
      <v-img @click="onShow(1)" src="/Park/2.jpg" class="my-3"/>
      <v-img @click="onShow(2)" src="/Park/3.png" class="my-3"/>
      <p class="text-center mb-5 mt-2 font-italic grey text-body-2">Composition variations as matrix studies</p>
      <v-img @click="onShow(3)" src="/Park/4.png" class="my-3"/>
      <p class="text-center mb-5 mt-2 font-italic grey text-body-2">Color exploration</p>

      
    </v-container>

    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
      rotateDisabled
      :zoomScale="0.5"
    ></vue-easy-lightbox>
  </main>
</template>

<style>
.park img {
  cursor: pointer;
}
</style>
