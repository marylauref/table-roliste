import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FindAPartyView from '../views/FindAPartyView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: HomeView,
			// redirect: '/trouverUnePartie',
			meta: {
				breadCrumb: [
					{
						text: "Home",
					},
				],
			},
		},
		{
			path: '/trouverUnePartie',
			name: 'Trouver une partie',
			component: FindAPartyView,
			meta: {
				breadCrumb: [
					{
						text: "Home",
						to: { name: 'Home' },
					},
					{ text: "Trouver une partie" },
				],
			},
			children: [
				{
					path: '2',
					name: 'Trouver une partie 2',
					component: FindAPartyView,
					meta: {
						breadCrumb: [
							{
								text: "Home",
								to: { name: 'Home' },
							},
							{
								text: "Trouver une partie",
								to: { name: 'Trouver une partie' },
							},
							{ text: "Trouver une partie 2" },
						],
					},
				},
			],
		},
		// {
		// 	path: '/about',
		// 	name: 'about',
		// 	// route level code-splitting
		// 	// this generates a separate chunk (About.[hash].js) for this route
		// 	// which is lazy-loaded when the route is visited.
		// 	component: () => import('../views/AboutView.vue')
		// }
	]
})

export default router
