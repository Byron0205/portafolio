<template>
    <div class="w-fit m-auto flex-col flex md:flex-row gap-4 justify-center items-center p-4 border-[1px] rounded-[12px] my-6">
        <div class="w-[200px] md:w-[260px]">
            <img class="rounded-[15px] w-fit" src="/img/perfil.jpg" alt="profile photo">
        </div>
        <div class="flex flex-col">
            <div>
                <p class="text-2xl text-center md:text-left md:text-3xl font-semibold">Byron Sosa Hidalgo</p>
                <p class="font-bold text-center md:text-left text-gray-500">Desarrollador junior</p>
            </div>
            <div class="my-2 text-gray-600 text-center md:text-left">
                Desarrollador creativo, colaborador y activo a la hora de trabajar en equipo.
            </div>
            <div class="flex flex-wrap justify-center gap-2 my-4">
                <div class="p-2 bg-blue-400 rounded-[12px]">
                    <Icon name="uil:facebook" color="white" size="30px" />
                </div>
                <div class="p-2 bg-blue-400 rounded-[12px]">
                    <Icon name="uil:instagram" color="white" size="30px" />
                </div>
                <div class="p-2 bg-blue-400 rounded-[12px]">
                    <Icon name="uil:youtube" color="white" size="30px" />
                </div>
                <div class="p-2 bg-blue-400 rounded-[12px]">
                    <Icon name="uil:linkedin" color="white" size="30px" />
                </div>
                <div class="p-2 bg-blue-400 rounded-[12px]">
                    <a href="mailto:gabossosa@gmail.com">
                        <Icon name="tabler:mail" color="white" size="30px" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>