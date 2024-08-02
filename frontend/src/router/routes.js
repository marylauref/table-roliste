import { createRouter, createWebHistory } from 'vue-router'
import addAllBreadCrumbMetaData from './breadCrumb'
import HomeView from '../views/HomeView.vue'
import FindAPartyView from '../views/FindAPartyView.vue'
import ConnexionView from '../views/ConnexionView.vue'
import MyAccountView from '../views/MyAccountView.vue'
import MyPartiesView from '../views/MyPartiesView.vue'
import PartyView from '../views/PartyView.vue'

const routesOptions = {
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			alias: "/home",
			redirect: '/MyParties',
			meta: {
				text: "Accueil",
			},
		},
		{
			path: '/MyAccount',
			name: 'myAccount',
			component: MyAccountView,
			meta: {
				text: "Mon compte",
			},
		},
		{
			path: '/FindParties',
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
			path: '/MyParties',
			name: 'myParties',
			meta: {
				text: "Mes parties",
			},
			children: [
				{
					path: "",
					component: MyPartiesView,
				},
				{
					path: 'Party/:id',
					name: "myPartiesParty",
					component: PartyView,
					meta: {
						text: "Détails de la partie",
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
		{
			path: '/Connexion',
			name: 'connexion',
			component: ConnexionView,
			meta: {
				text: "Connexion",
			},
		},
	]
};
addAllBreadCrumbMetaData(routesOptions.routes);
const router = createRouter(routesOptions);

export default router
