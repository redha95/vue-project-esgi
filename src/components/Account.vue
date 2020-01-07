<template>
    <div>
        <Authentification v-if="isNotLogged"/>
        <div v-else>
            <h1>My account</h1>
            <button class="px-4 py-1 text-white font-light ml-3 tracking-wider bg-red-500 rounded"  v-on:click="disconnect">Se deconnecter</button>
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
	methods: {
        disconnect:function(){
            localStorage.removeItem("userToken");
            this.isNotLogged = true;
        }
    }
}
</script>
<style>
</style>