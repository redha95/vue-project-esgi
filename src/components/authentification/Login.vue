<template>

  <Formik @onSubmit="handleSubmit" :fields="fields" :typeField="typeField"><p class="text-gray-800 font-medium">Connexion</p>
          <Fields
              v-for="field in fields"
              v-bind:key="field.id"
              :field="field"></Fields>
  </Formik>
</template>

<script>

import Formik from '../formik/Formik';
import Fields from '../formik/Fields';

export default {
	name: "Login",
	components: {
		Formik,
		Fields
	},
	data: () => ({
		typeField:
			{
				buttonSubmit:"Se connecter"
			},
		fields: [
			{
				type: "text",
				name: "email",
				id: "email",
				label: "",
				placeholder: "Email",
				disable: false,
				value:""
			},
			{
				type: "password",
				name: "password",
				id: "password",
				label: "",
				placeholder: "Mot de passe",
				disable: false,
				value:""
			}
		]
	}),
	methods: {
		handleSubmit: function(e) {
			this.$store.dispatch('users/login',{user:e,vm:this})
	}
  }
}
</script>
<style>
</style>