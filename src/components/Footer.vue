<template>
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
        <div class="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl pb-12">
            <div class="h-px w-full bg-gray-200"></div>
            <p class="text-gray-400 text-sm mt-12">&copy; {{ new Date().getFullYear() }} Steffen Svenningsen</p>
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