<style>
    .visualManagementMy_content {}
    .visualManagementMy_content img {
        width: 40px;
        height: 40px;
    }
    .visualManagementMy_content .leftLs_content:not(:first-child) {
        margin: 10px 0;
    }
    .visualManagementMy_content .leftLs_content{
        padding: 10px 0;
        text-align: center;
        background-color: #ccc;
    }
    .visualManagementMy_content .left {
        background-color: red;
        min-height: 100px;
    }
    .leftLs_content {}
    .leftLs_content .left{}

    .navigation_content {
        min-height: 90px;
        width: calc(100% / 3);
        min-width: 33%;
        max-width: 33%;
        float: right;
        padding: 2% 0;
        text-align: center;
        background-color: #fff;
    }
</style>
<template>
    <div class="visualManagementMy_content">
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="left">
                    <draggable v-model="list1" group="people" style="text-align: center;">
                        <div class="leftLs_content" v-for="item in list1" :key="item.id">
                            <div>
                                <img :src="item.img">
                            </div>
                            <div>
                                {{item.name}}
                            </div>
                        </div>
                    </draggable>
                </div>
            </el-col>
            <el-col :span="16">

                <div style="height: 20%;width: 100%">
                    <img  style="height: 20%;width: 100%" src="../../../assets/img/my/head.png" alt="">
                </div>

                <div style="background-color: blue; min-height: 100px;">
                    <draggable v-model="list2" group="people" @start="drag=true" @end="drag=false">
                            <div class="navigation_content" v-for="item in list2" :key="item.id">
                                <div>
                                    <img :src="item.img">
                                </div>
                                <div>
                                    {{item.name}}
                                </div>
                            </div>
                    </draggable>
                </div>


                <div style="height: 10%;width: 100%">
                    <img style="height: 10%;width: 100%" src="../../../assets/img/my/footer.png" alt="">
                </div>

            </el-col>
        </el-row>

    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    export default {
        components: {
            draggable,
        },
        name: "index",
        data() {
            return{
                list1: [
                    { name: "我的卡", id: 1, img: require('../../../assets/img/my/my_card.png')},
                    { name: "刮刮充值卡", id: 2, img: require('../../../assets/img/my/scratch_card_recharge.png')},
                    { name: "优惠卡", id: 3, img: require('../../../assets/img/my/preferential_card.png')}
                ],
                list2: [
                    { name: "我的钱包", id: 4, img: require('../../../assets/img/my/my_wallet.png') },
                    { name: "付款码", id: 5, img: require('../../../assets/img/my/payment_QR_code.png') },
                    { name: "常用设备", id: 6, img: require('../../../assets/img/my/frequently_used_equipment.png') },
                    { name: "收藏设备", id: 7, img: require('../../../assets/img/my/collect_equipment.png') },
                    { name: "报修", id: 8, img: require('../../../assets/img/my/maintain.png') }
                ]
            }
        },
        methods: {
            clone({ name }) {
                return { name, id: idGlobal++ };
            },
            pullFunction() {
                return this.controlOnStart ? "clone" : true;
            },
            start({ originalEvent }) {
                this.controlOnStart = originalEvent.ctrlKey;
            }
        }
    }
</script>

