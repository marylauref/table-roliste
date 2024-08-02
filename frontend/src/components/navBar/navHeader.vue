<template>
	<v-app-bar>
		<v-toolbar color="primary">
			<v-btn icon :to="'/'">
				<genericIcon icon="fa-solid fa-dice-d20"/>
			</v-btn>
			<v-app-bar-title>Table Roliste</v-app-bar-title>

			<navBarButtonList v-if="isEnougthWide"/>
			<v-app-bar-nav-icon v-else
				@click.stop="openNavbarDrawerEvent"
			/>
		</v-toolbar>
	</v-app-bar>
</template>

<script>
	import navBarButtonList from "./navBarButtonList.vue"
	export default {
		name: "navHeader",

		components: {
			navBarButtonList,
		},

		props: {
		},

		emits: {
			openNavbarDrawerEmit: null,
		},

		data: () => {
			return {}
		},

		computed: {
			isEnougthWide() {
				
				return this.$vuetify.display.width > 700 ;
			}
		},

		watch: {},

		methods: {
			openNavbarDrawerEvent() {
				this.$emit("openNavbarDrawerEmit");
			},
		},

		mounted() {
		},

	}
</script>

<style scoped>
</style>