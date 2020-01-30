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
		handleSubmit: function(e) {
			this.$store.dispatch('votes/updatevote',{vote:{
				title: e.title,
				description: e.description,
				start_date: this.vote.start_date,
				end_date: this.vote.end_date},
				uuid:this.uuid,
				vm:this});
		},
		getVote(uuid) {
			this.$store.dispatch('votes/getvote',{uuid:uuid,vm:this});
			this.typeField.routeButtonRetour = "/showVote/"+ this.$route.params.UUID;
		}
					
		
	},
	mounted() {
		this.getVote(this.uuid);
	},
	watch: {
		vote: function() {
			this.fields[0].value = this.vote.title,
			this.fields[1].value = this.vote.description
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