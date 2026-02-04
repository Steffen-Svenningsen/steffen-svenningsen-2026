<template>
    <ContentLayout>
        <section>
            <p class="mb-6 text-lg text-slate-700">Steffen Svenningsen - <span>{{ $t('title') }}</span></p>
            <h1 class="text-c-black:+1 text-2xl md:text-3xl leading-tight">{{ $t('introduction') }}</h1>
        </section>
        <section>
            <img src="/images/project_showcase.gif" alt="">
        </section>
    </ContentLayout>
</template>

<script setup>
import ContentLayout from '@/layouts/ContentLayout.vue';


</script>