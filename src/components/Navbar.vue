<template>
  <nav class="navbar">
    <div class="navbar-left">
      <a href="#" class="logo">PROJECT-01</a>
    </div>
    <div class="navbar-right">
      <i class="fa-solid fa-bars fa-xl open-menu-btn" @click="toggleMenu"></i>
      <div class="menu" :class="{ active: menuVisible }">
        <div class="close-menu-btn" @click="toggleMenu">
          <i class="fa-solid fa-x fa-xl"></i>
        </div>
        <ul v-if="authUser">
          <a href=""><div class="profile-picture"></div></a>
        </ul>
        <ul v-else>
          <li class="nav-link">
            <a href="#">Iniciar Sesión</a>
          </li>
          <li class="nav-link">
            <a href="#" style="text-decoration: none"
              ><div class="sign-up">Registrarme</div></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import { gsap } from "gsap";
const authUser = false;
let menuVisible = ref(false);

const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 8%;
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
  color: #000;
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

.open-menu-btn {
  display: block;
  cursor: pointer;
  padding: 20px;
  color: #000;
  &:focus {
    outline: none;
  }
}

.close-menu-btn {
  display: block;
  cursor: pointer;
  padding: 20px;
  margin-bottom: 10px;
}

.menu {
  display: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  padding: 23px 8% 0 40px;
  background-color: #fff;
  & > * {
    margin-left: auto;
  }
}

.menu.active {
  display: flex;
}

.menu a {
  color: #000;
  text-decoration: none;
  margin: 10px 0;
}

@media (min-width: 768px) {
  .menu {
    display: flex;
    position: static;
    background: transparent;
    padding: 0;
  }
  .open-menu-btn {
    display: none;
  }
  .close-menu-btn {
    display: none;
  }
}
</style>
