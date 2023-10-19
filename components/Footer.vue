<template>
  <footer>
    <section class="footer-top">
      <div class="type-of-property-list">
        <h2>Tipos de Propiedad</h2>
        <ul>
          <li><a href="/">Casas</a></li>
          <li><a href="/">Apartamentos</a></li>
          <li><a href="/">Bodegas</a></li>
          <li><a href="/">Locales Comerciales</a></li>
        </ul>
      </div>
      <div class="popular-places-list">
        <h2>Vecindarios Populares</h2>
        <ul>
          <li><a href="/">Escazu</a></li>
          <li><a href="/">Santa Ana</a></li>
          <li><a href="/">Curridabat</a></li>
          <li><a href="/">Heredia</a></li>
          <li><a href="/">San Pedro</a></li>
          <li><a href="/">Cartago</a></li>
          <li><a href="/">Guanacaste</a></li>
          <li><a href="/">Puntarenas</a></li>
        </ul>
      </div>
    </section>
    <section class="footer-bottom">© 2023 Project-01™</section>
  </footer>
</template>

<style scoped lang="postcss">
footer {
  color: #fff;
  background-color: #2b2b2b;
}

.footer-top {
  padding: 40px 7%;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
}

.footer-bottom {
  padding: 25px 7%;
  background-color: #1b1b1b;
  font-weight: 300;
}

ul {
  list-style: none;
  & > li {
    font-size: 1.1rem;
    margin: 10px 0;
    &:hover {
      text-decoration: underline;
    }
  }
}

.type-of-property-list,
.popular-places-list {
  margin-bottom: 10px;
  & > h2 {
    text-decoration: underline;
    margin-right: 20px;
  }
}
</style>
