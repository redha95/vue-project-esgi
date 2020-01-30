<template>

  <Formik @onSubmit="handleSubmit" :fields="fields" :typeField="typeField"><p class="text-gray-800 font-medium">Créer une proposition</p>
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
		typeField:
			{
				buttonSubmit:"Creer",
				routeButtonRetour:"/allVotes"
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
	methods: {
		handleSubmit: function(e) {
			this.$store.dispatch('votes/create',{vote:{
					title: e.title,
					description: e.description,
					start_date: new Date(),
					end_date: new Date(new Date().getTime()+(10*24*60*60*1000))
				},vm: this});
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