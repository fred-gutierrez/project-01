<template>
  <section class="most-popular-container">
    <h1>Vecindarios Populares</h1>
    <div class="card-container">
      <a
        v-for="(item, index) in cardItems"
        class="card"
        :style="{
          backgroundImage: `linear-gradient(rgba(80, 80, 80, ${
            item.hovered ? 0.3 : 0.6
          }),
rgba(80, 80, 80, ${item.hovered ? 0.3 : 0.6})), url('${item.imageUrl}')`,
        }"
        :key="index"
        :href="item.link"
        @mouseover="item.hovered = true"
        @mouseleave="item.hovered = false"
        target="_blank"
      >
        <div class="card-text-container">
          <p class="card-text-neighborhood" v-html="item.neighborhood"></p>
          <button class="card-cta" @click="item.link">
            {{
              item.neighborhood == "Mas Vecindarios"
                ? "Ver Más Vecindarios"
                : "Ver Vecindario"
            }}
          </button>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const cardItems = ref([
  {
    neighborhood: "Escazú",
    link: "/escazu",
    imageUrl: "homepage/escazu.jpg",
    hovered: false,
  },
  {
    neighborhood: "Santa Ana",
    link: "/santaana",
    imageUrl: "homepage/santaana.jpg",
    hovered: false,
  },
  {
    neighborhood: "Curridabat",
    link: "/curridabat",
    imageUrl: "homepage/curridabat.jpg",
    hovered: false,
  },
  {
    neighborhood: "Heredia",
    link: "/heredia",
    imageUrl: "homepage/heredia.jpeg",
    hovered: false,
  },
  {
    neighborhood: "San Pedro",
    link: "/sanpedro",
    imageUrl: "homepage/sanpedro.jpg",
    hovered: false,
  },
  {
    neighborhood: "Cartago",
    link: "/cartago",
    imageUrl: "homepage/cartago.jpg",
    hovered: false,
  },
  {
    neighborhood: "Guanacaste",
    link: "/cartago",
    imageUrl: "homepage/guanacaste.jpg",
    hovered: false,
  },
  {
    neighborhood: "Puntarenas",
    link: "/cartago",
    imageUrl: "homepage/puntarenas.jpg",
    hovered: false,
  },
  {
    neighborhood: "Mas Vecindarios",
    link: "/vecindarios",
    imageUrl: "homepage/costarica.jpg",
    hovered: false,
  },
]);
</script>

<style scoped lang="postcss">
.most-popular-container {
  margin: 40px 0;
}

h1 {
  font-size: 26px;
  text-align: center;
  padding-bottom: 20px;
  text-decoration: underline;
}

.card-container {
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
  margin-top: 200px;
  font-weight: bold;
  color: #fff;
}

.card-text-neighborhood {
  margin-bottom: 10px;
  font-size: 1.7rem;
}

.card-cta {
  background-color: #815a32;
  text-decoration: none;
  padding: 10px 20px;
  color: #fff;
}

@media (min-width: 576px) {
  .card {
    width: calc(45%);
  }
  h1 {
    font-size: 30px;
  }
}

@media (min-width: 768px) {
  .card {
    width: calc(33% - 45px);
  }
  h1 {
    text-align: left;
    margin-left: 4.5%;
  }
}

@media (min-width: 1200px) {
  .card {
    width: calc(33% - 75px);
  }
  h1 {
    margin-left: 6.5%;
  }
}
</style>
