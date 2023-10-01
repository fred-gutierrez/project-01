<template>
  <header class="app-header">
    <Navbar />
    <Header />
  </header>
  <section class="app-body">
    <AdItem />
  </section>
  <Footer />
</template>

<script setup lang="ts">
import Navbar from "/src/components/Navbar.vue";
import Footer from "/src/components/Footer.vue";
import AdItem from "/src/components/AdItem.vue";
import Header from "/src/components/Header.vue";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
  background-color: #fff;
}

.app-header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./assets/luxury_house.jpg");
  background-size: cover;
  background-position: top;
}

.app-body {
margin-top: 80px;
}
</style>
