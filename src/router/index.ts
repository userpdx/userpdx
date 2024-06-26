import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/HomePage/HomePage.vue'),
		},
	],
});

export default router;
