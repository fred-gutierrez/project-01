<template>
  <header class="app-header">
    <Header />
  </header>
  <section class="app-body">
    <Homepage_cards />
    <div class="app-post-container-wrapper">
      <ul class="app-post-container">
        <AdItem />
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import AdItem from "../components/AdItem.vue"
import Header from "../components/Header.vue";
import Homepage_cards from "../components/Homepage_cards.vue";
</script>

<style scoped lang="postcss">
.app-header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/homepage/luxury_house.jpg");
  background-size: cover;
  background-position: top;
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
