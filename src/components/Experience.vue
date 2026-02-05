<template>
    <div class="flex justify-between items-start border rounded-lg p-4 my-2 border-gray-200">
        <div class="relative">
            <span v-if="tag" class="rounded-md border border-slate-700 py-1 px-2 text-xs text-slate-700 inline-block mb-2 sm:absolute sm:top-0 sm:-right-2 sm:translate-x-full">{{ tag }}</span>
            <h3 class="text-lg">{{ title }}</h3>
            <p class="text-sm text-slate-700">{{ company }}</p>
        </div>
        <p class="text-sm text-slate-700">{{ period }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    tag: String,
    title: String,
    company: String,
    period: String
})
</script>