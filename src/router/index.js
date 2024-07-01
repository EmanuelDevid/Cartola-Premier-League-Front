import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
	{
		path: '/',
		component: () => import('../pages/Home/index.vue')
	},
	{
		path: '/about',
		component: () => import('../pages/About/index.vue')
	},
]

const router = createRouter({
	history: createMemoryHistory(),
	routes,
})

export default router