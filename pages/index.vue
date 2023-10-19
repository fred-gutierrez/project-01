<template>
  <div>
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
  </div>
</template>

<style scoped lang="postcss">
.app-header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/homepage/luxury_house.jpg");
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
