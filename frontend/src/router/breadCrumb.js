export default addAllBreadCrumbMetaData

function addAllBreadCrumbMetaData(routes) {
	const rootRoutes = routes;
	addBreadCrumbMetaData(rootRoutes, routes);
}

function addBreadCrumbMetaData(rootRoutes, routes, parentBreadCrumbList = undefined) {
	const metaBreadCrumbWithToOfHome = getMetaBreadCrumbWithTo(rootRoutes, "home");
	routes.forEach(route => {
		if (route.path === "") return;

		let breadCrumbList = [];

		// add home at start of breadcrumb
		if(metaBreadCrumbWithToOfHome && route.name != "home" && parentBreadCrumbList === undefined) {
			breadCrumbList.push(metaBreadCrumbWithToOfHome);
		}

		// add parent page
		if (parentBreadCrumbList != undefined) {
			breadCrumbList = breadCrumbList.concat(parentBreadCrumbList);
		}

		// add page
		breadCrumbList.push({
			text: route.meta.text,
		});

		// the breadcrumb for this route is complete
		route.meta.breadCrumb = breadCrumbList;

		// add children
		if (route.children) {

			const parentBreadCrumbList = JSON.parse(JSON.stringify(breadCrumbList));
			const lastbreadCrumbIndex = breadCrumbList.length - 1;
			parentBreadCrumbList[lastbreadCrumbIndex].to = { name: route.name };

			addBreadCrumbMetaData(rootRoutes, route.children, parentBreadCrumbList);
		}


	});
}

function getMetaBreadCrumbWithTo(routes, nameRoute) {
	const routeOptions = routes.find( route => route.name === nameRoute);
	if (routeOptions === undefined) return;
	const metaBreadCrumb = {
		text: routeOptions.meta.text,
		to: { name: routeOptions.name },
	};
	return metaBreadCrumb;
}