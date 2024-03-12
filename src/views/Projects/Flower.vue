<script setup lang="ts">
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref } from 'vue'

const visibleRef = ref(false);
const indexRef = ref(0); // default 0
const imgsRef = ref([
  { src: '/Flower/17.png', title: 'B&w and color comps, references' },
  { src: '/The_girl_and_the_flower.jpg', title: 'Final illustration' },
  { src: '/Flower/20.png', title: 'Composition variations' },
  { src: '/Flower/19.png', title: 'Color exploration' },
]);

const onShow = (index: number) => {
  visibleRef.value = true;
  indexRef.value = index;
}
const onHide = () => (visibleRef.value = false);
</script>

<template>
  <main>
    <v-container class="flower">
      <h1 class="text-center mt-3">The Magic flower</h1>
      <p class="text-center mb-6">A young girl must cross an enchanted forest known for carrying strange spirits to find a 
        magic flower that will be the cure for her ailing grandma.</p>
      <div class="mb-3">
        <v-img @click="onShow(0)" cover src="/Flower/17.png" />
      </div>
      <div class="mb-3">
        <v-img @click="onShow(1)" cover src="/The_girl_and_the_flower.jpg" />
      </div>
      <div class="mb-3">
        <v-img @click="onShow(2)" cover src="/Flower/20.png" />
      </div>
      <p class="text-center mb-5 mt-2 font-italic grey text-body-2">Composition variations</p>
      <div>
        <v-img @click="onShow(3)" cover src="/Flower/19.png" />
      </div>
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
.flower img {
  cursor: pointer;
}
</style>
