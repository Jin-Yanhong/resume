<template>
	<div>
		<span> {{ i18n.global.t('message.hello', { msg: 'haha' }) }}</span>
	</div>
</template>
<script lang="ts" setup>
import { i18n } from '@/i18n';
import { defineOptions } from 'vue';

defineOptions({
	name: 'HomeView',
});
</script>
