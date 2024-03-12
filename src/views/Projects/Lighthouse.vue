<script setup lang="ts">
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref } from 'vue'

const images = [13, 3, 12, 14, 16, 15, 17];
const titles = [
  'Originals from the film',
  'Colorscript with references',
  'Redesigned b&w frames and colorkeys',
  'Color keys detailed view',
  'Local colors',
  'Main frames with local colors applied',
  'Lighting breakdown',
];
const imageSrc = images.map(number => `/Lighthouse/${number}.png`);

const visibleRef = ref(false);
const indexRef = ref(0); // default 0
const imgsRef = ref(imageSrc.map((src, index) => {return {src: src, title: titles[index]}}));

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
      <v-img @click="onShow(0)" :src="imageSrc[0]"/>
      <p class="text-center mb-10 mt-2 font-italic grey text-body-2">{{ titles[0] }}</p>
      <v-img @click="onShow(1)" :src="imageSrc[1]"/>
      <p class="text-center mb-10 mt-2 font-italic grey text-body-2">{{ titles[1] }}</p>
      <v-img @click="onShow(2)" :src="imageSrc[2]" class="my-3"/>
      <p class="text-center mb-10 mt-2 font-italic grey text-body-2">{{ titles[2] }}</p>
      <v-img @click="onShow(3)" :src="imageSrc[3]" class="my-3"/>
      <p class="text-center mb-10 mt-2 font-italic grey text-body-2">{{ titles[3] }}</p>
      <v-img @click="onShow(4)" :src="imageSrc[4]" class="my-3"/>
      <p class="text-center mb-10 font-italic grey text-body-2">{{ titles[4] }}</p>
      <v-img @click="onShow(5)" :src="imageSrc[5]" class="my-3"/>
      <p class="text-center mb-10 mt-2 font-italic grey text-body-2">{{ titles[5] }}</p>
      <v-img @click="onShow(6)" :src="imageSrc[6]" class="my-3"/>
      <p class="text-center mb-10 mt-2 font-italic grey text-body-2">{{ titles[6] }}</p>
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