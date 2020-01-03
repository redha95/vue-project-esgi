<template>
    <fieldset>
        <label
            v-if="field.type != 'select' && field.type != 'radio' && field.type != 'textarea'"
            :for="field.id">{{ field.label }}
            <input class="w-full px-5 py-1 mt-10 text-gray-700 bg-gray-200 rounded"
                :type="field.type"
                :name="field.name"
                :id="field.id"
                :placeholder="field.placeholder"
                :value="field.value"
                v-model="field.value"
                :disabled="field.disable == true"
                :checked="field.value == 1 && field.type == 'checkbox'" />
        </label>
        <div
            v-if="field.type == 'radio'"
            :for="field.id">
            <label>{{ field.label }} : </label>
            <label
                v-for="option in field.options"
                v-bind:key="option.value">{{ option.label }}
            <input
                :type="field.type"
                :name="field.name"
                :value="option.value"
                :checked="field.value == option.value" 
                v-model="option.value"/>
                </label>
        </div>
        <label
            v-if="field.type == 'textarea'"
            :for="field.id">{{ field.label }}
            <textarea class="w-full px-5 mt-5 py-4 text-gray-700 bg-gray-200 rounded h-40 resize-none"
                :name="field.name"
                :id="field.id"
                :placeholder="field.placeholder"
                :disabled="field.disable == true"
                v-model="field.value"></textarea>
        </label>
        <label
            v-if="field.type == 'select'"
            :for="field.id">{{ field.label }}
            <select
                :name="field.name"
                :id="field.id"
                :placeholder="field.placeholder"
                :disabled="field.disable == true"
                v-model="option.value">
                <option
                    v-for="option in field.options"
                    v-bind:key="option.value"
                    :value="option.value"
                    :selected="field.value == option.value">
                    {{ option.label }}
                </option>
            </select>
        </label>
    </fieldset>
</template>

<script>
export default {
    name: 'Fields',
    props:{
        field: Object
    }
}
</script>