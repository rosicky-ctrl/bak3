<template>
    
    <table class="cart">
        <thead>
            <tr>
                <th>Nazwa</th>
                <th>Ilość</th>
                <th>Wartość</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="p of cart.items" :key="p.id">
                <td>{{ p.name }}</td>
                <td>{{ p.quantity }}</td>
                <td>{{ p.value }}</td>
                <td><button @click="cart.add(p)">+</button></td>
                <td><button @click="cart.remove(p)">-</button></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>Razem:</td>
                <td></td>
                <td>{{cart.sum}}</td>
                <td></td>
                <td></td>
            </tr>
        </tfoot>
    </table>
</template>

<script setup>
    import { useCartStore } from '../store/cart.js'
    const cart = useCartStore()
</script>


<style>
    table.cart {
        width: 100%;
        border-collapse: collapse;
    }
    table.cart td, table.cart th {
        padding: 0.5rem;
        border-bottom: 1px solid black;
    }
    table.cart td:nth-child(1) {
        width: 100%;
    }
    table.cart td:nth-child(2),  table.cart td:nth-child(3) {
        text-align: right;
    }
    table.cart td:nth-child(4),  table.cart td:nth-child(5) {
        text-align: center;
    }
    table.cart tfoot td {
        font-weight: 700;
    }
</style>
