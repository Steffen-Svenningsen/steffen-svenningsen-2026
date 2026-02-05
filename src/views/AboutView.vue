<script setup>
import { useI18n } from 'vue-i18n'
import Experience from '@/components/Experience.vue';
import ContentLayout from '@/layouts/ContentLayout.vue';

const { tm } = useI18n()

const paragraphs = tm('pages.about.description.paragraphs')

const workExperiences = tm('pages.about.work.items')
const educationExperiences = tm('pages.about.education.items')
</script>

<template>
    <ContentLayout>
        <section>
            <h1 class="text-3xl font-semibold mb-12">{{ $t('pages.about.title') }}</h1>
            <p
                v-for="(text, index) in paragraphs"
                :key="index"
                class="mb-4 last:mb-0 max-w-4xl text-lg"
            >
                {{ text }}
            </p>
        </section>
        <section>
            <h2 class="mb-2">{{ $t('pages.about.work.title') }}</h2>
            <Experience
                v-for="(work, index) in workExperiences"
                :key="index"
                :title="work.title"
                :company="work.company"
                :period="work.period"
            />
        </section>
        <section>
            <h2 class="mb-2">{{ $t('pages.about.education.title') }}</h2>
            <Experience 
                v-for="(education, index) in educationExperiences"
                :key="index"
                :title="education.title"
                :company="education.company"
                :period="education.period"
            />
        </section>
    </ContentLayout>
</template>