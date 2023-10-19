<template>
  <div class="search-container">
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Ingrese una dirección, vecindario, ciudad o código postal"
    /><button type="submit">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useSearchStore } from "../store/searchStore.js";

const { searchTerm } = useSearchStore();
</script>

<style scoped lang="postcss">
.search-container {
  & > input {
    width: 70%;
    max-width: 700px;
    padding: 15px 10px;
    border: 2px solid black;
    border-right: none;
    border-radius: 10px 0 0 10px;
    font-size: 16px;
  }
  & > button {
    color: black;
    width: 50px;
    padding: 15px 0;
    border: 2px solid black;
    border-radius: 0 10px 10px 0;
    font-size: 16px;
    background-color: white;
    &:hover {
      background-color: rgb(132, 132, 132);
    }
  }
}

@media (min-width: 768px) {
  .search-container {
    & > input {
      width: 50%;
      font-size: 19px;
    }
    & > button {
      width: 60px;
      font-size: 19px;
    }
  }
}
</style>
