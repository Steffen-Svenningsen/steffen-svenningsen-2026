<template>
    <div class="border-t border-gray-200">
        <div class="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl flex justify-between items-center py-2">
            <p class="text-gray-400 text-xs">&copy; {{ new Date().getFullYear() }} Steffen Svenningsen</p>
            <a class="text-gray-400 text-xs group" target="_blank" href="https://svenningsen.pages.dev/">
                {{ $t('footer.external') }}
                <ArrowRight class="inline-block w-4 h-4 group-hover:rotate-45 transition duration-150" />
            </a>
        </div>
    </div>
    <footer class="border-t border-gray-200">
        <div class="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl py-12 flex flex-col sm:flex-row sm:items-end gap-8 justify-between">
            <div>
                <h3 class="text-3xl">{{ $t('footer.title') }}</h3>
                <a class="text-lg block mt-2 text-slate-700 w-fit" href="mailto:stef7625@gmail.com">stef7625@gmail.com</a>
            </div>
            <nav>
                <ul class="flex gap-8">
                    <li v-for="social in socials" :key="social.name">
                        <a class="flex gap-1 group" target="_blank" :href="social.path">
                            {{social.name}}
                            <ArrowRight class="group-hover:rotate-45 transition duration-150" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        
    </footer>
</template>

<script setup>
import ArrowRight from './icons/ArrowRight.vue';

const socials = [
    {
        name: "LinkedIn",
        path: "https://www.linkedin.com/in/steffen-svenningsen/"
    },
    {
        name: "GitHub",
        path: "https://github.com/Steffen-Svenningsen"
    }
]
</script>