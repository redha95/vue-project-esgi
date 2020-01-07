<template>

  <Formik @onSubmit="handleSubmit" :fields="fields" :typeField="typeField"><p class="text-gray-800 font-medium">Inscription</p>
          <Fields
              v-for="field in fields"
              v-bind:key="field.id"
              :field="field"></Fields>
  </Formik>
</template>

<script>

import Formik from '../formik/Formik';
import Fields from '../formik/Fields';
import axios from 'axios';

export default {
	name: "Register",
	components: {
		Formik,
		Fields
	},
	data: () => ({
		typeField:
			{
				buttonSubmit:"S'inscrire    "
			},
		fields: [
            {
				type: "text",
				name: "firstname",
				id: "firstname",
				label: "",
				placeholder: "Prénom",
				disable: false,
				value:""
            },
            {
				type: "text",
				name: "lastname",
				id: "lastname",
				label: "",
				placeholder: "Nom",
				disable: false,
				value:""
            },
            {
				type: "date",
				name: "birthDate",
				id: "birthDate",
				label: "",
				placeholder: "Date de naissance",
				disable: false,
				value:""
            },
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
            },
            {
				type: "password",
				name: "confirmPassword",
				id: "confirmPassword",
				label: "",
				placeholder: "Confirmer mot de passe",
				disable: false,
				value:""
            },
		]
	}),
	methods: {
		handleSubmit: function(e) {
        /* eslint-disable no-console */
        console.log(e);
        axios.post('http://localhost:8011/users/',{
            "first_name": e.firstname,
            "last_name": e.lastname,
            "email":e.email,
            "pass": e.password,
            "birth_date": e.birthDate,
        })
        .then(() => {
            this.$emit('registred', 'true')
            this.$notify({
                group: 'foo',
                title: 'Felicitation',
                type: 'success',
                duration:5000,
                text: 'Vous êtes inscrit!'
            });
        }, (error) => {
			this.$notify({
				group: 'foo',
				title: 'Erreur',
				type: 'error',
				duration:5000,
				text: error.response.data
			});
        });
	}
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