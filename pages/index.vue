<template>
  <div>
    <header class="app-header">
      <homepageHeader />
    </header>
    <section class="app-body">
      <homepageCards />
      <div class="app-post-container-wrapper">
        <ul class="app-post-container">
          <AdItem />
        </ul>
      </div>
      <homepageMostPopular />
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
