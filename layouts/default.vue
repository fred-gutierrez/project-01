<template>
  <Navbar />
  <NuxtPage />
  <Footer />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

/** FontAwesome Icons **/
@import url("https://site-assets.fontawesome.com/releases/v6.4.2/css/all.css");
@import url("https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-solid.css");
@import url("https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-regular.css");
@import url("https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-light.css");

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

button,
input[type="submit"],
input[type="reset"] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  outline: inherit;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
