<template>
	<div class="mx-auto  h-screen flex items-center justify-center px-8">
		<div class="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
			<div class="w-full h-64 bg-top bg-cover rounded-t" style="background-image: url(https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg)"></div>
			<div class="flex flex-col w-full md:flex-row">
				<div class="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
				
					<div class="md:text-3xl">{{vote.start_date}}</div>
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