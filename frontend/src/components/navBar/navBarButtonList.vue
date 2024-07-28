<template>
	<v-btn v-for="button in buttonsList"
		:key="button"
		:to="button.to"
	>
		{{ button.title }}
	</v-btn>
</template>

<script>
	import { navBarMenuButtonStore } from "../../stores/navBarMenuButton"
	
	export default {
		name: "navBarButtonList",

		components: {},

		props: {
		},

		emits: {},

		data: () => {
			return {
				buttonsList: navBarMenuButtonStore().buttonsList,
			};
		},

		computed: {},

		watch: {},

		methods: {},

		mounted() {},
	}
</script>

<style scoped>
</style>