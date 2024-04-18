<script setup lang="ts">
import router from '../router/index';
import { useDisplay } from 'vuetify'
import { computed } from 'vue'

const { name } = useDisplay()

const props = withDefaults(defineProps<{
  imgSrc: string
  routeName: string
  title: string
  hoverImgSrc?: string
  light: boolean
}>(), {
  light: false
})

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
      :class="['image', { 'initial': !mobile }]"
      :src=props.imgSrc
    />
    <v-img
      height="100%"
      cover
      :class="['image', 'hover', { 'mobile': mobile }]"
      v-if="hoverImgSrc && !mobile"
      :src=props.hoverImgSrc
    />
    <div :class="['title', 'hover', 'text-uppercase', { 'mobile': mobile }, { 'text-decoration-underline': mobile }, { 'light': light }]">
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
  background: rgba(1,1,1,0.3);
  color: rgba(255, 255, 255, 0.6);
}

.title p {
  padding: 0 50px;
  background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0.8) 25%, rgba(0, 0, 0, 0.8) 75%, rgba(0,0,0,0) 100%);
}

.title.light p {
  padding: 0 50px;
  background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(21, 12, 20, 0.6) 25%, rgba(21, 12, 20, 0.6) 75%, rgba(0,0,0,0) 100%);
}

.image-container:hover .hover, .mobile{
  visibility: visible;
}

.image-container:hover .image.initial{
  visibility: hidden;
}
</style>