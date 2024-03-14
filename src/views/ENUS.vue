<template>
	<div class="pages">
		<div class="tips">
			<span> 点击 </span>
			<RouterLink to="/zh-CN"> <i> 这里 </i> </RouterLink>
			<span> 查看中文 </span>
		</div>

		<div
			ref="content"
			class="content card">
			<div class="center">
				<span> Thomas Suny</span>
				<span> +86 xxx xxxx xxx</span>
				<span> xxxxxxxxx@outlook.com </span>
			</div>

			<div class="hr" />
		</div>

		<div class="btns flex-evenly margin">
			<button
				@click="handleDownload"
				class="download">
				下载
			</button>
			<button
				@click="handlePrint"
				class="print">
				打印
			</button>
		</div>

		<RichText
			ref="frame"
			:html="content" />
	</div>
</template>
<script lang="ts" setup>
import { ref, defineOptions, onMounted } from 'vue';

import { html2PDF } from '@/utils/index';
import RichText from '@/components/RichText.vue';
import { DefineComponent } from 'vue';

defineOptions({
	name: 'en-US',
});

const content = ref<HTMLElement>();
const frame = ref<DefineComponent>();

function handleDownload() {
	html2PDF(content.value as HTMLDivElement);
}

function handlePrint() {
	frame.value?.handlePrint();
}

onMounted(() => {
	frame.value?.setContent();
});
</script>

<style lang="less" scoped>
@import './common.less';
</style>
