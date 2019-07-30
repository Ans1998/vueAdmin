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
                    // 表单配置
                    form: {
                        labelPosition: 'right'
                    },
                    // 提交按钮样式和布局配置
                    submitBtn: {
                        //类型 primary / success / warning / danger / info / text
                        type: "primary",
                        //尺寸 medium / small / mini
                        size: "medium",
                        //是否朴素按钮
                        plain: false,
                        //是否圆角按钮
                        round: true,
                        //是否圆形按钮
                        circle: false,
                        //是否加载中状态
                        loading: true,
                        //是否禁用状态
                        disabled: false,
                        //图标类名
                        icon: null,
                        //按钮宽度
                        width: '100%',
                        //是否默认聚焦
                        autofocus: false,
                        //原生 type 属性
                        nativeType: "button",
                        //按钮内容
                        innerText: "提交",
                        //按钮是否显示
                        show: true,
                        //按钮布局规则
                        col: undefined,
                        //按钮点击事件
                        click: undefined,
                    },
                    //表单提交事件
                    onSubmit: function (formData) {
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
