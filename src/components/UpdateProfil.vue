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
		votes:[
			{
			}
		],
		token:localStorage.getItem("userToken")
		,
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
		}
	},
	methods: {
		handleSubmit: function() {
			//let token = localStorage.getItem("userToken");
			//this.$notify({title:'dsf',duration:5000,text:this.$route.params.UUID})
			this.$http.put('http://localhost:8011/users/'+this.uuid,{
					first_name:this.$data.fields[0].value,				
					last_name:this.$data.fields[1].value,
					email:this.$data.fields[2].value,
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
				}).catch((err) => {
					
					this.$notify({
						group: 'foo',
						title: 'Erreur fonctionnelle',
						type: 'warn',
						duration:5000,
						text: err
					});
				});
				this.$router.push({ name: 'ProfilUser', params: { UUID: this.uuid }})
				this.$router.go(this.$router.currentRoute)
		},
		setdataprofil(uuid) {
			this.$http.get('http://localhost:8011/users/'+uuid,{headers: {Authorization: "Bearer " + this.token}})
				.then((result) => {
					this.votes = result.body,
					this.fields[0].value = result.body.first_name,
					this.fields[1].value = result.body.last_name,
					this.fields[2].value = result.body.email,
					this.typeField.routeButtonRetour = "/profil/"+uuid
				}).catch((err) => {
					alert(err);
				});
		}
					
		
	},
	mounted() {
		this.setdataprofil(this.uuid);
	},
    watch: { 
        type: function() { // watch it
            this.setdataprofil(this.uuid);
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