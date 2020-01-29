<template>
	<div class="font-sans leading-tight min-h-screen bg-grey-lighter p-8">
  <div class="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">

    <div class="border-b px-4 pb-6">
        <div class="text-center sm:text-left sm:flex mb-4">
            
            <div class="py-2">
				<svg class="h-6 w-6 text-grey mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/></svg>
                <h3 class="font-bold text-2xl mb-1">{{votes.first_name}} {{votes.last_name}}</h3>
                <div class="inline-flex text-grey-dark sm:flex items-center">
                    {{votes.email}}
                </div>
            </div>
        </div>
    </div>
    <div class="px-4 py-4">
        <div class="flex items-center text-grey-darker mb-4">
            <span><strong class="text-black">Date d'anniversaire:</strong> {{votes.birth_date}}</span>
        </div>
        <div class="flex">
            <div v-if="votes.access_level == 0" class="flex flex-row-reverse justify-end mr-2">
                <span><strong class="text-black">Role:</strong> Utilisateur</span>
            </div>
             <div v-else-if="votes.access_level == 1" class="flex flex-row-reverse justify-end mr-2">
                <span><strong class="text-black">Role:</strong> Administrateur</span>
            </div>
        </div>
        <div class="flex justify-center flex-wrap mt-6">
		<button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple"><router-link :to="{ name: 'UpdateProfil', params: { UUID: uuid } }">Modifier mon profil</router-link></button>
	</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
	name: "ProfilUser",
	data: () => ({
        token:localStorage.getItem("userToken"),
		votes:[
			{
			}
        ],
	}),
	computed: {
		uuid() {
			return this.$route.params.UUID
		}
	},
	methods: {
		setdataprofil(uuid){
			this.$http.get('http://localhost:8011/users/'+uuid,{headers: {Authorization: "Bearer "+localStorage.getItem("userToken")}})
				.then((result) => {
                    this.votes = result.body;
				}).catch((err) => {
					alert(err);
				});
        }
	},
	mounted() {
		this.setdataprofil(this.uuid);
	},
    watch: { 
        type: function() { // watch it
            this.setdataprofil(this.uuid);
        }
    }
}
</script>

<style>
.h-5 { height: 1.25rem; }
.w-5 { width: 1.25rem; }
.h-40 { height: 10rem; }
.-mt-16 { margin-top: -4rem; }
.-mt-24 { margin-top: -6rem; }
</style>