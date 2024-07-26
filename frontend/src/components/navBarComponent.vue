<template>
	<navHeader @openNavbarDrawerEmit="openNavbarDrawerEvent"></navHeader>
	<navDrawer :isDrawerVisibleProp="isDrawerVisible"></navDrawer>
</template>

<script>
	import navHeader from "./navHeader.vue";
	import navDrawer from "./navDrawer.vue"

	export default {
		name: "navBarComponent",

		components: {
			navHeader,
			navDrawer,
		},

		props: {},

		emits: {},

		data: () => ({
			isDrawerVisible: false,
		}),

		computed: {},

		watch: {},

		methods: {
			openNavbarDrawerEvent() {
				this.isDrawerVisible = !this.isDrawerVisible;
			},
		},

		mounted() {},
	}
</script>

<style scoped>
</style>
