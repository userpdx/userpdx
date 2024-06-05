<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { usePublicStore } from '@/stores';

const publicStore = usePublicStore();

onMounted(() => {
	document.title = publicStore.documentTitle;
});
</script>

<template>
	<RouterView />
</template>

<style lang="less">
#app {
	background: #000000;
	width: 100%;
	height: 100%;
}
</style>
