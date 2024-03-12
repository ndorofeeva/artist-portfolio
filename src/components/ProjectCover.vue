<script setup lang="ts">
import router from '../router/index';
import { useDisplay } from 'vuetify'
import { computed } from 'vue'

const { name } = useDisplay()

const props = defineProps<{
  imgSrc: string
  routeName: string
  title: string
  hoverImgSrc?: string
}>()

const goTo = () => {
  router.push({ name: props.routeName });
}

const mobile = computed(() => {
  return name.value == 'sm' || name.value =='xs'
})
</script>

<template>
  <div class="image-container" @click="goTo()">
    <v-img
      height="100%"
      cover
      class="image initial"
      :src=props.imgSrc
    />
    <v-img
      height="100%"
      cover
      :class="['image', 'hover', { 'mobile': mobile }]"
      v-if="hoverImgSrc && !mobile"
      :src=props.hoverImgSrc
    />
    <div :class="['title', 'hover', 'text-uppercase', { 'mobile': mobile }, { 'text-decoration-underline': mobile }]">
      <p>{{props.title}}</p>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  position: relative;
  cursor: pointer;
  height: 100%;
}

.hover {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: cursive;
  font-size: x-large;
  opacity: 0.5;
  background: rgba(1,1,1,0.5);
}

.image-container:hover .hover, .mobile{
  visibility: visible;
}

.image-container:hover .image.initial{
  visibility: hidden;
}
</style>