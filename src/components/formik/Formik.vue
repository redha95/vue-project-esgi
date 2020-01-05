<template>
<div class="leading-loose m-auto w-1/3">
    <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl" @submit="onSubmit">
        <slot></slot>
        <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">{{ typeField.buttonSubmit }}</button>
        <button class="px-4 py-1 text-white font-light ml-3 tracking-wider bg-red-500 rounded" type="submit"><a :href="typeField.routeButtonRetour" >Retour</a></button>
    </form>
</div>
</template>

<script>
export default {
    name: "Formik",
    data: () => ({
        values: {}
    }),
    props: {
        fields: Array,
        typeField: Object
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