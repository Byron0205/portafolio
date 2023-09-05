<script setup>
const posts = await queryContent().find()

</script>

<template>
    <h1 class="text-center text-4xl font-bold mb-3">Artículos</h1>

    <div class="flex flex-wrap w-full justify-center gap-2 w-[90%] m-auto">
        <CardArticle v-for="{title, id, _path, tags, autor, fecha} in posts" :fecha="fecha" :autor="autor" :tags="tags" :key="id" :title="title" :url="_path"/>
    </div>
</template>