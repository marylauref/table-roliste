<template>
	<main>
		<v-btn color="primary">
			Deconnexion
		</v-btn>
		<v-btn color="secondary">
			Supprimer mon compte
		</v-btn>
</main>
</template>

<script>
export default {
	name: "MyAccountView",
	components: {
	},
	data() {
		return {
		};
	},
}
</script>

<style lang="less" scoped>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}
</style>
