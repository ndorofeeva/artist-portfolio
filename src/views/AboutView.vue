<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { computed } from 'vue'

const { name } = useDisplay()

const mobile = computed(() => {
  return name.value == 'sm' || name.value =='xs'
})
</script>

<template>
  <div class="about">
    <div class="about_container">
      <v-row class="mt-10">
        <v-spacer/>
        <v-col :cols="mobile ? 12 : 4" :class="{ 'text-mobile' : mobile }">
          <p class="mb-6 text-h4 text-center">Greetings!</p>
          <p>I'm Natalia Dorofeieva, digital and traditional painter from Crimea, Ukraine, based in Madrid.</p>
          <p class="mb-5">You can find here my watercolor & gouache along with digital plein airs, illustrations and some visdev projects.</p>
          <p class="mb-5">Inspired by nature and beautiful spanish architecture.
            Besides art, I love cycling, hiking, travel and photography.</p>
          <p>I would love to connect!</p>
        </v-col>
        <v-col :cols="mobile ? 12 : 4">
          <v-img max-height="20em" src="/about3.jpg"/>
        </v-col>
        <v-spacer/>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <p>Contact : nataliadorofeieva@gmail.com</p>
          <div class="icon_imgs mt-3">
            <a href="https://www.instagram.com/natadoroart/" target="_blank">
              <v-img max-height="15px" src="/icons/instagram.png" />
            </a>
            <a href="https://www.linkedin.com/in/natalia-dorofeieva/" target="_blank">
              <v-img max-height="15px" src="/icons/linkedin.png" />
            </a>
            <a href="mailto:nataliadorofeieva@gmail.com">
              <v-img max-height="15px" src="/icons/gmail.png" />
            </a>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style>
.about_container {
  margin: auto;
}

.text-mobile {
  padding-left: 10%;
  padding-right: 10%;
}

.icon_imgs {
  opacity: 0.8;
}

.icon_imgs a {
  width: 50px;
  padding: 5px;
}

.icon_imgs, .icon_imgs a {
  display: inline-block;
}

.icon_imgs:hover a{
  opacity: 0.5;
}

.icon_imgs a:hover {
  opacity: 1;
}
</style>
