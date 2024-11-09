<script setup lang="ts">
import VuePdfEmbed from 'vue-pdf-embed'

// optional styles
import 'vue-pdf-embed/dist/styles/annotationLayer.css'
import 'vue-pdf-embed/dist/styles/textLayer.css'

// either URL, Base64, binary, or document proxy
const pdfSource = '/Faraway/The_Art_Of_Faraway.pdf'

window.scrollTo(0,0);
</script>

<template>
  <div>
    <h2 class="text-center mt-10">The art book of Faraway showcasing the whole story.</h2>
    <h3 class="text-center mb-5">Art was made by a group of amazing artists, all credited in the book.</h3>
    <p class="mb-5"> <RouterLink to="/faraway">Back</RouterLink> to the project</p>
    <VuePdfEmbed annotation-layer text-layer :source="pdfSource" />
  </div>
</template>
