<template>
    <div>
        <Authentification v-if="isNotLogged"/>
        <div v-else>
            <h1>My account</h1>
        </div>
    </div>
</template>

<script>
import Authentification from './Authentification'

export default {
	name: "Account",
	components: {
        Authentification
	},
	data: () => ({
        isNotLogged: localStorage.getItem("userToken") == null
    }),
    methods:{
    }
}
</script>
<style>
</style>