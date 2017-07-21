<template>
    <button class="zx-button" :class="checkClass()" type="button" @click="clickFn">
        <span><slot></slot></span>
    </button>
</template>
<script>
    export default {
        name: "zx-button",
        data() {
            return {

            }
        },
        props: {
            type: {
                type: String,
                default: "info"
            },
            size: {
                type: String,
                default: 'default'
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            checkClass() {
                // 判断是否禁用
                let disabled = '';
                if (this.disabled) {
                    disabled = 'disabled';
                }
                return 'zx-button-' + this.type + ' size-' + this.size + ' ' + disabled;
            },
            clickFn($event){
                this.$emit('click',$event)
            }
        }
    }

</script>