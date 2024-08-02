<template>
	<section class="content-container">
		<slot></slot>
	</section>
</template>

<script>
	export default {
		name: "contentLayout",

		components: {},

		props: {},

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

<style>
	section{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 20px;
		padding: 15px;
		overflow: auto;
	}	
</style>