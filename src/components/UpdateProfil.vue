<template>

  <Formik @onSubmit="handleSubmit" :fields="fields" :typeField="typeField"><p class="text-gray-800 font-medium">Modifier mon profil
  </p>
          <Fields
              v-for="field in fields"
              v-bind:key="field.id"
              :field="field"></Fields>
  </Formik>
</template>

<script>

import Formik from './formik/Formik';
import Fields from './formik/Fields';

export default {
	name: "UpdateProfil",
	components: {
		Formik,
		Fields
	},
	data: () => ({
		user:{},
		typeField:
			{
				buttonSubmit:"Modifier",
				routeButtonRetour:""
			},
		fields: [
			{
				type: "text",
				name: "nom",
				id: "nom",
				label: "",
				placeholder: "Nom",
				disable: false,
				value:""
			},
			{
				type: "text",
				name: "prenom",
				id: "prenom",
				label: "",
				placeholder: "Prenom",
				disable: false,
				value:""
			},
			{
				type: "text",
				name: "email",
				id: "email",
				label: "",
				placeholder: "email",
				disable: false,
				value:""
			}
		]
	}),
	computed: {
		uuid() {
			return this.$route.params.UUID
		},
		token() {
			return localStorage.getItem("userToken")
		}
	},
	methods: {
		handleSubmit: function(e) {
			//let token = localStorage.getItem("userToken");
			//this.$notify({title:'dsf',duration:5000,text:this.$route.params.UUID})
			this.$http.put('http://localhost:8011/users/'+this.uuid,{
					first_name: e.nom,				
					last_name: e.prenom,
					email: e.email
					},{
					headers: {
						Authorization: "Bearer " + this.token
					}
				})
				.then(() => {
					this.$notify({
						group: 'foo',
						title: 'Succès',
						type: 'success',
						duration:5000,
						text: 'Vous venez de modifier votre profil!'
					});
					this.$router.push({ name: 'ProfilUser', params: { UUID: this.uuid }})
				}).catch((err) => {
					
					this.$notify({
						group: 'foo',
						title: 'Erreur fonctionnelle',
						type: 'warn',
						duration:5000,
						text: err
					});
				});
		},
		setdataprofil(uuid) {
			this.$store.dispatch('users/getuser',{uuid:uuid,vm:this});
			this.typeField.routeButtonRetour = "/profil/"+uuid
		}
					
		
	},
	mounted() {
		this.setdataprofil(this.uuid);
	},
    watch: { 
        user: function() { // watch it
			this.fields[0].value = this.user.first_name;
			this.fields[1].value = this.user.last_name;
			this.fields[2].value = this.user.email;
        }
    },
}
</script>
<style>
.auth-button{
    color: #5ab79b;
    border:1px solid #5ab79b;
}

.auth-button:hover{
    background-color: #5ab79b;
    color:white;
}
</style>