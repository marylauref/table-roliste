import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FindAPartyView from '../views/FindAPartyView.vue'
import MyAccountView from '../views/MyAccountView.vue'
import addBreadCrumbMetaData from './breadCrumb'

const routesOptions = {
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			alias: "/home",
			// redirect: '/findAParty',
			meta: {
				text: "Accueil",
			},
		},
		{
			path: '/findAParty',
			name: 'findAParty',
			component: FindAPartyView,
			meta: {
				text: "Trouver une partie",
			},
			// children: [
			// 	{
			// 		path: '2',
			// 		name: 'Trouver une partie 2',
			// 		component: FindAPartyView,
			// 		meta: {
			// 			breadCrumb: [
			// 				{
			// 					text: "Home",
			// 					to: { name: 'Home' },
			// 				},
			// 				{
			// 					text: "Trouver une partie",
			// 					to: { name: 'Trouver une partie' },
			// 				},
			// 				{ text: "Trouver une partie 2" },
			// 			],
			// 		},
			// 	},
			// ],
		},
		{
			path: '/MyAccount',
			name: 'myAccount',
			component: MyAccountView,
			meta: {
				text: "Mon compte",
			},
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
};
addBreadCrumbMetaData(routesOptions.routes);
const router = createRouter(routesOptions);

export default router
