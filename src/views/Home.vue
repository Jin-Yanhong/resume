<template>
	<div></div>
</template>
<script lang="ts" setup>
import router from '@/router';
import { defineOptions } from 'vue';

defineOptions({
	name: 'HomeView',
});

const local = window.navigator.language;

if (local.includes('zh')) {
	router.replace('/zh-CN');
} else {
	router.replace('/en-US');
}
</script>
