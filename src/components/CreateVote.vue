<template>
<div class="leading-loose m-auto w-1/3">
  <form id="newVote" @submit="submitVote" class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
    <p class="text-gray-800 font-medium">Créer une proposition</p>
    <div class="">
      <input class="w-full px-5 py-1 mt-10 text-gray-700 bg-gray-200 rounded" v-model="title" id="title" name="title" type="text" required="" placeholder="Titre" >
    </div>
    <div class="mt-2">
      <textarea class="w-full px-5 mt-5 py-4 text-gray-700 bg-gray-200 rounded h-40 resize-none" v-model="description" id="description" name="description" type="text" required="" placeholder="Description.." ></textarea>
    </div>
    <div class="mt-4">
      <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Créer</button>
      <button class="px-4 py-1 text-white font-light ml-3 tracking-wider bg-red-500 rounded" type="submit"><a href="/allVotes">Retour</a></button>
    </div>
  </form>
</div>
</template>

<script>
export default {
	name: "CreateVote",
	data: () => ({
        title: "",
		description: ""
	}),
	methods: {
		submitVote: function() {
			this.$http.post('http://localhost:8011/votes/',{
					headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDbGFpbXMiOm51bGwsIklEIjoxLCJ1dWlkIjoiNWZlZmY1MmYtYjRhZC00MWFkLTUwMmItOTUwNDMxYjc2NDA5IiwiYWNjZXNzX2xldmVsIjoxLCJmaXJzdF9uYW1lIjoiS2FyaW0iLCJsYXN0X25hbWUiOiJCZW56ZW1hIiwiZW1haWwiOiJwbG9wQGJlbnplbWEuaW8iLCJwYXNzIjoiJDJhJDE0JDA5U3dIb04wZi5kZy9CWEg5UjR1NS5RNFVhUkFjSFdkamxMSHVjaWVNaGE4MmN0WUhLb3l5IiwiYmlydGhfZGF0ZSI6IjE5LTEyLTE5ODciLCJhY3RpdmUiOnRydWV9.YTKwmqvNirZJDTdm2Deq1Q5opie2Ka-ePSkxdcjyx0M"
				},
				title:this.$data.title,					
				desc:this.$data.description})
				.then((result) => {
					alert("Vote créer : " + result);
				}).catch((err) => {
					alert(err);
				});
		}
	},
	// mounted() {
	// 	this.getVote(this.uuid);
	// },
	// watch: {
	// 	uuid: function() {
	// 		this.getVote(this.uuid);
	// 	}
	// },
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