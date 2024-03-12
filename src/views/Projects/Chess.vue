<script setup lang="ts">
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref } from 'vue'

const visibleRef = ref(false);
const indexRef = ref(0); // default 0
const imgsRef = ref([
  {src: '/Chess/6.png', title: 'Original, morning lighting + color, references'},
  {src: '/Chess/2.jpg', title: 'Morning chess match'},
  {src: '/Chess/1.png', title: 'Morning lighting variations'},
  {src: '/Chess/3.png', title: 'Evening progression + references'},
  {src: '/Chess/8.jpg', title: 'Festive evening town'},
  {src: '/Chess/5.png', title: 'Lighting variations + color, references'},
  {src: '/Chess/9.jpg', title: 'Night chess match'},
]);

const onShow = (index: number) => {
  visibleRef.value = true;
  indexRef.value = index;
}
const onHide = () => (visibleRef.value = false);
</script>

<template>
  <main>
    <v-container class="chess">
      <h1 class="text-center mt-3">Chess match</h1>
      <p class="text-center mb-8">Lighting scenarios for 3d set of Italian fishign town based on Kuba Kozłowski 3d set with character Lorenzo.</p>

      <h2 class="mb-3 mt-8">Summer morning</h2>
      <p class="mb-4 font-italic grey font-weight-regular">In the morning, while most of the town is sleeping or fishing, Lorenzo and his friend Gepetto meet 
        at the chess table in a quiet street, filled with the fragrance of summer flowers and lit by warm morning sunlight </p>
      <v-img @click="onShow(0)" src="/Chess/6.png" />
      <p class="mb-4 font-italic grey text-body-2">Original by Kuba Kozłowski</p>
      <v-img @click="onShow(1)" class="mb-2" src="/Chess/2.jpg" />
      <v-img @click="onShow(2)" src="/Chess/1.png" />
      <p class="text-center mt-2 font-italic grey text-body-2">Lighting variations</p>

      <h2 class="mb-3 mt-8">Festive town</h2>
      <p class="mb-4 font-italic grey font-weight-regular">Lorenzo doesn't like the noise of the busy lively town.
        So when the evening festivities begin and the town fills with people, sounds of conversations and music, both friends prefer to go rest at home.  
      </p>
      <v-img @click="onShow(3)" src="/Chess/3.png" />
      <p class="text-center mb-5 mt-2 font-italic grey text-body-2">Progression & references</p>
      <v-img @click="onShow(4)" src="/Chess/8.jpg" />

      <h2 class="mb-3 mt-8">Night retreat</h2>
      <p class="mb-4 font-italic grey font-weight-regular"> When the bars are closed, people gone home and the streets are silent again,
        it's time for a rematch for Lorenzo and his friend. Just one though, they don't want to miss the best fishing time tomorrow morning.
      </p>
      <v-img @click="onShow(5)" src="/Chess/5.png" />
      <p class="text-center mb-5 mt-2 font-italic grey text-body-2">Lighting variations + color & references</p>
      <v-img @click="onShow(6)" src="/Chess/9.jpg"/>
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
.chess img {
  cursor: pointer;
}
</style>