<template>
    <Header />
    <main class="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl py-20">
        <slot></slot>
    </main>
    <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';


</script>