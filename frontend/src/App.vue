<script>
	import { RouterView } from 'vue-router'
	// import { RouterLink, RouterView } from 'vue-router'
	// import HelloWorld from './components/HelloWorld.vue'

	export default {
		components: {
			RouterView,
		},
		data: () => ({
			drawer: false,
			group: null,
			items: [
				{
					title: 'Foo',
					value: 'foo',
				},
				{
					title: 'Bar',
					value: 'bar',
				},
				{
					title: 'Fizz',
					value: 'fizz',
				},
				{
					title: 'Buzz',
					value: 'buzz',
				},
			],
			breadcrumbsList: [
				{
					title: "accueil",
					to: "/",
					disabled: false,
				}, 
				{
					title: "tourver une partie",
					to: "/trouverUnePartie",
					disabled: false,
				}, 
			],
		}),

		watch: {
			group () {
				this.drawer = false
			},
		},

		mounted() {
			console.log("$route", this.$route);
			console.log("$route.params.id ", this.$route.params.id );
		}
	}
</script>

<template>
	<v-layout>
		<!-- TODO creuser plus loins pour voir le fonctionnement du layou vuetify -->

		<header>
			<v-toolbar color="primary">
				<v-btn icon>
					<v-icon icon="fas fa-home" />
				</v-btn>
				<!-- <v-app-bar-nav-icon variant="text" ><v-icon icon="fas fa-home" /></v-app-bar-nav-icon> -->
				<v-toolbar-title>Table Roliste</v-toolbar-title>
				<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			</v-toolbar>
		</header>
		<v-navigation-drawer
			v-model="drawer"
			:location="$vuetify.display.mobile ? 'bottom' : undefined"
			temporary
		>
			<v-list
				:items="items"
			></v-list>
		</v-navigation-drawer>
	
	</v-layout>
	<v-breadcrumbs :items="breadcrumbsList"></v-breadcrumbs>
	<RouterView />
</template>

<style scoped>
header {
	line-height: 1.5;
	max-height: 100vh;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}

	nav {
		text-align: left;
		margin-left: -1rem;
		font-size: 1rem;

		padding: 1rem 0;
		margin-top: 1rem;
	}
}
</style>
