<template>
    <div class="cell-group-w" :class="arrow?'arrow':''" @click="clickFn($event)" v-if="type=='link'">
        <router-link :to='to'>
            <slot name="left"></slot>
            <slot name="right"></slot>
            <slot></slot>
        </router-link>
    </div>
    <div class="cell-group-w label" :class="arrow?'arrow':''" @click="clickFn($event)" v-else-if='type=="label"'>
        <slot name="left"></slot>
        <slot name="right"></slot>
        <slot></slot>
    </div>
    <div class="cell-group-w" :class="arrow?'arrow':''" @click="clickFn($event)" v-else>
        <slot name="left"></slot>
        <slot name="right"></slot>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'zx-cell-item',
        props: {
            title: String,
            arrow: {
                type: Boolean,
                default: false
            },
            type: String,
            to: String,
        },
        methods: {
            clickFn($event) {
                this.$emit("click")
            }
        }
    }

</script>