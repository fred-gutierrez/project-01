<template>
  <header class="app-header">
    <Header />
  </header>
  <section class="app-body">
    <div class="app-post-container-wrapper">
      <ul class="app-post-container">
        <AdItem />
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import AdItem from "/src/components/AdItem.vue"
import Header from "/src/components/Header.vue";
</script>

<style scoped lang="scss">
.app-header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/luxury_house.jpg");
  background-size: cover;
  background-position: top;
}

.app-body {
  margin-top: 80px;
}

.app-post-container-wrapper {
  overflow-x: auto;
  justify-content: center;
  .app-post-container {
    list-style: none;
    display: inline-flex;
    gap: 20px;
  }
}
</style>
