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
      <div class="post-details">
        <h2>{{ postData.price }}</h2>
        <h3>{{ postData.title }}</h3>
        <p>{{ truncatedDescription(postData.description) }}</p>
        <div class="post-property-details">
          <p class="property-detail">
            <span style="font-weight: bold">{{ postData.bedrooms }}</span>
            Dormitorios
          </p>
          <p class="property-detail">
            <span style="font-weight: bold">{{ postData.bathrooms }}</span>
            Baños
          </p>
          <p class="property-detail">
            <span style="font-weight: bold">{{ postData.squarefeet }}</span
            >mt2
          </p>
        </div>
        <div class="post-grid">
          <div class="post-grid-left">{{ postData.location }}</div>
          <div class="post-grid-right"><a href=""><button>Ver Detalles</button></a></div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import placeholderdata from "../data/placeholder-data.json";
import Carousel from "./Carousel.vue";

const truncatedDescription = (description: string) => {
  if (description.length > 90) {
    return `${description.slice(0, 90)}...`;
  }
  return description;
};
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
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 3px solid black;
}

.carousel-container {
  height: 250px;
  width: 100%;
}

.post-details {
  display: grid;
  padding: 15px;
  h3 {
    line-height: 35px;
  }
}

.post-property-details {
  display: inline-flex;
  margin-top: 12px;
  .property-detail {
    margin-right: 10px;
  }
}

.post-grid {
  display: grid;
  margin-top: 12px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
  .post-grid-left {
    font-weight: 300;
  }
  .post-grid-right {
    justify-self: end;
    button {
      background: none;
      border-radius: 10px;
      padding: 8px 14px;
      border: 2px solid black;
      font-size: 16px;
      color: #000;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        background-color: #000;
        color: #fff;
      }
    }
  }
}
</style>
