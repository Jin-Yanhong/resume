<template>
	<iframe
		ref="frame"
		frameborder="0"
		height="0"
		width="0" />
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';

defineOptions({
	name: 'RichText',
});

//暴露相关的方法，使父组件能够调用
defineExpose({
	setContent,
	handlePrint,
});

interface iframeInterface {
	contentWindow?: typeof window;
	contentDocument?: typeof document;
	[key: string]: any;
}

const props = defineProps({
	html: {
		default: undefined,
		type: [HTMLElement, Node, String],
	},
});

const frame = ref<iframeInterface>({});

function setContent() {
	nextTick(() => {
		frame.value.contentDocument?.body?.append(props.html as Node);
	});
}
function handlePrint() {
	frame.value.contentWindow?.print();
}
</script>
