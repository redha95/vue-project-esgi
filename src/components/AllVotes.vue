<template>
	<div>
		<section v-for="vote in votes" v-bind:key="vote.UUID" v-bind:vote="vote">
			<div class="container mx-auto py-10">
				<div class="border m-6 rounded-lg  bg-white shadow-xl rounded-lg overflow-hidden">
					<div class="sm:flex sm:items-center px-6 py-4">
						<div class="text-center sm:text-left sm:flex-grow">
							<div class="mb-4">
								<p class="text-3xl leading-tight mb-3">{{vote.title}}</p>
								<p class="text-base leading-tight text-grey-dark">{{vote.description}}</p>
							</div>
							<div class="flex justify-center flex-wrap mt-6">
								<button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple"><router-link :to="{ name: 'VoteDetails', params: { UUID: vote.UUID } }">Voir Plus</router-link></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "AllVotes",
	data: () => ({
		votes:[
			{
				UUID: 77777,
				title: "titre",
				description: "Description",
				start_date: "plop",
				end_date: "plop"
			}
		]
	}),
	methods: {
		setdata(){
			this.$http.get('http://localhost:8011/votes/',{headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDbGFpbXMiOm51bGwsIklEIjoxLCJ1dWlkIjoiNWZlZmY1MmYtYjRhZC00MWFkLTUwMmItOTUwNDMxYjc2NDA5IiwiYWNjZXNzX2xldmVsIjoxLCJmaXJzdF9uYW1lIjoiS2FyaW0iLCJsYXN0X25hbWUiOiJCZW56ZW1hIiwiZW1haWwiOiJwbG9wQGJlbnplbWEuaW8iLCJwYXNzIjoiJDJhJDE0JDA5U3dIb04wZi5kZy9CWEg5UjR1NS5RNFVhUkFjSFdkamxMSHVjaWVNaGE4MmN0WUhLb3l5IiwiYmlydGhfZGF0ZSI6IjE5LTEyLTE5ODciLCJhY3RpdmUiOnRydWV9.YTKwmqvNirZJDTdm2Deq1Q5opie2Ka-ePSkxdcjyx0M"}})
				.then((result) => {
					this.votes = result.body;
				}).catch((err) => {
					alert(err);
				});
		}
	},
	mounted() {
		this.setdata();
	},
    watch: { 
        type: function() { // watch it
            this.setdata();
        }
    }
}
</script>

<style>

</style>