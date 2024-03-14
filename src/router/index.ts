import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import Home from '../views/Home.vue';

import 'nprogress/nprogress.css';

NProgress.configure({
	showSpinner: false,
});

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/en-US',
		name: 'en-US',
		component: () => import('../views/ENUS.vue'),
	},
	{
		path: '/zh-CN',
		name: 'zh-CN',
		component: () => import('../views/ZHCN.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/',
	},
];

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 };
	},
	routes,
});

export default router;
