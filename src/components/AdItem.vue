<template>
  <li
    v-for="postData in placeholderdata"
    :key="postData.id"
    class="post-background"
  >
    <div class="carousel-container">
      <Carousel :images="postData.images" />
    </div>
    <div class="post-details">
      <div class="price-grid">
        <h2>{{ postData.price }}</h2>
        <p>
          En {{ postData.typeofpurchase }}
          <i
            class="fa-solid fa-circle"
            :class="
              postData.typeofpurchase === 'Venta' ? 'venta-top' : 'alquiler-top'
            "
          ></i>
        </p>
      </div>
      <h3>{{ truncatedTitle(postData.title) }}</h3>
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
          >m²
        </p>
      </div>
      <div class="location-grid">
        <div class="location-grid-left">{{ postData.location }}</div>
        <div class="location-grid-right">
          <a href="" style="text-decoration: none"><div>Ver Detalles</div></a>
        </div>
      </div>
    </div>
  </li>
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

const truncatedTitle = (title: string) => {
  if (title.length > 60) {
    return `${title.slice(0, 60)}...`;
  }
  return title;
};
</script>

<style scoped lang="scss">
// .post-container {
// list-style: none;
// justify-content: center;
// Post Grid System
// display: grid;
// gap: 15px;
// grid-template-columns: repeat(3, 350px);
// }

.post-background {
  width: 360px;
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
  padding: 15px;
  h3 {
    margin: 8px 0;
  }
}

.price-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  p {
    justify-self: end;
    font-weight: 300;
    display: flex;
    align-items: center;
  }
}

.fa-circle {
  font-size: 13px;
  margin-left: 5px;
}

.alquiler-top {
  color: skyblue;
}

.venta-top {
  color: green;
}

.post-property-details {
  display: inline-flex;
  margin-top: 12px;
  .property-detail {
    margin-right: 10px;
  }
}

.location-grid {
  display: grid;
  margin-top: 12px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
  .location-grid-left {
    font-weight: 300;
  }
  .location-grid-right {
    justify-self: end;
    div {
      background: none;
      border-radius: 10px;
      padding: 8px 14px;
      border: 3px solid #000;
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
