<template>
    <div>
        <Login v-if="wantToLogin"/>
        <Register @registred="wantToLogin = true" v-else/>
        <button v-on:click="wantToLogin = !wantToLogin">{{wantToLogin? 'S\'inscrire' :' Se connecter'}}</button>
    </div>
</template>

<script>

import Login from './authentification/Login';
import Register from './authentification/Register';

export default {
	name: "Authentification",
	components: {
        Login,
        Register
	},
	data: () => ({
        wantToLogin: true
    }),
	methods: {}
}
</script>
<style>
</style>