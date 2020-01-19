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
<<<<<<< HEAD
			this.$store.dispatch('users/login',{user:e,vm:this})
=======
      axios.post('http://localhost:8011/login/',{
		"email": e.email,
		"pass": e.password
		})
      .then((response) => {
		localStorage.setItem('userToken',response.data) 
		localStorage.setItem('accessLevel',response.data.access_level) 
		this.$notify({
				group: 'foo',
				title: 'Bienvenue',
				type: 'success',
				duration:1000,
				text: 'Vous êtes connecté!'
		});
		setTimeout(function(){
			window.location.href = "/";
		}, 1000);
      }, (error) => {
        if(error.response.status == 404){
			this.$notify({
				group: 'foo',
				title: 'Erreur',
				type: 'error',
				duration:5000,
				text: error.response.data
			});
        }
      });
>>>>>>> User profil
	}
  }
}
</script>
<style>
</style>