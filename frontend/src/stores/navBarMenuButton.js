import { defineStore } from 'pinia'
import router from '../router/routes'

export const navBarMenuButtonStore = defineStore( "menu", {

	state: () => {
		return {
			routeNameList: [
				"home",
				"myAccount",
				"findAParty",
				"myParties",
				"connexion",
			],
		};
	},

	getters: {
		buttonsList() {
			const routes = router.getRoutes();

			const buttonDataList = this.routeNameList.map( routeName => {
				// like this.home, this.myAccount, ...
				const routeOptions = getItemsOptions(routes, routeName);
				return {
					title: routeOptions.meta.text,
					to: routeOptions.path,
				};
			});
			return buttonDataList;
		},
	},

	// actions: {
	// 	navBarMenuButtonList() {
	// 		return this.routeNameList;
	// 	},
	// },
});

function getItemsOptions(routes, routeName) {
	return routes.find( route => route.name === routeName);
}

