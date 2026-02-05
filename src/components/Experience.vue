<template>
    <div class="flex justify-between items-start border rounded-lg p-4 my-2 border-gray-200">
        <div class="relative">
            <span v-if="tag" :class="tagColors[tagColor]" class="rounded-sm border py-0.5 px-1 text-xs inline-block mb-2 opacity-75">{{ tag }}</span>
            <h3 class="text-lg">{{ title }}</h3>
            <p class="text-sm text-slate-700">{{ company }}</p>
        </div>
        <p class="text-sm text-slate-700">{{ period }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    tagColor: String,
    tag: String,
    title: String,
    company: String,
    period: String
})

const tagColors = {
    slate: 'border-slate-700 text-slate-700',
    indigo: 'border-indigo-700 text-indigo-700',
    amber: 'border-amber-700 text-amber-700',
    green: 'border-green-700 text-green-700'
}
</script>