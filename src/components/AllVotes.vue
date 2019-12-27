<template>
<ul>
<li v-for="list in lists" v-bind:key="list.id" v-bind:list="list">
 <div class=" container mx-auto py-10">
		<div class="border m-6 rounded-lg  bg-white shadow-xl rounded-lg overflow-hidden">
			<div class="sm:flex sm:items-center px-6 py-4">
					<div class="text-center sm:text-left sm:flex-grow">
						<div class="mb-4">
							<p class="text-3xl leading-tight mb-3">{{list.title}}</p>
							<p class="text-base leading-tight text-grey-dark">{{list.description}}</p>
						</div>
						<div class="flex justify-center flex-wrap mt-6">
							<button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple"><router-link :to="{ name: 'VoteDetails', params: { list } }">Voir Plus </router-link></button>
						</div>
				</div>
			</div>
		</div>
 </div>
</li>
</ul>
</template>

<script>
export default {
	name: "AllVotes",
	data: () => ({
        lists: [
            {title:"Le meilleur buteur", description:"Votez pour le meilleur buteur de ligue 1 2020 !",author:"Redha AISSAOUI",createdAt:"10/10/2010"},
            {title:"Fraise ou banane?", description:"Aidez nous a faire un choix, votez pour votre fruit préferé",author:"Redha AISSAOUI",createdAt:"27/12/2019"},
            {title:"Golf au audi", description:"jfrijfirfjrijfrijrfijfrjfrijfrijfrijfijrfjri",author:"Redha AISSAOUI",createdAt:"01/02/2019"},
            {title:"Golang ou VueJS", description:"quel est le meilleur framework",author:"Redha AISSAOUI",createdAt:"11/11/2011"},
        ],
        name: "Detail d'un vote"
    })
}
</script>

<style>

</style>