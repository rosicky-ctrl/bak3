<template>
    <h3>Forma płatności:</h3>
    <select v-model="form">
        <option value="Gotówka">Gotówka</option>
        <option value="Blik">Blik</option>
        <option value="Karta">Karta</option>
    </select>
    <p>Wybrano: {{ form }}</p>
</template>

<script setup>
    import { ref } from 'vue'
    const form = ref('')
</script>


<style scoped>
    select{
        padding: 0.5rem;
        width: 100%;
        margin: 0.5rem;
    }
</style>
