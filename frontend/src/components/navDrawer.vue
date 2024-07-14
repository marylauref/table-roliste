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
			items: [
				{
					// TODO faire fonctionner les liens du navigator drawer
					title: 'Accueil',
					to: 'foo',
				},
				{
					title: 'Mon Compte',
					to: 'bar',
				},
				{
					title: 'Trouver une table',
					to: 'fizz',
				},
				{
					title: 'Mes parties',
					to: 'buzz',
				},
			],
		}),

		computed: {},

		watch: {
			isDrawerVisibleProp () {
				this.isDrawerVisible = this.isDrawerVisibleProp;
			},
		},

		methods: {
		},

		mounted() {
			// this.isDrawerVisible = this.isDrawerVisibleProp;
		},
	}
</script>

<style scoped>
</style>