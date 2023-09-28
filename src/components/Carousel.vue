<template>
  <section aria-label="Property Images">
    <div class="carousel">
      <button class="carousel-button prev" @click="prevSlide">&#60;</button>
      <button class="carousel-button next" @click="nextSlide">&#62;</button>
      <ul>
        <li
          v-for="(image, index) in images"
          :key="index"
          :class="[index === currentIndex ? 'slide-active' : 'slide']"
        >
          <img :src="image" alt="Property Image" class="slide-images" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const { images } = defineProps(["images"]);
const currentIndex = ref(0);

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};
</script>

<style scoped lang="scss">
.carousel {
  text-align: center;
  position: relative;
  ul {
    list-style: none;
    padding: 0;
  }
}

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: 200ms opacity ease-in-out;
  transition-delay: 200ms;
}

.slide-images {
  display: block;
  max-width: 100%;
  height: 230px;
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
}

.slide-active {
  opacity: 1 !important;
  z-index: 1;
  transition-delay: 0ms;
}

.carousel-button {
  z-index: 2;
  position: absolute;
  background: none;
  border: none;
  font-size: 3rem;
  transform: translateY(150%);
  cursor: pointer;
  color: #000;
  border-radius: 25%;
  padding: 0 0.5rem;
  background: rgba(0, 0, 0, 0.1);
  &:hover {
    color: white;
    background: rgba(0, 0, 0, 0.2);
  }
}

.carousel-button.prev {
  left: 1rem;
}

.carousel-button.next {
  right: 1rem;
}
</style>
