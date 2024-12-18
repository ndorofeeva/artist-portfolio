<script setup lang="ts">
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref } from 'vue'

window.scrollTo(0,0);
const visibleRef = ref(false);
const indexRef = ref(0); // default 0
const imgsRef = ref([
  {src: '/Faraway/story_beats.png', title: 'Story beats in bw'},
  {src: '/Faraway/1.jpg', title: 'Color key for a hospital keyframe'},
  {src: '/Faraway/whale props.png', title: 'Prop design for a fruit basket shaped as a whale'},
  {src: '/Faraway/cupboards_group.png', title: 'Prop group cupboards for a hospital room layout'},
  {src: '/Faraway/props_group_bedside.png', title: 'Prop group bedside table for a hospital room layout'},
  {src: '/Faraway/bottles.png', title: 'Prop design for medicine bottles'},
  {src: '/Faraway/props_bedside.png', title: 'Prop designs for a bedside table'},
  {src: '/Faraway/desert_wall.png', title: 'Blender model + paintover for a top of the desert wall'},
  {src: '/Faraway/unknown.png', title: 'Blender model with lighting for Unknown'},
  {src: '/Faraway/boy.png', title: 'Boy clothing exploration'},
  {src: '/Faraway/raven-dragon.png', title: 'Monster exploration'},
]);

const onShow = (index: number) => {
  visibleRef.value = true;
  indexRef.value = index;
}
const onHide = () => (visibleRef.value = false);
</script>

<template>
  <main>
    <div class="faraway">
      <h1 class="text-center mt-3">Faraway</h1>
      <p class="text-center">The story of a young boy trying to get home. He faces his own fears on the journey back to life.</p>
      <p class="text-center mb-10">In the end the boy prevails and wakes up in a hospital with his mom holding his hand.</p>

      <p class=" mb-5"> The whole story can be viewed in <RouterLink to="/faraway-pdf">The art book of Faraway</RouterLink></p>

      <v-img @click="onShow(0)" src="/Faraway/story_beats.png" />
      <h3 class="mb-10 text-grey-lighten-1 text-center">Story beats in bw</h3>

      <div class="d-flex justify-center">
        <v-img @click="onShow(1)" src="/Faraway/1.jpg" width="30%" max-width="30%"/>
      </div>
      <h3 class="mb-10 text-grey-lighten-1 text-center">Color key for a hospital keyframe</h3>

      <v-img @click="onShow(2)" src="/Faraway/whale props.png"/>
      <h3 class="mb-10 text-grey-lighten-1 text-center">Prop design for a fruit basket shaped as a whale</h3>

      <v-row dense>
        <v-col cols="3" class="align-self-center">
          <v-img @click="onShow(4)" src="/Faraway/props_group_bedside.png"/>
        </v-col>
        <v-col>
          <v-img @click="onShow(3)" src="/Faraway/cupboards_group.png"/>
        </v-col>
      </v-row>
      <h3 class="mb-10 text-grey-lighten-1 text-center">Prop groups for a hospital room layout</h3>

      <v-img @click="onShow(5)" src="/Faraway/bottles.png" width="60%" class="mx-auto"/>
      <h3 class="mb-10 mt-2 text-grey-lighten-1 text-center">Prop design for medicine bottles</h3>

      <v-img @click="onShow(6)" src="/Faraway/props_bedside.png"/>
      <h3 class="mb-10 text-grey-lighten-1 text-center">Prop designs for a bedside table</h3>
      
      <h1 class="text-center mb-3">Early development</h1>
      <v-img @click="onShow(7)" src="/Faraway/desert_wall.png" />
      <h3 class="mb-10 text-grey-lighten-1 text-center">Blender model + paintover for a top of the desert wall</h3>
      <v-img @click="onShow(8)" src="/Faraway/unknown.png" />
      <h3 class="mb-10 text-grey-lighten-1 text-center">Blender model with lighting for Unknown</h3>
      <v-img @click="onShow(9)" src="/Faraway/boy.png" />
      <h3 class="mb-10 text-grey-lighten-1 text-center">Boy clothing exploration</h3>
      <v-img @click="onShow(10)" src="/Faraway/raven-dragon.png" />
      <h3 class="mb-10 text-grey-lighten-1 text-center">Monster exploration</h3>
    </div>

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
.faraway img {
  cursor: pointer;
}
</style>
