<template>
	<div class="pages">
		<div class="tips">
			<span> 点击 </span>
			<RouterLink to="/zh-CN"> <i> 这里 </i> </RouterLink>
			<span> 查看中文 </span>
		</div>

		<div class="content card">
			<div class="center">
				<span> Thomas Suny</span>
				<span> +86 xxx xxxx xxx</span>
				<span> xxxxxxxxx@outlook.com </span>
			</div>

			<div class="hr" />
		</div>
	</div>
</template>
<script lang="ts" setup>
import { defineOptions } from 'vue';
defineOptions({
	name: 'en-US',
});

console.log(process.env.VUE_APP_PUBLIC_PATH);
</script>
<style lang="less" scoped>
@import './common.less';
</style>
