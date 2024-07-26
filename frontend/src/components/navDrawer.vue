<template>
	<v-navigation-drawer
		v-model="isDrawerVisible"
		location="right"
		temporary
	>
	<!-- 
		:location="$vuetify.display.mobile ? 'bottom' : undefined"
	 -->
		<v-list>
			<v-list-item
				v-for="(item, i) in items"
				:key="i"
				:title="item.title"
				:link="true"
				:to="item.to"
			></v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
	export default {
		name: "navDrawer",

		components: {
		},

		props: {
			isDrawerVisibleProp: Boolean,
		},

		data: () => ({
			isDrawerVisible: false,
			routes: [],
			home: null,
			linksNameList: ["home", "myAccount", "findAParty", "myParties"],
		}),

		computed: {
			items() {
				return this.linksNameList.map( linkName => {
					return {
						title: this[linkName].meta.text,
						to: this[linkName].path,
					};
				});
			}
		},

		watch: {
			isDrawerVisibleProp () {
				this.isDrawerVisible = this.isDrawerVisibleProp;
			},
		},

		methods: {
			getItemsOptions(nameRoute) {
				return this.routes.find( route => route.name === nameRoute);
			}
		},

		beforeMount() {

			this.routes = this.$router.getRoutes();
			this.linksNameList.forEach( linkName => {
				this[linkName] = this.getItemsOptions(linkName);
			});
		},

		mounted() {
			// this.isDrawerVisible = this.isDrawerVisibleProp;
		},
	}
</script>

<style scoped>
</style>