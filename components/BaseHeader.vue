<template>
    <div class="fixed h-screen w-32 lg:w-64  border-e bg-white">
        <div class="px-4 py-6">

            <ul class="mt-6 space-y-1">
                <li class="">
                    <NuxtLink to="/" active-class="bg-gray-100 text-gray-700"
                        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500">
                        Inicio
                    </NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/recursos" active-class="bg-gray-100 text-gray-700"
                        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        Recursos
                    </NuxtLink>
                </li>

                <li>
                    <NuxtLink href="/acercade" active-class="bg-gray-100 text-gray-700"
                        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        Acerca de
                    </NuxtLink>
                </li>
            </ul>
        </div>

    </div>
</template>


