<template>
    <header class="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl py-6 flex justify-between items-center">
        <router-link to="/" class="logo block w-12 h-12 rounded-full">
            <img class="w-full h-full rounded-full" src="/images/steffen.webp" alt="Steffen Svenningsen">
        </router-link>
        <nav>
            <ul class="flex items-center gap-6">
                <li v-for="navItem in navItems" :key="navItem.name">
                    <router-link 
                        :to="navItem.path"
                        class="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                    >
                        {{ $t(navItem.name) }}
                    </router-link>
                </li>
                <li>
                    <LocaleSwitcher />
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import LocaleSwitcher from './LocaleSwitcher.vue';


const navItems = [
    {
        name: 'pages.projects',
        path: '/projects'
    },
    {
        name: 'pages.about',
        path: '/about'
    },
]
</script>