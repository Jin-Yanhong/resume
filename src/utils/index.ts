import { i18n } from '@/i18n';
import { jsPDF } from 'jspdf';

export function getStorage(key: string): string | Array<any> | object {
	const str: string = window.localStorage[key] ?? undefined;
	try {
		if (str) {
			const storageString = window.localStorage.getItem(key) as string;
			return JSON.parse(storageString)[key];
		} else {
			return '';
		}
	} catch (error: any) {
		return '';
	}
}

export function setStorage(key: string, value: any): void {
	const str = JSON.stringify({
		[key]: value,
	});
	window.localStorage.setItem(key, str);
}

export function clearStorage(): void {
	window.localStorage.clear();
}

export function i18nTm(mst: string): string {
	const { te, tm } = i18n.global;
	const msg = te(mst) ? tm(mst) : '';
	return msg;
}

export function html2PDF(html: HTMLElement | string) {
	var doc = new jsPDF();
	doc.html(html, {
		callback: doc => doc.save(),
		filename: 'xxx',
		windowWidth: 100,
		margin: 20,
		html2canvas: {
			width: 595,
			height: 842,
			windowWidth: 595,
			windowHeight: 842,
			scale: 1,
		},
	});
}
