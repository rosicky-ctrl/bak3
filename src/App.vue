<template>
  <div class="wrapper">
    <page-header>Sklep</page-header>
    <page-nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Products' }">Produkty</router-link>
      <router-link :to="{ name: 'About' }">O sklepie</router-link>
    </page-nav>
    <page-main>
      <router-view></router-view>
    </page-main>
    <page-aside>
     <h2>Koszyk</h2> 
     <p v-if="cart.sum == 0">Może byś coś kupił?</p>
     <template v-else>
      <cart-table></cart-table>
      <cart-reset></cart-reset>
      <payment-form></payment-form>
    </template>
    </page-aside>
    <page-footer>Sklep 2022</page-footer>
  </div>
</template>

<script setup>
  import PageHeader from './components/PageHeader.vue'
  import PageFooter from './components/PageFooter.vue'
  import PageMain from './components/PageMain.vue'
  import PageNav from './components/PageNav.vue'
  import PageAside from './components/PageAside.vue'
  import CartTable from './components/CartTable.vue'
  import CartReset from './components/CartReset.vue'
  import PaymentForm from './components/PaymentForm.vue'
  import { useCartStore } from './store/cart.js'
    const cart = useCartStore()
</script>

<style>
  body { 
      margin: 0; 
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  }
  .wrapper { 
    display: grid;
    grid-template-rows: min-content min-content 1fr min-content;
    grid-template-columns: 70% 30%;
    height: calc(100vh - 1rem);
    padding: .5rem;
  }
  header {
     grid-column: 1/3;
     padding: 1rem;
     background-color: blue;
     color: white
  }
  nav a+a {
    margin-left: 1rem
  }
  nav {
    grid-column: 1/3;
     background-color: aquamarine;
     padding: 1rem;
  }
  main { 
    background-color: beige;
    padding: 1rem;
  }
  aside { 
  background-color: gold;
  padding: 1rem;
}
  footer {
    grid-column: 1/3;
    background-color: yellowgreen;
    padding: 1rem;
    text-align: center;
  }
@media all and (max-width: 800px) {
    .wrapper { 
    grid-template-columns: 100%;
  }
  .wrapper > * {
    grid-column: 1/2;
  }
}
</style>