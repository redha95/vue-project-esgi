<template>
    <form @submit="onSubmit">
        <slot></slot>
        <button type="submit" >Submit</button>
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