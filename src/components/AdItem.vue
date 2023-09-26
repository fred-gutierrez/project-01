<template>
  <ul class="post-container">
    <li
      v-for="postData in placeholderdata"
      :key="postData.id"
      class="post-background"
    >
      <div class="post-grid">
        <Carousel :images="postData.images" />
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
  // Post Grid System
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, minmax(280px, 1fr));
}

.post-background {
  background-color: gray;
  align-items: center;
  border-radius: 5px;
  box-shadow: 2px solid black;
}

.post-grid {
  display: grid;
}

.post-images {
  height: 100px;
  object-fit: cover;
}
</style>
