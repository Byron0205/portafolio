<template>
    <div class="p-6 border bg-white dark:bg-black dark:border-gray-700 rounded">
        <div class="mt-6 italic text-gray-400">
            <p>Autor: {{ autor }}</p>
            <p>Fecha: {{ fecha }}</p>
        </div>
        <slot />
    </div>
</template>

<script setup>
import { useRoute } from '#vue-router';

const props = defineProps({
    autor: String,
    fecha: String
})

const router = useRoute()

console.log(router.query)

</script>