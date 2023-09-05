<template>
    <BaseHeader />
    <div class="flex">
        <div class="pl-16 lg:pl-64 flex h-screen flex-col justify-between w-full items-center">
            <main class="p-4">
                <slot />
            </main>
            <footer class="p-4 pt-0 text-center text-[18px] mb-3">
                Programa con Sosa 2023. &copy;Todos los derechos reservados
            </footer>
        </div>
    </div>
</template>

<!-- <script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script> -->