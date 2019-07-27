<template>
    <div>
        <form-create v-model="fApi" :rule="rule" :option="option"></form-create>
    </div>
</template>

<script>
    export default {
        name: "index",
        data () {
            return {
                //实例对象
                fApi:{},
                //表单生成规则
                rule:[
                    {
                        type:'input',
                        field:'goods_name',
                        title:'商品名称'
                    },
                    {
                        type:'input',
                        field:'goods_name_as',
                        title:'文本名称'
                    },
                    {
                        type: "InputNumber",
                        field: "price",
                        title: "价格",
                        value: 1,
                        props: {
                            precision:2
                        },
                    },
                    {
                        type:'datePicker',
                        field:'created_at',
                        title:'创建时间'
                    }
                ],
                //组件参数配置
                option:{
                    //表单提交事件
                    onSubmit:function (formData) {
                        alert(JSON.stringify(formData));
                    }
                }
            };
        },
        methods: {
        },
        computed: {
        },
        created() {
        }
    }
</script>

<style>

</style>
