<template>
  <nav class="navbar">
    <div class="navbar-left">
      <a href="#" class="logo">
        <img src="../assets/brand/placeholder_logo.png" alt="Logo" />
      </a>
    </div>
    <div class="navbar-right">
      <ul v-if="authUser">
        <a href=""><div class="profile"></div></a>
      </ul>
      <ul v-else>
        <li class="nav-link">
          <a href="#">Sign In</a>
        </li>
        <li class="nav-link">
          <a href="#"><div class="sign-up">Sign Up</div></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
// import { gsap } from "gsap";

const authUser = false;
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px 8%;
}

.navbar-left {
  flex: 1;
}

.navbar-right ul {
  list-style: none;
  display: flex;
  gap: 20px;
  align-items: center;
}

.navbar-right li {
  font-size: 16px;
}

.navbar-right a {
  text-decoration: none;
  color: #000;
}

.logo img {
  max-height: 60px;
}

.sign-up {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 40px;
  background-color: #28221e;
  border-radius: 10px;
  font-weight: bold;
  color: #fff;
}

.profile {
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 100%;
  border: 3px solid black;
}
</style>
