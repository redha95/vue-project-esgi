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
								<svg class="h-5 w-5 mr-2 fill-current" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-49 141 512 512" style="enable-background:new -49 141 512 512;" xml:space="preserve">
									<path id="XMLID_10_" d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"></path>
								</svg>
								Retour
								</button>
								</a>
								<a href="/allVotes"> <button @click="deleteVote" class="auth-button border block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:text-white hover:bg-red-500 border-red-500 text-red-500">

								<img class="h-5 w-5 mr-2 fill-current" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTExLjk5MiA1MTEuOTkyIiB3aWR0aD0iNTEycHgiPjxwYXRoIGQ9Im00MTUuNDAyMzQ0IDQ5NS40MjE4NzUtMTU5LjQwNjI1LTE1OS40MTAxNTYtMTU5LjQwNjI1IDE1OS40MTAxNTZjLTIyLjA5NzY1NiAyMi4wOTM3NS01Ny45MjE4NzUgMjIuMDkzNzUtODAuMDE5NTMyIDAtMjIuMDkzNzUtMjIuMDk3NjU2LTIyLjA5Mzc1LTU3LjkyMTg3NSAwLTgwLjAxOTUzMWwxNTkuNDEwMTU3LTE1OS40MDYyNS0xNTkuNDEwMTU3LTE1OS40MDYyNWMtMjIuMDkzNzUtMjIuMDk3NjU2LTIyLjA5Mzc1LTU3LjkyMTg3NSAwLTgwLjAxOTUzMiAyMi4wOTc2NTctMjIuMDkzNzUgNTcuOTIxODc2LTIyLjA5Mzc1IDgwLjAxOTUzMiAwbDE1OS40MDYyNSAxNTkuNDEwMTU3IDE1OS40MDYyNS0xNTkuNDEwMTU3YzIyLjA5NzY1Ni0yMi4wOTM3NSA1Ny45MjE4NzUtMjIuMDkzNzUgODAuMDE5NTMxIDAgMjIuMDkzNzUgMjIuMDk3NjU3IDIyLjA5Mzc1IDU3LjkyMTg3NiAwIDgwLjAxOTUzMmwtMTU5LjQxMDE1NiAxNTkuNDA2MjUgMTU5LjQxMDE1NiAxNTkuNDA2MjVjMjIuMDkzNzUgMjIuMDk3NjU2IDIyLjA5Mzc1IDU3LjkyMTg3NSAwIDgwLjAxOTUzMS0yMi4wOTc2NTYgMjIuMDkzNzUtNTcuOTIxODc1IDIyLjA5Mzc1LTgwLjAxOTUzMSAwem0wIDAiIGZpbGw9IiNlNzZlNTQiLz48L3N2Zz4K" />
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