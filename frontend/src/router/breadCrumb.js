export default addBreadCrumbMetaData

function addBreadCrumbMetaData(routes) {
	const metaBreadCrumbWithToOfHome = getMetaBreadCrumbWithTo(routes, "home");
	routes.forEach(route => {
		const breadCrumbList = [];
		if(route.name != "home") {
			breadCrumbList.push(metaBreadCrumbWithToOfHome);
		}
		breadCrumbList.push({
			text: route.meta.text,
		});
		route.meta.breadCrumb = breadCrumbList;
	});
}

function getMetaBreadCrumbWithTo(routes, nameRoute) {
	const routeOptions = routes.find( route => route.name === nameRoute);
	const metaBreadCrumb = {
		text: routeOptions.meta.text,
		to: { name: routeOptions.name },
	};
	return metaBreadCrumb;
}