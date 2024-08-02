<template>
	<genericIcon icon="fa-solid fa-dice-d20"
		color="primary"
	/>
	<h1>Connexion</h1>
	<v-form @submit.prevent="submitConnexionEvent"
		class="connexion-form"
	>
		<v-text-field label="E-mail"
			v-model="email"
			:rules="validationRules"
		/>
		<v-text-field label="Mot de passe"
			v-model="password"
			:rules="validationRules"
			:type="textOrPassword"
			:append-icon="textOrPasswordIconClass"
			@click:append="isShowPassword = !isShowPassword"
		/>
		<v-btn color="primary"
			type="submit"
		>
			Let's Go !
		</v-btn>
	</v-form>
</template>

<script>
export default {
	name: "ConnexionView",
	components: {
	},

	props: {},

	emits: {},

	data() {
		return {
			email: "",
			password: "",
			validationRules: [
				this.required,
			],
			isShowPassword: false,
		};
	},

	computed: {
		textOrPassword() {
			return this.isShowPassword ? "text" : "password";
		},
		textOrPasswordIconClass() {
			const iconClass = this.isShowPassword ? "eye" : "eye-slash";
			return "fa-solid fa-" + iconClass;
		},
	},

	watch: {},

	methods: {
		submitConnexionEvent(event) {
			const logData = {
				email: this.email,
				password: this.password,
			}
			console.log("submitConnexionEvent logData", logData);
		},

		required(value) {

			if (value) return true;
			return "Completez le champs, s'il vous plait."
		}
	},

	mounted() {},
}
</script>

<style lang="less">
	.content-container:has(.connexion-form) {
		align-items: center;
	}
</style>

<style lang="less" scoped>
	.v-icon {
		font-size: 60px;
	}

	.v-form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		gap: 5px;

		.v-input {
			width: 100%;

			&:deep(.v-icon) {
				width: 30px;
			}
		}
	}
</style>
