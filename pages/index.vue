<template>
    <h1 class="text-3xl text-center">Programa con Sosa</h1>
    <section class="flex flex-col md:flex-row gap-5 mt-4 text-center justify-center content-center items-center">
        <img src="/img/perfil.jpg" class="w-40" alt="perfil">
        <p class="text-1xl w-3/6">Bienvenido, mi nombre es Byron Sosa H. <br />
            Estudie Tecnologías de la Información y me encanta la programación y los retos.</p>
    </section>

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