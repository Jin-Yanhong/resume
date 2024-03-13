/* eslint-disable */
/// <reference types="@vue/runtime-core" />
import { i18n } from '@/i18n';

const { te, tm, t } = i18n.global;

declare module '*.vue' {
	interface ComponentCustomProperties {
		$te: typeof te;
		$tm: typeof tm;
		$t: typeof t;
	}
	export default component;
}
