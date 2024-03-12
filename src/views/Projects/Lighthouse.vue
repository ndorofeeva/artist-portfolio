<script setup lang="ts">
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref } from 'vue'

const visibleRef = ref(false);
const indexRef = ref(0); // default 0
const imgsRef = ref([
  { src: '/Lighthouse/13.png', title: 'Originals from the film' },
  { src: '/Lighthouse/3.png', title: 'Colorscript with references' },
  { src: '/Lighthouse/12.png', title: 'Redesigned b&w frames and colorkeys' },
  { src: '/Lighthouse/14.png', title: 'Color keys detailed view' },
  { src: '/Lighthouse/16.png', title: 'Local colors' },
  { src: '/Lighthouse/15.png', title: 'Main frames with local colors applied' },
  { src: '/Lighthouse/17.png', title: 'Lighting breakdown' },
]);

const onShow = (index: number) => {
  visibleRef.value = true;
  indexRef.value = index;
}
const onHide = () => (visibleRef.value = false);
</script>

<template>
  <main>
    <v-container class="lighthouse">
      <h1 class="text-center mt-3">The Lighthouse</h1>
      <p class="text-center">For this project I was tasked with reverse engineering a black and white film and making color keys and lighting breakdown.</p>
      <p class="text-center mb-10">I chose 4 main sequences from the film "The Lighthouse":</p>
      <v-img @click="onShow(0)" src="/Lighthouse/13.png"/>
      <p class="text-center mb-10 mt-2 font-italic grey text-body-2">Originals from the film</p>
      <v-img @click="onShow(1)" src="/Lighthouse/3.png"/>
      <p class="text-center mb-10 mt-2 font-italic grey text-body-2">Colorscript with references</p>
      <v-img @click="onShow(2)" src="/Lighthouse/12.png" class="my-3"/>
      <p class="text-center mb-10 mt-2 font-italic grey text-body-2">Redesigned b&w frames and colorkeys</p>
      <v-img @click="onShow(3)" src="/Lighthouse/14.png" class="my-3"/>
      <p class="text-center mb-10 mt-2 font-italic grey text-body-2">Color keys detailed view</p>
      <v-img @click="onShow(4)" src="/Lighthouse/16.png" class="my-3"/>
      <p class="text-center mb-10 font-italic grey text-body-2">Local colors</p>
      <v-img @click="onShow(5)" src="/Lighthouse/15.png" class="my-3"/>
      <p class="text-center mb-10 mt-2 font-italic grey text-body-2">Main frames with local colors applied</p>
      <v-img @click="onShow(6)" src="/Lighthouse/17.png" class="my-3"/>
      <p class="text-center mb-10 mt-2 font-italic grey text-body-2">Lighting breakdown</p>
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
.lighthouse img {
  cursor: pointer;
}
</style>