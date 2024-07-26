<template>
	<v-app-bar>
		<v-toolbar color="primary">
			<v-btn icon :to="'/'">
				<v-icon icon="fas fa-home"/>
			</v-btn>
			<!-- <v-app-bar-nav-icon variant="text" ><v-icon icon="fas fa-home" /></v-app-bar-nav-icon> -->
			<v-toolbar-title>Table Roliste</v-toolbar-title>
			<v-app-bar-nav-icon @click.stop="openNavbarDrawerEvent"></v-app-bar-nav-icon>
		</v-toolbar>
	</v-app-bar>
</template>

<script>
	export default {
		name: "navHeader",

		components: {},

		props: {},

		emits: {
			openNavbarDrawerEmit: null,
		},

		data: () => ({}),

		computed: {},

		watch: {},

		methods: {
			openNavbarDrawerEvent() {
				this.$emit("openNavbarDrawerEmit");
			},
		},

		mounted() {},
	}
</script>

<style scoped>
</style>