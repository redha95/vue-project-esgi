<template>

  <Formik @onSubmit="handleSubmit" :fields="fields" :typeField="typeField"><p class="text-gray-800 font-medium">Modifier une proposition</p>
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
	name: "UpdateVote",
	components: {
		Formik,
		Fields
	},
	data: () => ({
		vote: {},
		typeField:
			{
				buttonSubmit:"Modifier",
				routeButtonRetour:""
			},
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
	computed: {
		uuid() {
			return this.$route.params.UUID
		}
	},
	methods: {
		handleSubmit: function() {
			this.$http.put('http://localhost:8011/votes/'+this.$route.params.UUID,{
					title:this.$data.fields[0].value,				
					desc:this.$data.fields[1].value,
					start_date:this.vote.start_date,
					end_date:this.vote.end_date
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
						text: 'Vous venez de modifier une proposition!'
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
				this.$router.push({ name: 'VoteDetails', params: { UUID: this.$route.params.UUID }})
				this.$router.go(this.$router.currentRoute)
		},
		getVote(uuid) {
			this.$http.get('http://localhost:8011/votes/'+uuid,{headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDbGFpbXMiOm51bGwsIklEIjoxLCJ1dWlkIjoiNWZlZmY1MmYtYjRhZC00MWFkLTUwMmItOTUwNDMxYjc2NDA5IiwiYWNjZXNzX2xldmVsIjoxLCJmaXJzdF9uYW1lIjoiS2FyaW0iLCJsYXN0X25hbWUiOiJCZW56ZW1hIiwiZW1haWwiOiJwbG9wQGJlbnplbWEuaW8iLCJwYXNzIjoiJDJhJDE0JDA5U3dIb04wZi5kZy9CWEg5UjR1NS5RNFVhUkFjSFdkamxMSHVjaWVNaGE4MmN0WUhLb3l5IiwiYmlydGhfZGF0ZSI6IjE5LTEyLTE5ODciLCJhY3RpdmUiOnRydWV9.YTKwmqvNirZJDTdm2Deq1Q5opie2Ka-ePSkxdcjyx0M"}})
				.then((result) => {
					this.vote = result.body,
					this.fields[0].value = result.body.title,
					this.fields[1].value = result.body.description
					this.typeField.routeButtonRetour = "/showVote/"+ this.$route.params.UUID
				}).catch((err) => {
					alert(err);
				});
		}
					
		
	},
	mounted() {
		this.getVote(this.uuid);
	},
	watch: {
		uuid: function() {
			this.getVote(this.uuid);
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