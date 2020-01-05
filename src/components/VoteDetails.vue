<template>
	<div class="mx-auto  h-screen flex items-center justify-center px-8">
		<div class="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
			<div class="w-full h-64 bg-top bg-cover rounded-t" style="background-image: url(https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg)"></div>
			<div class="flex flex-col w-full md:flex-row">
				<div class="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
				
					<div class="md:text-3xl">{{new Date(vote.start_date).toLocaleDateString()}}</div>
				</div>
				<div class="p-4 font-normal text-gray-800 md:w-3/4">
					<h1 class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">{{vote.title}}</h1>
					<p class="leading-normal">{{vote.description}}</p>
					<div class="flex flex-row items-center mt-4 text-gray-700">
						<div class="w-1/2">
							Créer par : {{vote.author}}
						</div>
						<div class="w-1/2 flex justify-end">
							<a href="/allVotes"> <button class="auth-button border block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:text-white">
									Retour
								</button>
								</a>
								<router-link :to="{ name: 'UpdateVote', params: { UUID: $route.params.UUID } }"><button class="auth-button border block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:text-white hover:bg-yellow-600 border-yellow-600 text-yellow-600">

								Modifier
								</button>
								</router-link>
								<a href="/allVotes"> <button @click="deleteVote" class="auth-button border block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:text-white hover:bg-red-500 border-red-500 text-red-500">

								Supprimer
								</button>
								</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "VoteDetails",
	data:() => ({
		vote: {}
	}),
	computed: {
		uuid() {
			return this.$route.params.UUID
		}
	},
	methods: {
		getVote(uuid) {
			this.$http.get('http://localhost:8011/votes/'+uuid,{headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDbGFpbXMiOm51bGwsIklEIjoxLCJ1dWlkIjoiNWZlZmY1MmYtYjRhZC00MWFkLTUwMmItOTUwNDMxYjc2NDA5IiwiYWNjZXNzX2xldmVsIjoxLCJmaXJzdF9uYW1lIjoiS2FyaW0iLCJsYXN0X25hbWUiOiJCZW56ZW1hIiwiZW1haWwiOiJwbG9wQGJlbnplbWEuaW8iLCJwYXNzIjoiJDJhJDE0JDA5U3dIb04wZi5kZy9CWEg5UjR1NS5RNFVhUkFjSFdkamxMSHVjaWVNaGE4MmN0WUhLb3l5IiwiYmlydGhfZGF0ZSI6IjE5LTEyLTE5ODciLCJhY3RpdmUiOnRydWV9.YTKwmqvNirZJDTdm2Deq1Q5opie2Ka-ePSkxdcjyx0M"}})
				.then((result) => {
					this.vote = result.body;
				}).catch((err) => {
					alert(err);
				});
		},
		deleteVote(){
			if(confirm('Êtes vous sur de vouloir supprimer cette proposition?')){
			this.$http.delete('http://localhost:8011/votes/'+this.$route.params.UUID,{headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDbGFpbXMiOm51bGwsIklEIjoxLCJ1dWlkIjoiNWZlZmY1MmYtYjRhZC00MWFkLTUwMmItOTUwNDMxYjc2NDA5IiwiYWNjZXNzX2xldmVsIjoxLCJmaXJzdF9uYW1lIjoiS2FyaW0iLCJsYXN0X25hbWUiOiJCZW56ZW1hIiwiZW1haWwiOiJwbG9wQGJlbnplbWEuaW8iLCJwYXNzIjoiJDJhJDE0JDA5U3dIb04wZi5kZy9CWEg5UjR1NS5RNFVhUkFjSFdkamxMSHVjaWVNaGE4MmN0WUhLb3l5IiwiYmlydGhfZGF0ZSI6IjE5LTEyLTE5ODciLCJhY3RpdmUiOnRydWV9.YTKwmqvNirZJDTdm2Deq1Q5opie2Ka-ePSkxdcjyx0M"}})
				.then(() => {
					this.$notify({
						group: 'foo',
						title: 'Succès',
						type: 'success',
						duration:5000,
						text: 'Vous venez de supprimer une proposition!'
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
		}
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