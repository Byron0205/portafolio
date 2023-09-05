<template>
    <div class="border-[1px] rounded-[12px] p-4">
        <h2 class="text-3xl font-semibold text-center">Habilidades</h2>
        <div class="flex flex-col gap-4">
            <div>
                <p class="text-[18px]">Python</p>
                <span id="ProgressLabel" class="sr-only">Loading</span>
                <span role="progressbar" aria-labelledby="ProgressLabel" aria-valuenow="75"
                    class="block rounded-full bg-gray-200">
                    <span class="block h-3 rounded-full bg-blue-600" :style="`width: ${porcentaje}%`"></span>
                </span>
            </div>
            
            <div>
                JavaScript
                <span id="ProgressLabel" class="sr-only">Loading</span>
                <span role="progressbar" aria-labelledby="ProgressLabel" aria-valuenow="75"
                    class="block rounded-full bg-gray-200">
                    <span class="block h-3 rounded-full bg-yellow-300" :style="`width: ${porcentaje}%`"></span>
                </span>
            </div>

            <div>
                Vue
                <span id="ProgressLabel" class="sr-only">Loading</span>
                <span role="progressbar" aria-labelledby="ProgressLabel" aria-valuenow="75"
                    class="block rounded-full bg-gray-200">
                    <span class="block h-3 rounded-full bg-green-400" :style="`width: ${porcentaje}%`"></span>
                </span>
            </div>

            <div>
                CSS
                <span id="ProgressLabel" class="sr-only">Loading</span>
                <span role="progressbar" aria-labelledby="ProgressLabel" aria-valuenow="75"
                    class="block rounded-full bg-gray-200">
                    <span class="block h-3 rounded-full bg-blue-400" :style="`width: ${porcentaje}%`"></span>
                </span>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const porcentaje = ref(45);

</script>

<style></style>