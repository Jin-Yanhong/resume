import { defineStore } from 'pinia';
import { setI18nLanguage } from '@/i18n';
import { WritableComputedRef } from 'vue';
import { getStorage, setStorage } from '@/utils';

const locale = getStorage('locale');

const useAppStore = defineStore({
	id: 'app',
	state: () => ({
		locale: (locale ? locale : window.navigator.language) as
			| string
			| WritableComputedRef<string>,
	}),
	getters: {
		getLocale: state => {
			return state.locale;
		},
	},
	actions: {
		setLocale: function (locale: string | WritableComputedRef<string>) {
			this.locale = locale as string;
			setI18nLanguage(locale);
			setStorage('locale', locale);
		},
	},
});

export default useAppStore;
