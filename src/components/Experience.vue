<template>
    <div class="flex justify-between items-start py-4 border-b border-gray-200">
        <div>
            <h3 class="text-lg">{{ title }}</h3>
            <p class="text-sm text-slate-700">{{ company }}</p>
        </div>
        <p class="text-sm text-slate-700">{{ period }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    company: String,
    period: String
})
</script>