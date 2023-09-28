<template>
  <ul class="post-container">
    <li
      v-for="postData in placeholderdata"
      :key="postData.id"
      class="post-background"
    >
      <div class="carousel-container">
        <Carousel :images="postData.images" />
      </div>
      <div class="post-grid">
        <h3>{{ postData.title }}</h3>
        <p>{{ postData.description }}</p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import placeholderdata from "../data/placeholder-data.json";
import Carousel from "./Carousel.vue";
</script>

<style scoped lang="scss">
.post-container {
  list-style: none;
  justify-content: center;
  // Post Grid System
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 400px);
}

.post-background {
  background-color: gray;
  align-items: center;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.carousel-container {
  height: 230px;
  width: 100%;
}

.post-grid {
  display: grid;
  padding: 15px;
}
</style>
