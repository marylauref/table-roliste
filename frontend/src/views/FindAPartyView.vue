<script>
import partySummary from "../components/partySummary.vue"
export default {
	name: "FindAPartyView",
	components: {
		partySummary,
	},
	data() {
		return {
			parties: [
				{
					id: 1,
					title: "bibi",
					subtitle: "bibi bibi",
					partySummaryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet dui eu diam rhoncus finibus. In finibus tellus quis malesuada sodales. Pellentesque ornare, ipsum quis pellentesque auctor, sapien lorem aliquam turpis, nec fermentum erat dolor vitae nisl. Donec a purus semper, volutpat leo blandit, laoreet ante. Suspendisse et diam eu justo pretium pulvinar non quis nibh. Sed dapibus metus eros, id gravida arcu vehicula et. Nullam in tellus lorem. Integer vulputate mi hendrerit, aliquet risus in, semper odio. Quisque lectus ligula, consequat in convallis iaculis, vulputate id metus. Vestibulum dolor orci, placerat ac varius ut, rhoncus sed mauris. ",
					tags: {
						type: "Médieval Fantastique",
						system: "D&D",
						time: "14h45",
						duration: "30min",
						location: "16",
					},
				},
				{
					id: 2,
					title: "bobo",
					subtitle: "bobo bobo",
					partySummaryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet dui eu diam rhoncus finibus. In finibus tellus quis malesuada sodales. Pellentesque ornare, ipsum quis pellentesque auctor, sapien lorem aliquam turpis, nec fermentum erat dolor vitae nisl. Donec a purus semper, volutpat leo blandit, laoreet ante. Suspendisse et diam eu justo pretium pulvinar non quis nibh. Sed dapibus metus eros, id gravida arcu vehicula et. Nullam in tellus lorem. Integer vulputate mi hendrerit, aliquet risus in, semper odio. Quisque lectus ligula, consequat in convallis iaculis, vulputate id metus. Vestibulum dolor orci, placerat ac varius ut, rhoncus sed mauris. ",
					tags: {
						type: "Médieval",
						system: "Custom",
						time: "16h30",
						duration: "60min",
						location: "5",
					},
				},
			]
		};
	},
}
</script>

<template>
	<main>
		<v-btn color="primary">
			Filtrer les parties
		</v-btn>
		<v-btn v-if="true" icon="fa-solid fa-grip-lines"></v-btn>
		<v-btn v-else icon="fa-solid fa-grip"></v-btn>

		<partySummary
			v-for="party in parties"
			:key="party.id"
			:partyData="party"
		/>
	</main>
</template>

