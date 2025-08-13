<script setup lang="ts">
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref } from 'vue'

const images = [26, 27, 2, 16, 17, 12, 15];
const titles = [
  'Magical flower',
  'Memories at the park',
  'Salzburg at sunset',
  'High key cityscape',
  'Autumn vibes',
  'Home memories',
  'Kazbegi valley',
];
const imageSrc = images.map(number => `/PersonalIllustrations/${number}.jpg`);

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
    <v-container class="personal-illustrations">
      <v-row dense>
        <v-col>
          <v-img cover height="100%" :src="imageSrc[0]" @click="onShow(0)"/>
        </v-col>
        <v-col>
          <v-img cover height="100%" :src="imageSrc[1]" @click="onShow(1)"/>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col>
          <v-img cover height="100%" :src="imageSrc[2]" @click="onShow(2)"/>
        </v-col>
        <v-col cols="4">
          <v-img cover height="100%" :src="imageSrc[3]" @click="onShow(3)"/>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col>
          <v-img cover height="100%" :src="imageSrc[4]" @click="onShow(4)"/>
        </v-col>
        <v-col>
          <v-img cover height="100%" :src="imageSrc[5]" @click="onShow(5)"/>
        </v-col>
        <v-col>
          <v-img cover height="100%" :src="imageSrc[6]" @click="onShow(6)"/>
        </v-col>
      </v-row>
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
.personal-illustrations img {
  cursor: pointer;
}
</style>