<template>
    <div class="flex h-screen flex-col w-[25%] justify-between border-e bg-white">
        <div class="px-4 py-6">

            <ul class="mt-6 space-y-1">
                <li>
                    <NuxtLink to="/" active-class="bg-gray-100 text-gray-700"
                        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500">
                        Inicio
                    </NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/articles" active-class="bg-gray-100 text-gray-700"
                        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        Articulos
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


