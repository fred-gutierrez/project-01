<template>
  <div class="card-container">
    <a
      v-for="(item, index) in cardItems"
      class="card"
      :style="{
        backgroundImage: `linear-gradient(rgba(80, 80, 80, ${
          item.hovered ? 0.2 : 0.6
        }),
rgba(80, 80, 80, ${item.hovered ? 0.2 : 0.6})), url('${item.imageUrl}')`,
      }"
      :key="index"
      :href="item.link"
      @mouseover="item.hovered = true"
      @mouseleave="item.hovered = false"
      target="_blank"
    >
      <div class="card-text-container">
        <p
          class="card-text-typeOfProperty"
          v-html="breakWords(item.typeOfProperty)"
        ></p>
        <button class="card-cta" @click="item.link">Ver Mas</button>
      </div>
    </a>
    <a class="publish-container" href="">
      <div class="publish-cta">
        ¡Publica tu propiedad! <i class="fa-regular fa-circle-plus fa-lg"></i>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const cardItems = ref([
  {
    typeOfProperty: "Casas",
    link: "google.com",
    imageUrl: "src/assets/homepage/luxury_house.jpg",
    hovered: false,
  },
  {
    typeOfProperty: "Apartamentos",
    link: "google.com",
    imageUrl: "src/assets/homepage/apartment_interior.jpg",
    hovered: false,
  },
  {
    typeOfProperty: "Bodegas",
    link: "google.com",
    imageUrl: "src/assets/homepage/warehouse.jpg",
    hovered: false,
  },
  {
    typeOfProperty: "Locales Comerciales",
    link: "google.com",
    imageUrl: "src/assets/homepage/commercial_premise.jpg",
    hovered: false,
  },
]);

const breakWords = (text: string) => {
  return text.replace(" ", "<br />");
};
</script>

<style scoped lang="postcss">
.card-container {
  margin: 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

.card {
  text-align: center;
  text-decoration: none;
  width: calc(75%);
  height: 360px;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
}

.card-text-container {
  margin-top: 190px;
  font-weight: bold;
  color: #fff;
}

.card-text-typeOfProperty {
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.card-cta {
  background-color: orange;
  text-decoration: none;
  padding: 10px 20px;
  color: #fff;
}

.publish-container {
  background-color: orange;
  width: calc(75%);
  padding: 15px 0;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  font-size: 18px;
}

@media (min-width: 768px) {
  .card {
    width: calc(40% - 25px);
  }
  .publish-container {
    width: calc(77.5%);
    font-size: 21px;
  }
}

@media (min-width: 1200px) {
  .card {
    width: calc(22% - 25px);
  }
  .publish-container {
    width: calc(86.5%);
  }
}
</style>
