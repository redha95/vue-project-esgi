<template>
<div class="leading-loose m-auto w-1/3">
  <!-- <form id="newVote" @submit="submitVote" class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
    <p class="text-gray-800 font-medium">Créer une proposition</p>
    <div class="">
      <input class="w-full px-5 py-1 mt-10 text-gray-700 bg-gray-200 rounded" v-model="title" id="title" name="title" type="text" required="" placeholder="Titre" >
    </div>
    <div class="mt-2">
      <textarea class="w-full px-5 mt-5 py-4 text-gray-700 bg-gray-200 rounded h-40 resize-none" v-model="description" id="description" name="description" type="text" required="" placeholder="Description.." ></textarea>
    </div>
    <div class="mt-4">
      <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Créer</button>
      <button class="px-4 py-1 text-white font-light ml-3 tracking-wider bg-red-500 rounded" type="submit"><a href="/allVotes">Retour</a></button>
    </div>
  </form> -->
  <Formik @onSubmit="handleSubmit" :fields="fields"><p class="text-gray-800 font-medium">Créer une proposition</p>
          <Fields
              v-for="field in fields"
              v-bind:key="field.id"
              :field="field"></Fields>
  </Formik>
</div>
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