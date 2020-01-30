<template>
	<div>
		<div class="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
			<section v-for="user in users" v-bind:key="user.uuid" v-bind:user="user">
				<div class="border-b px-4 pb-6">
					<div class="text-center sm:text-left sm:flex mb-4">
						
						<div class="py-2">
							<svg class="h-6 w-6 text-grey mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/></svg>
							<h3 class="font-bold text-2xl mb-1">{{user.first_name}} {{user.last_name}}</h3>
							<div class="inline-flex text-grey-dark sm:flex items-center">
								{{user.email}}
							</div>
						</div>
					</div>
				</div>
				<div class="px-4 py-4">
					<div class="flex items-center text-grey-darker mb-4">
						<span><strong class="text-black">Date d'anniversaire:</strong> {{user.birth_date}}</span>
					</div>
					<div class="flex">
						<div v-if="user.access_level == 0" class="flex flex-row-reverse justify-end mr-2">
							<span><strong class="text-black">Role:</strong> Utilisateur</span>
						</div>
						<div v-else-if="user.access_level == 1" class="flex flex-row-reverse justify-end mr-2">
							<span><strong class="text-black">Role:</strong> Administrateur</span>
						</div>
					</div>
				</div>
				<button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple"><router-link :to="{ name: 'UpdateProfil', params: { UUID: uuid } }">Modifier le profil</router-link></button>
				<button @click="deleteUser(user)" class="text-white font-semibold rounded-full px-4 py-1 leading-normal bg-red-500 border border-purple text-purple">Supprimer le profil</button>
			</section>
		</div>
	</div>
</template>

<script>
export default {
	name: "AllUsers",
	data: () => ({
		users:[
			{}
		]
	}),
	methods: {
		setdata(){
			this.$store.dispatch('users/getusers',{vm:this});
		},
		deleteUser(e){
			if(confirm('Êtes vous sur de vouloir supprimer ce profil?')){
				this.$store.dispatch('users/deleteuser',{vote:{},
					uuid:e.uuid,
					vm:this});
				this.users = this.users.filter(user => user.uuid !== e.uuid)
			}
		},
	},
	mounted() {
		this.setdata();
	},
    watch: { 
        type: function() { // watch it
            this.users();
        }
    }
}
</script>

<style>

</style>