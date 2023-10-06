<template>
    <Container class="w-full">
        <TitleCard>Habilidades</TitleCard>
        <div class="flex flex-col gap-4 h-full my-4">
            <div>
                <p class="text-[20px] mb-3 text-center">
                <Icon name="skill-icons:python-light" size="40px"/>
                    
                </p>
                <span id="ProgressLabel" class="sr-only">Loading</span>
                <span role="progressbar" aria-labelledby="ProgressLabel" aria-valuenow="75"
                    class="block rounded-full bg-gray-200">
                    <span class="block h-3 rounded-full bg-blue-600" :style="`width: ${porcentaje}%`"></span>
                </span>
            </div>
            
            <div>
                <p class="text-[20px] my-3 text-center">
                <Icon name="skill-icons:javascript" size="40px"/>
                    
                </p>
                
                <span id="ProgressLabel" class="sr-only">Loading</span>
                <span role="progressbar" aria-labelledby="ProgressLabel" aria-valuenow="75"
                    class="block rounded-full bg-gray-200">
                    <span class="block h-3 rounded-full bg-yellow-300" :style="`width: ${porcentaje}%`"></span>
                </span>
            </div>

            <div>
                <p class="text-[20px] mb-3 text-center my-3">
                <Icon name="skill-icons:vuejs-light" size="40px"/>

                </p>
                <span id="ProgressLabel" class="sr-only">Loading</span>
                <span role="progressbar" aria-labelledby="ProgressLabel" aria-valuenow="75"
                    class="block rounded-full bg-gray-200">
                    <span class="block h-3 rounded-full bg-green-400" :style="`width: ${porcentaje}%`"></span>
                </span>
            </div>

            <div>
                <p class="text-[20px] mb-3 text-center my-3">
                <Icon name="skill-icons:css" size="40px"/>
                </p>
                <span id="ProgressLabel" class="sr-only">Loading</span>
                <span role="progressbar" aria-labelledby="ProgressLabel" aria-valuenow="75"
                    class="block rounded-full bg-gray-200">
                    <span class="block h-3 rounded-full bg-blue-400" :style="`width: ${porcentaje}%`"></span>
                </span>
            </div>

        </div>
    </Container>
</template>

<script setup>
import { ref } from 'vue';

const porcentaje = ref(45);

</script>

<style></style>