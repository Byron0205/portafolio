<template>

    <article
        class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] w-[300px]">
        <div class="rounded-[10px] bg-white p-4 !pt-15 sm:p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
                10th Oct 2022
            </time>

            <a :href="`/articles${url}`">
                <h3 class="mt-0.5 text-md font-medium text-gray-900 text-center">
                    {{ title }}
                </h3>
            </a>

            <div class="mt-4 flex flex-wrap gap-1 justify-center">
                <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                v-for="tag in tags" :key="tag">
                    {{ tag }}
                </span>
            </div>
        </div>
    </article>
</template>

<script setup>

const props = defineProps({
    title: String,
    url: String,
    tags: Array,
    autor: String,
    fecha: String
})

</script>