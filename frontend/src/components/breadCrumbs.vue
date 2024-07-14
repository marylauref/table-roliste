<template>
	<v-breadcrumbs :items="breadcrumbsList">
		<template v-slot:item="{ item }">
			<v-breadcrumbs-item
				:to="item.to"
				:disabled="item.disabled"
			>
				{{ item.text }}
			</v-breadcrumbs-item>
    </template>
	</v-breadcrumbs>
</template>

<script>
	export default {
		name: "breadCrumbs",
		components: {
		},
		data: () => ({
		}),

		computed: {
			breadcrumbsList() {

				let breadCrumb = this.$route.meta.breadCrumb;	
				if (breadCrumb === undefined) return [];

				const lastIndex = breadCrumb.length - 1;
				breadCrumb[lastIndex].disabled = true;
				return breadCrumb;
			},
		},

		mounted() {
		},
	}
</script>

<style scoped>
</style>
