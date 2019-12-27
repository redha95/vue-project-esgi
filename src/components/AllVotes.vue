<template>
 <div class=" container mx-auto py-10">
		<div class="border m-6 rounded-lg  bg-white shadow-xl rounded-lg overflow-hidden">
			<div class="sm:flex sm:items-center px-6 py-4">
					<div class="text-center sm:text-left sm:flex-grow">
						<div class="mb-4">
							<p class="text-3xl leading-tight mb-3">Titre</p>
							<p class="text-base leading-tight text-grey-dark">Description</p>
						</div>
						<div class="flex justify-center flex-wrap mt-6">
							<button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple"><a href="/showVote">Voir Plus</a></button>
						</div>
					</div>
			</div>
		</div>
 </div>
</template>

<script>
export default {
    name: "AllVotes"
}
</script>

<style>

</style>