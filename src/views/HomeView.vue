<script setup lang="ts">
import ProjectCover from '../components/ProjectCover.vue'
import { useDisplay } from 'vuetify'
import { computed } from 'vue'

const { name } = useDisplay()

const mobile = computed(() => {
  return name.value == 'sm' || name.value =='xs'
})
</script>

<template>
  <main>
    <v-container>
    <v-row>
      <v-col :cols="12">
        <ProjectCover
          imgSrc="/The_girl_and_the_flower.jpg"
          hoverImgSrc="The_girl_and_the_flower_hover.jpg"
          routeName="Flower"
          title="The magic flower"
          :light="true"
        />
      </v-col>
      <v-col :cols="12">
        <ProjectCover
          imgSrc="/Festive town.jpg"
          hoverImgSrc="Festive town.jpg"
          routeName="Chess"
          title="Chess match"
          :light="true"
        />
      </v-col>
      <v-col :cols="12">
        <ProjectCover
          imgSrc="/Flowers_park.jpg"
          hoverImgSrc="Flowers_park_glow.jpg"
          routeName="Park"
          title="Silent night"
        />
      </v-col>
      <v-col :cols="12">
        <ProjectCover
          imgSrc="/Faraway.png"
          hoverImgSrc="Faraway_hover.png"
          routeName="Faraway"
          :light="true"
        />
      </v-col>
    </v-row>
  </v-container>
  </main>
</template>
