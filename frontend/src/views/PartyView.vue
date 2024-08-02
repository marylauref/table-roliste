<template>
	Party ID : {{ $route.params.id }}
	<v-card
		:title="party.title"
		:subtitle="party.author"
	>
	<!-- 
		:title="party.title"
		:subtitle="party.author"
	-->
		<!-- <img src="../assets/backgroundSample.jpg"/> -->
		<!-- <v-card-item :style="styleCardItem">
			<v-card-title>{{ party.title }}</v-card-title>
			<v-card-subtitle>{{ party.author }}</v-card-subtitle>
		</v-card-item> -->
		
		<v-card-text>
			<section></section>
			<section>{{ party.description }}</section>
		</v-card-text> 
		<v-card-actions>
			<v-btn v-if="party.isUserSubscribed && !party.isUserConfirmed"
				color="warning"
			>
				Confirmer ma présence
			</v-btn>
	
			<v-btn v-if="party.isUserSubscribed"
				color="secondary"
			>
				Se désinscrire
			</v-btn>
			<v-btn v-else
				color="primary"
			>
				S'inscrire
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	export default {
		name: "PartyView",

		components: {},

		props: {},

		emits: {},

		data: () => {
			return {
				party: {},
			};
		},

		computed: {			
			headerBackground() {
				return `url("${ this.party.headerBackground }")`;
			},
		},

		watch: {},

		methods: {
		async getParty() {

			await fetch("/").then((response) => {
				const fakeData = {
						id: this.$route.params.id,
						title: "Une Incroyable Aventure",
						headerBackground: "/src/assets/backgroundSample.jpg",
						author: "Jone Doe",
						type: "Médiéval Fantastique",
						gameSystem: "D&D",
						schedule: "14h45",
						duration: "30min",
						tableNumber: 50,
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper, mauris id placerat volutpat, elit augue sodales velit, a aliquet lorem quam at ex. Duis elit massa, efficitur vel posuere vitae, viverra feugiat metus. Vestibulum feugiat, augue id elementum sollicitudin, velit lectus congue turpis, nec pulvinar lacus ligula non mauris. Mauris mattis, urna pellentesque euismod tristique, dolor ipsum volutpat magna, vitae lobortis metus massa sit amet sapien. Proin in malesuada odio. Etiam eu lorem iaculis risus tincidunt ultricies sit amet in odio. Donec porta, arcu at sollicitudin luctus, dui felis gravida nulla, a laoreet nisi ligula a nunc. Ut tincidunt nunc eget scelerisque lacinia. Quisque in nunc mi. ",
						isUserSubscribed: true,
						isUserConfirmed: true,
					};
				return fakeData;
				// return response.json();
			}).then((response) => {
				this.party = response;
			});
		},},

		beforeMount() {
			this.getParty(this.$route.params.id);
		},
		mounted() {},
	}
</script>

<style lang="less" scoped>
	.v-card{
		&:deep(.v-card-item) {
			background-image: linear-gradient(#00000000, #00000000, #0000003d, #0000008e), v-bind(headerBackground);
			background-color: #cfb7a3;
			background-size: cover;

			color: white;
		}
	}
</style>