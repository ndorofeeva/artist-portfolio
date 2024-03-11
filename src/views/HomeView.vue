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
      <v-col :cols="mobile ? 12 : 6">
        <ProjectCover
          imgSrc="/Lighthouse3.jpg"
          hoverImgSrc="Lighthouse2.jpg"
          routeName="Lighthouse"
          title="The lighthouse"
        />
      </v-col>
      <v-col :cols="mobile ? 12 : 6">
        <ProjectCover
          imgSrc="/The_girl_and_the_flower.jpg"
          hoverImgSrc="The_girl_and_the_flower_hover.jpg"
          routeName="Flower"
          title="The magic flower"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="mobile ? 12 : 6">
        <ProjectCover
          imgSrc="/Flowers_park.jpg"
          hoverImgSrc="Flowers_park_glow.jpg"
          routeName="Park"
          title="Silent night"
        />
      </v-col>
      <v-col :cols="mobile ? 12 : 6">
        <ProjectCover
          imgSrc="/Morning_chess.jpg"
          hoverImgSrc="Morning_chess_hover.jpg"
          routeName="Chess"
          title="Chess match"
        />
      </v-col>
    </v-row>
  </v-container>
  </main>
</template>
