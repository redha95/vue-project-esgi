<template>
	<div>
		<section v-for="vote in votes" v-bind:key="vote.UUID" v-bind:vote="vote">
			<div class="container mx-auto py-10">
				<div class="border m-6 rounded-lg  bg-white shadow-xl rounded-lg overflow-hidden">
					<div class="sm:flex sm:items-center px-6 py-4">
						<div class="text-center sm:text-left sm:flex-grow">
							<div class="mb-4 relative">
								<p class="text-3xl leading-tight mb-3">{{vote.title}}</p>
									<b v-if="vote.uuid_vote" class="absolute right-0 top-0"> Nombre de votes : {{vote.uuid_vote.length}}</b>
									<b v-else class="absolute right-0 top-0"> Nombre de votes : 0</b>
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
				end_date: "plop",
				uuid_vote: []
			}
		]
	}),
	methods: {
		setdata(){
			this.$http.get('http://localhost:8011/votes/',{headers: {Authorization: "Bearer "+localStorage.getItem("userToken") }})
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