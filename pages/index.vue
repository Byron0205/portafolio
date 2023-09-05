<template>
    <h1 class="text-4xl font-bold mt-5 text-center">Programa con Sosa</h1>
    
    <TarjetaPresentacion/>

    <section>
        <h2 class="text-2xl text-center mt-4 mb-2">Artículos</h2>

        <Carousel/>
    </section>

</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>