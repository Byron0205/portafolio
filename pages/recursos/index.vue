<script setup>
const posts = await queryContent().find()

const searchTerm = ref('');

const filterByTitle = ref(posts);

const filterSearch = () => {
    filterByTitle.value = posts.filter(post => {
        return post.title.toLocaleLowerCase().includes(searchTerm.value.toLocaleLowerCase());
    });
}

const recargarPagina = ()=>{
    searchTerm.value = "";
    filterSearch();
}

</script>

<template>
    <h1 class="text-center text-4xl font-bold mb-3">Recursos</h1>
    <form @submit.prevent="" class="text-center m-3">
        <div class="flex justify-center gap-2">
            <input class="w-full" v-model="searchTerm" type="text">
            <button @click="filterSearch" class="bg-blue-500 text-white p-2 hover:bg-blue-700 transition">Buscar</button>
        </div>
    </form>

    <div v-if="filterByTitle.length > 0" class="flex flex-wrap w-full justify-center gap-2 m-auto">

        <CardArticle v-for="{ title, id, _path, tags, autor, fecha } in filterByTitle" :fecha="fecha" :autor="autor"
            :tags="tags" :key="id" :title="title" :url="_path" />
    </div>
    <div class="flex flex-col justify-center items-center" v-else>
        <p class="text-center text-2xl font-bold my-5">Sin resultados :(</p>
        <button @click="recargarPagina" class="bg-yellow-400 p-3 hover:font-bold transition text-white ">Regresar</button>
    </div>
</template>