<template>

  <Formik @onSubmit="handleSubmit" :fields="fields"><p class="text-gray-800 font-medium">Créer une proposition</p>
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
	name: "CreateVote",
	components: {
		Formik,
		Fields
	},
	data: () => ({
        title: "",
		description: "",
		fields: [
			{
				type: "text",
				name: "title",
				id: "title",
				label: "",
				placeholder: "Titre",
				disable: false,
				value:""
			},
			{
				type: "textarea",
				name: "description",
				id: "description",
				label: "",
				placeholder: "Description",
				disable: false,
				value:""
			}
		]
	}),
	methods: {
		handleSubmit: function() {
			this.$http.post('http://localhost:8011/votes/',{
					title:this.$data.fields[0].value,				
					desc:this.$data.fields[1].value,
					start_date: new Date(),
					end_date: new Date(new Date().getTime()+(10*24*60*60*1000)) // date d'expiration 10jr apres
					},{
					headers: {
						Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDbGFpbXMiOm51bGwsIklEIjoxNiwidXVpZCI6IjgxZTgyYjA0LThhNDQtNGVjMC02MmNjLTg5NTIyODhlOGZlZCIsImFjY2Vzc19sZXZlbCI6MSwiZmlyc3RfbmFtZSI6IkthcmltIiwibGFzdF9uYW1lIjoiQmVuemVtYSIsImVtYWlsIjoiazU2c2QyY29zZHNkbXBsb3BAcGxvcGxwby5vbCIsInBhc3MiOiIkMmEkMTQkcDJzNzFyV3Y3MVZENlY1ZG03TnZQTy5FNy5Pdms4bnJXLmVkZFJuMDdzeEpmYS9HM0hFZVciLCJiaXJ0aF9kYXRlIjoiMTktMTItMTk4NyIsImFjdGl2ZSI6dHJ1ZX0.kIOZjY9-Ga074Bc8_jEFH5TGCbY63O5RLBy-hLfzB0E"
					}
				})
				.then(() => {
					this.$notify({
						group: 'foo',
						title: 'Succès',
						type: 'success',
						duration:5000,
						text: 'Vous venez de créer une proposition!'
					});
				}).catch(() => {
					this.$notify({
						group: 'foo',
						title: 'Erreur fonctionnelle',
						type: 'warn',
						duration:5000,
						text: 'Oups, veuillez ré-essayer.'
					});
				});
				this.$router.push('allVotes')
		},
		
					
		
	}
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