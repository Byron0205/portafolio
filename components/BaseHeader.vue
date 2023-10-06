<template>
    <div class="fixed h-screen w-32 lg:w-64  border-e bg-white">
        <div class="px-4 py-6">

            <ul class="mt-6 space-y-1">
                <li class="">
                    <NuxtLink to="/" active-class="bg-blue-400 text-white"
                        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500
                        hover:bg-blue-400 hover:text-white">
                        Inicio
                    </NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/recursos" active-class="bg-blue-400 text-white"
                        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-blue-400 hover:text-white">
                        Recursos
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/proyectos" active-class="bg-blue-400 text-white"
                        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-blue-400 hover:text-white">
                        Proyectos
                    </NuxtLink>
                </li>

                <li>
                    <NuxtLink href="/acercade" active-class="bg-blue-400 text-white"
                        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-blue-400 hover:text-white">
                        Acerca de
                    </NuxtLink>
                </li>
            </ul>
        </div>

    </div>
</template>


