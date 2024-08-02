<template>
	<v-data-table-virtual :items="myParties"
		:headers="columns"
		:fixed-header="true"
		v-model:sort-by="sortBy"
		:row-props="addRowClickEvent"
	>
		<template v-slot:item.game="{ value }">
			<div class="td-game">
				{{ value.name }}
				<genericIcon v-if="!value.isPartyConfirmed"
					icon="fa-solid fa-triangle-exclamation"
					color="warning"
				/>
			</div>
		</template>
		<template v-slot:item.schedule="{ value }">
			{{ scheduleTemplate(value) }}
		</template>
	</v-data-table-virtual>
</template>

<script>
export default {
	name: "MyPartiesView",

	components: {},

	props: {},

	emits: {},

	data: () => {
		return {
			myParties: [],
			columns: [
				{
					title: "Horaires",
					key: "schedule",
				},
				{
					title: "Jeux",
					key: "game",
					width: "100%",
				},
				{
					title: "N° table",
					key: "tableNumber",
				},
			],
			sortBy: [{ key: 'schedule', order: 'asc' }],
		};
	},

	computed: {
		// columns() {
		// 	return [
		// 		{
		// 			title: "Horaires",
		// 			key: "schedule",
		// 			value: this.scheduleTemplate,
		// 		},
		// 		{
		// 			title: "Jeux",
		// 			key: "game",
		// 			width: "100%",
		// 		},
		// 		{
		// 			title: "N° table",
		// 			key: "tableNumber",
		// 		},
		// 	];
		// },
	},

	watch: {},

	methods: {
		async getMyParties() {

			await fetch("/").then((response) => {
				const fakeData = [];
				for (let i = 0; i < 10; i++) {
					fakeData.push({
						schedule: new Date(2024, 9, 15, parseInt(Math.random()*10) + 13, parseInt(Math.random()*60)).toISOString(),
						game: {
							name: "Partie " + i,
							isPartyConfirmed: Math.random() < 0.6,
						},
						tableNumber: parseInt(Math.random()*100),
						id: i
					});
				}
				return fakeData;
				// return response.json();
			}).then((response) => {
				this.myParties = response;
			});
		},

		scheduleTemplate(schedule) {
			const rawSchedule = (new Date(schedule)).toLocaleTimeString(this.language, {
				timeStyle: "short",
			});
			return rawSchedule
		},

		addRowClickEvent(rowData) {
			return {
				onclick: () => {
					this.goToPartyView(rowData.item.id)
				},
			}
		},

		goToPartyView(rowId) {
			console.log("goToPartyView rowId", rowId);
		},
	},

	beforeMount() {
		this.getMyParties();
	},

	mounted() {
		this.language = navigator.language;
	},
}
</script>

<style lang="less" scoped>
	.v-table {
		height: 100%;
	}
	.td-game {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>