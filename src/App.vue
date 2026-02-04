<script setup>
import { onMounted } from 'vue';
import Layout from './layouts/Layout.vue';

onMounted(() => {
  document.cookie = 'locale=DA'
})
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>
