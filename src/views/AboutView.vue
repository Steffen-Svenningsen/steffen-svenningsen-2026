<script setup>
import ContentLayout from '@/layouts/ContentLayout.vue';

</script>

<template>
    <ContentLayout>
        <section>
            <h1 class="text-3xl font-semibold mb-12">{{ $t('pages.about.title') }}</h1>
            <p>{{ $t('pages.about.description') }}</p>
        </section>
    </ContentLayout>
</template>