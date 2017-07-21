<template>
    <transition :name="checkFade()">
        <div class="popup-group" v-show="show" ref="popup">
            <div class="popup-mask" @click.stop="close"></div>
            <div :style="style()" :class='checkClass()'>
                <slot></slot>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        name: "zx-popup",
        props: {
            value: {
                type: Boolean,
                default: false
            },
            width: {
                type: String,
                default: '60%'
            },
            height: {
                type: String,
                default: '60%'
            },
            position: {
                type: String,
                default: "right"
            }
        },
        data() {
            return {
                show: this.value
            }
        },
        watch: {
            value(val) {
                if (val) {
                    this.$refs["popup"].className = "popup-group popup-show"
                } else {
                    this.$refs["popup"].className = "popup-group"
                }
                this.show = val;
            }
        },
        methods: {
            click($event) {
                this.$emit("click", $event)
            },
            style() {
                if (this.position == "right" || this.position == "left") {
                    return { width: this.width }
                } else {
                    return { height: this.height }
                }
            },
            checkClass() {
                return 'popup-cont-' + this.position;
            },
            // slide-fade
            checkFade() {
                return 'slide-fade-' + this.position
            },
            close() {
                this.show = false;
                this.$emit('input', false);
            }
        },
        created() {

        }
    }

</script>
<style>
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */

    .slide-fade-right-enter-active,
    .slide-fade-top-enter-active,
    .slide-fade-bottom-enter-active,
    .slide-fade-left-enter-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-right-leave-active,
    .slide-fade-top-leave-active,
    .slide-fade-bottom-leave-active,
    .slide-fade-left-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-top-enter,
    .slide-fade-top-leave-active {
        transform: translateY(-10px);
        opacity: 0;
    }

    .slide-fade-bottom-enter,
    .slide-fade-bottom-leave-active {
        transform: translateY(10px);
        opacity: 0;
    }

    .slide-fade-left-enter,
    .slide-fade-left-leave-active {
        transform: translateX(-10px);
        opacity: 0;
    }

    .slide-fade-right-enter,
    .slide-fade-right-leave-active {
        transform: translateX(10px);
        opacity: 0;
    }
</style>