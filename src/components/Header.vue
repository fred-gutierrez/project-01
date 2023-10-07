<template>
  <div class="header-container">
    <h1 class="header-text">
      Donde los Sueños Despegan<br /><span class="inner-text">
        ¡Publica y Encuentra tu Propiedad Ideal!</span
      >
    </h1>
    <div class="search-container">
      <input
        type="text"
        placeholder="Ingrese una dirección, vecindario, ciudad o código postal"
      /><button type="submit">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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

.search-container {
  input {
    width: 70%;
    max-width: 700px;
    padding: 15px 10px;
    border: 2px solid black;
    border-right: none;
    border-radius: 10px 0 0 10px;
    font-size: 13px;
  }
  button {
    color: black;
    width: 50px;
    padding: 15px 0;
    border: 2px solid black;
    border-radius: 0 10px 10px 0;
    font-size: 13px;
    background-color: white;
    &:hover {
      background-color: gray;
    }
  }
}

@media (min-width: 768px) {
  .header-text {
    font-size: 2rem;
  }
  .search-container {
    input {
      width: 50%;
      font-size: 19px;
    }
    button {
      width: 60px;
      font-size: 19px;
    }
  }
}
</style>
