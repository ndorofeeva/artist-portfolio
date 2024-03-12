<script setup lang="ts">
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref } from 'vue'

const images = [23, 19, 21, 5, 7, 1, 11, 18, 32, 33, 34, 36, 26, 25, 24];
const titles = [
  'Cercedilla mountains',
  'Guadarrama mountain view',
  'Tbilisi cityscape',
  'Guadarrama streets',
  'Wildflowers',
  'French summer day',
  'Crimean forest',
  'Salzburg streets',
  'Plant still life',
  'Work space direct light',
  'Work space diffused light',
  'The kitchen',
  'Simplified shapes filled with gradient still life',
  'Simplified shapes filled with gradient still life',
  'Simplified shapes filled with gradient still life',
];
const imageSrc = images.map(number => `/PleinAirs/${number}.jpg`);

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
    <v-container class="plein-airs">
      <v-row>
        <v-col cols="5">
          <v-img cover height="100%" :src="imageSrc[0]" @click="onShow(0)"/>
        </v-col>
        <v-col cols="4">
          <v-img cover height="100%" :src="imageSrc[1]" @click="onShow(1)"/>
        </v-col>
        <v-col cols="3">
          <v-img cover height="100%" :src="imageSrc[2]" @click="onShow(2)"/>
        </v-col>  
      </v-row>

      <v-row>
        <v-col>
          <v-img cover height="100%" :src="imageSrc[3]" @click="onShow(3)"/>
        </v-col>
        <v-col>
          <v-img cover height="100%" :src="imageSrc[4]" @click="onShow(4)"/>
        </v-col>
        <v-col>
          <v-img cover height="100%" :src="imageSrc[5]" @click="onShow(5)"/>
        </v-col>
        <v-col>
          <v-img cover height="100%" :src="imageSrc[6]" @click="onShow(6)"/>
        </v-col>
        <v-col>
          <v-img cover height="100%" :src="imageSrc[7]" @click="onShow(7)"/>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-img cover height="100%" :src="imageSrc[8]" @click="onShow(8)"/>
        </v-col>
        <v-col>
          <v-img cover height="100%" :src="imageSrc[9]" @click="onShow(9)"/>
        </v-col>
        <v-col>
          <v-img cover height="100%" :src="imageSrc[10]" @click="onShow(10)"/>
        </v-col>
        <v-col cols="4">
          <v-img cover height="100%" :src="imageSrc[11]" @click="onShow(11)"/>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="2">
          <v-img cover height="100%" :src="imageSrc[12]" @click="onShow(12)"/>
        </v-col>
        <v-col>
          <v-img cover height="100%" :src="imageSrc[13]" @click="onShow(13)"/>
        </v-col>
        <v-col>
          <v-img cover height="100%" :src="imageSrc[14]" @click="onShow(14)"/>
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
.plein-airs img {
  cursor: pointer;
}
</style>
