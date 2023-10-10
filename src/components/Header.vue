<template>
  <div class="header-container">
    <h1 class="header-text">
      Donde los Sueños Despegan<br /><span class="inner-text">
        ¡Publica y Encuentra tu Propiedad Ideal!</span
      >
    </h1>
    <SearchBar />
  </div>
</template>

<script setup lang="ts">
import SearchBar from "./SearchBar.vue";
</script>

<style scoped lang="scss">
.header-container {
  height: 60vh;
  text-align: center;
  padding: 20px;
}

.header-text {
  font-size: 1.1rem;
  margin-bottom: 15px;
  margin-top: 80px;
  color: white;
  .inner-text {
    font-weight: normal;
  }
}

@media (min-width: 768px) {
  .header-text {
    font-size: 2rem;
  }
}
</style>
