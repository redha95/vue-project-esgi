<template>
 <div class=" container mx-auto py-10">
		<div class="border m-6 rounded-lg  bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
			<div class="sm:flex sm:items-center px-6 py-4">
				<img class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://api.adorable.io/avatars/196/abott@adorable.png" alt="">
					<div class="text-center sm:text-left sm:flex-grow">
						<div class="mb-4">
							<p class="text-xl leading-tight">{{vote.title}}</p>
							<p class="text-sm leading-tight text-grey-dark">{{vote.description}}</p>
						</div>
						<div class="flex flex-wrap">
							<button class=" text-xs font-semibold rounded-full px-4 py-1 mx-3  leading-normal bg-white border border-blue text-blue hover:bg-blue hover:text-white">Voter</button>
							<button class="  text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Retour</button>
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
		uuid: this.$route.params.UUID
	},
	mounted() {
		this.$http.get('http://localhost:8011/votes/'+this.uuid,{headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDbGFpbXMiOm51bGwsIklEIjoxLCJ1dWlkIjoiNWZlZmY1MmYtYjRhZC00MWFkLTUwMmItOTUwNDMxYjc2NDA5IiwiYWNjZXNzX2xldmVsIjoxLCJmaXJzdF9uYW1lIjoiS2FyaW0iLCJsYXN0X25hbWUiOiJCZW56ZW1hIiwiZW1haWwiOiJwbG9wQGJlbnplbWEuaW8iLCJwYXNzIjoiJDJhJDE0JDA5U3dIb04wZi5kZy9CWEg5UjR1NS5RNFVhUkFjSFdkamxMSHVjaWVNaGE4MmN0WUhLb3l5IiwiYmlydGhfZGF0ZSI6IjE5LTEyLTE5ODciLCJhY3RpdmUiOnRydWV9.YTKwmqvNirZJDTdm2Deq1Q5opie2Ka-ePSkxdcjyx0M"}})
				.then((result) => {
					this.vote = result.body;
				}).catch((err) => {
					alert(err);
				});
	},
}
</script>

<style>

</style>