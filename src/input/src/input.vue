<template>
    <div class="zx-input" v-if="type=='input'">
        <input :placeholder='placeholder' v-model="currentValue">
        <!--<span v-show="required">111</span>-->
    </div>
    <div class="zx-input" v-else-if="type=='password'">
        <input type="password" :placeholder='placeholder' v-model="currentValue">
    </div>
</template>
<script>
    export default {
        name: "zx-input",
        props: {
            type: {
                type: String,
                default: "input"
            },
            value: [String, Boolean],
            placeholder: String,
            required: Boolean
        },
        data() {
            return {
                currentValue: this.value,
            }
        },
        watch: {
            currentValue(newValue, oldValue) {
                this.currentValue = newValue;
                this.input()
            },
            required(val) {
                this.required = val;
            }
        },
        methods: {
            input() {
                this.$emit('input', this.currentValue)
            }
        }
    }

</script>