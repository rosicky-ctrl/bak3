<template>
    <button @click="cart.$reset()">Wyczyść koszyk</button>

</template>

<script setup>
    import { useCartStore } from '../store/cart.js'
    const cart = useCartStore()
</script>


<style scoped>
    button{
        padding: 0.5rem;
        width: 100%;
    }
</style>
