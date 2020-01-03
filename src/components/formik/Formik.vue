<template>
    <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl" @submit="onSubmit">
        <slot></slot>
        <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Créer</button>
        <button class="px-4 py-1 text-white font-light ml-3 tracking-wider bg-red-500 rounded" type="submit"><a href="/allVotes">Retour</a></button>
    </form>
</template>

<script>
export default {
    name: "Formik",
    data: () => ({
        values: {}
    }),
    props: {
        fields: Array
    },
    methods: {
        onSubmit: function(e){
            e.preventDefault();
            for (let i = 0; i < this.fields.length; i++) {
                this.values[this.fields[i].name] = this.fields[i].value;
            }
            this.$emit('onSubmit', { ...this.values });
        }
    }
}
</script>