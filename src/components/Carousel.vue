<template>
  <section aria-label="Property Images">
    <div class="carousel">
      <button class="carousel-button prev" @click="prevSlide">
        <i class="fa-solid fa-chevron-left chevron"></i>
      </button>
      <button class="carousel-button next" @click="nextSlide">
        <i class="fa-solid fa-chevron-right chevron"></i>
      </button>
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
    <div class="dot-container">
      <button
        v-for="(image, index) in images"
        :key="index"
        @click="goToSlide(index)"
        :class="[index === currentIndex ? 'dot dot-active' : 'dot']"
      ></button>
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

const goToSlide = (index: number) => {
  currentIndex.value = index;
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
  &:hover .carousel-button {
    visibility: visible;
    opacity: 1;
    transition:
      visibility 0s,
      opacity 0.2s;
  }
}

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: 200ms opacity ease-in-out;
  transition-delay: 200ms;
}

.slide-active {
  opacity: 1 !important;
  z-index: 1;
  transition-delay: 0ms;
}

.slide-images {
  display: block;
  max-width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
}

.carousel-button {
  z-index: 2;
  position: absolute;
  background: none;
  border: none;
  font-size: 2rem;
  transform: translateY(250%);
  cursor: pointer;
  color: #fff;
  border-radius: 25%;
  padding: 0 0.5rem;
  filter: drop-shadow(1px 1px 9px #000);

  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s,
    opacity 0.2s;
}

.carousel-button.prev {
  left: 1rem;
}

.carousel-button.next {
  right: 1rem;
}

.image-indicator {
  position: absolute;
  background: none;
  border: none;
}

.dot-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-200%);
}

.dot {
  background-color: rgba(0, 0, 0, 0.5);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  border: none;
  cursor: pointer;
}

.dot-active {
  background-color: #fff;
}
</style>
