<template>
  <div>
    <div class="carousel-container">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        alt="Property Image"
        class="post-images"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { images } = defineProps(["images"]);
</script>

<style scoped lang="scss">
/* reference https://css-tricks.com/css-only-carousel/ */
/* my type of carousel https://codepen.io/luxonauta/pen/QWEWvmB */

.carousel-container {
  text-align: center;
  position: relative;
}

.post-images {
  max-width: 100%;
  max-height: 300px;
  transition: opacity 0.3s ease-in-out;
}

.carousel-controls {
  text-align: center;
  margin-top: 10px;
}
</style>
