<template>
	<v-navigation-drawer
		v-model="isDrawerVisible"
		location="right"
		temporary
	>
		<v-list>
			<v-list-item
				v-for="(item, i) in buttonsList"
				:key="i"
				:title="item.title"
				:link="true"
				:to="item.to"
			></v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
	import { navBarMenuButtonStore } from "../../stores/navBarMenuButton"
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
			buttonsList: navBarMenuButtonStore().buttonsList,
		}),

		computed: {
		},

		watch: {
			isDrawerVisibleProp () {
				this.isDrawerVisible = this.isDrawerVisibleProp;
			},
		},

		methods: {
		},

		mounted() {
		},
	}
</script>

<style scoped>
</style>