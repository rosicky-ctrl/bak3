<template>
    <table class="products">
        <thead>
            <tr>
                <th>Nazwa</th>
                <th>Cena</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="p of products" :key="p.id">
                <td>{{ p.name }}</td>
                <td>{{ p.price }}</td>
                <td><button @click="cart.add(p)">+</button></td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
  //import products from '../data.js'
   import { ref } from 'vue'
    import { useCartStore } from '../store/cart.js'
    const cart = useCartStore()
    let products = ref(null)
    fetch('https://api.netum.pl/Products')
    .then (response => response.json())
    .then (data => products.value = data)
</script>


<style>
    table.products {
        width: 100%;
        border-collapse: collapse;
    }
    table.products td, table.products th {
        padding: 0.5rem;
        border-bottom: 1px solid black;
    }
    table.products td:nth-child(1) {
        width: 100%;
    }
    table.products td:nth-child(2) {
        text-align: right;
    }
    table.products td:nth-child(3) {
        text-align: center;
    }
</style>