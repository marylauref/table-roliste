<template>
	<v-icon
		:icon="icon"
		:color="color"
	/>
</template>

<script>
	export default {
		name: "genericIcon",

		components: {},

		props: {
			icon: String,
			color: String,
		},

		emits: {},

		data: () => {
			return {};
		},

		computed: {},

		watch: {},

		methods: {},

		mounted() {},
	}
</script>

<style scoped>
.v-icon {
	height: auto;
	width: auto;
}
</style>