<template>
  <nav class="navbar">
    <div class="navbar-left">
      <a href="#" class="logo">PROJECT-01</a>
    </div>
    <div class="navbar-right">
      <ul v-if="authUser">
        <a href=""><div class="profile-picture"></div></a>
      </ul>
      <ul v-else>
        <li class="nav-link">
          <a href="#">Iniciar Sesión</a>
        </li>
        <li class="nav-link">
          <a href="#" style="text-decoration: none;"><div class="sign-up">Registrarme</div></a>
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
  padding: 20px 8%;
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
  color: #fff;
  &:hover {
    text-decoration: underline;
  }
}

.logo {
  color: #fff;
  font-weight: bold;
  letter-spacing: 5px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  img {
    max-height: 60px;
  }
}

.sign-up {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  font-weight: bold;
  background-color: #28221e;
  color: #fff;
}

.profile-picture {
  width: 55px;
  height: 55px;
  border-radius: 100%;

  background-image: url("../assets/fred-image3.jpeg");
  background-position: center;
  background-size: cover;
}

@media (min-width: 768px) {
  .navbar {
    background-color: #fff;
  }
  .navbar-right a {
    color: #000;
  }
  .logo {
    color: #000;
  }
  .sign-up {
    background-color: #28221e;
    color: #fff;
  }
}
</style>
