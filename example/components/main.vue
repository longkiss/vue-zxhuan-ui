<template>
    <div class="box">
        <zx-cell-group>
            <zx-cell-item arrow type='label' @click="showPopup=true">
                <span slot="left">姓名</span>
                <span slot="right">zxhuan</span>
            </zx-cell-item>
        </zx-cell-group>
        <zx-popup width='70%' v-model="showPopup" position="left">
            <zx-cell-group>
                <zx-cell-item type='label' v-for="(item,key) in 10">
                    <span slot="left">姓名</span>
                    <span slot="right">zxhuan{{key}}</span>
                </zx-cell-item>
            </zx-cell-group>
        </zx-popup>
        <zx-button type="primary" @click="clickFN('zxhuan',$event)">zxhuan</zx-button>
        <zx-button type="success" @click="comfirmFn('zxhuan',$event)">zxhuan</zx-button>
        <zx-button type="info">zxhuan</zx-button>
        <zx-button type="warning">zxhuan</zx-button>
        <zx-button type="danger">zxhuan</zx-button>
        <zx-button type="info" disabled>zxhuan</zx-button>
        <zx-tab>
            <zx-tab-item label="Zxhuan" active>ZxhuaZxhuanZxhuann</zx-tab-item>
            <zx-tab-item label="John">JohnJohnJohn</zx-tab-item>
            <zx-tab-item label="Tom">TomTomTom</zx-tab-item>
        </zx-tab>
        <zx-cell-group>
            <zx-cell-item>
                <span slot="left">姓名：</span>
                <zx-input v-model="postData.name" placeholder="请输入姓名" slot="right" required></zx-input>
            </zx-cell-item>
            <zx-cell-item>
                <span slot="left">密码：</span>
                <zx-input v-model="postData.password" type="password" placeholder="请输入密码" slot="right"></zx-input>
            </zx-cell-item>
        </zx-cell-group>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                message: "hello world!",
                showPopup: false,
                activeName: "three",
                postData: {
                    password: "",
                    name: ""
                }
            }
        },
        methods: {
            clickFn(ops) {
                console.log(ops);
            },
            clickFN(value, $event) {
                console.log(this.postData.name)
                // this.$dialog.alert({
                //     msg: "你好陌生人",
                //     callback: function () {
                //         console.log('你好陌生人')

                //     }
                // })
            },
            comfirmFn(value, $event) {
                this.$dialog.Confirm({
                    msg: "你好陌生人",
                    title: "这里是标题!!",
                    callback: function () {
                        console.log('你好陌生人')
                    }
                })
            },
            showPopup() {

            },
            showValue() {
                console.log(this.postData.name)
            }
        },
        // beforeCreate() {
        //     console.log('beforeCreate')
        // },
        // beforeMount() {
        //     console.log('beforeMount')
        // },
        // mounted() {
        //     console.log('mounted')
        // },
        // updated() {
        //     console.log('updated')
        // },
        // activated() {
        //     console.log('activated')
        // },
        // deactivated() {
        //     console.log('deactivated')
        // },
        // beforeDestroy() {
        //     console.log('beforeDestroy')
        // },
        // destroyed() {
        //     console.log('destroyed')
        // },
        created() {
            console.log('created')
            // let promise = new Promise((resolve, reject) => {
            //     let boolean = true;
            //     if (boolean) {
            //         resolve('zxhuan')
            //     } else {
            //         reject('hello world')
            //     }
            // });
            // try{
            //     console.log(promise)
            // }catch(error){
            //     console.log(error)
            // }
            // promise.then((value) => {
            //     console.log(value)
            // }, (error) => {
            //     console.log(error)
            // })

        },
    }

</script>