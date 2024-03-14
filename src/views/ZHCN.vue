<template>
	<div class="pages">
		<div class="tips">
			<span> Click </span>
			<RouterLink to="/en-US"> <i> Here </i> </RouterLink>
			<span> for Chinese </span>
		</div>

		<div class="content card">
			<h1 class="center">个人简历</h1>
			<div class="hr" />
			<h2>基本信息</h2>
			<table>
				<tr>
					<td>姓名：xxx</td>
					<td>学校：xxx</td>
				</tr>
				<tr>
					<td>性别：xxx</td>
					<td>学历：xxx</td>
				</tr>
				<tr>
					<td>工作经验：xxx</td>
					<td>期望职位：xxx</td>
				</tr>
				<tr>
					<td>手机/微信：xxx</td>
					<td>期望薪资：xxx</td>
				</tr>
				<tr>
					<td>
						Email：
						<a
							href="mailto:xxx"
							target="_blank">
							xxx
						</a>
					</td>
					<td>
						Github：
						<a
							href="#"
							target="_blank">
							xxx
						</a>
					</td>
				</tr>
			</table>
			<h2>工作经历</h2>
			<div class="flex">
				<h3>xxx科技有限公司</h3>
				<span>&nbsp; (xxxx.xx.xx - xxxx.xx.xx) </span>
			</div>
			<div class="flex">
				<h3>xxx科技有限公司</h3>
				<span>&nbsp; (xxxx.xx.xx - xxxx.xx.xx) </span>
			</div>
			<div class="flex">
				<h3>xxx科技有限公司</h3>
				<span>&nbsp; (xxxx.xx.xx - xxxx.xx.xx) </span>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { defineOptions } from 'vue';
defineOptions({
	name: 'zh-cn',
});
</script>
<style lang="less" scoped>
@import './common.less';
</style>
