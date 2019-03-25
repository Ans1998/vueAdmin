<style>
    .echarts {
        width: 100%;
        height: 100%;
    }
</style>
<template>
    <div>
        <el-container>
            <el-container>
                <el-aside>
                    <leftNavigation></leftNavigation>
                </el-aside>
                <el-container>
                    <el-header style="text-align: right; font-size: 12px;">
                        <headNavigation></headNavigation>
                    </el-header>
                    <el-main>
                        <!--mnin-->
                        <el-row>
                            <el-col :span="12">
                                <div class="grid-content bg-purple">
                                    <!--柱状图-->
                                    <v-chart :options="polar" style="width: 500px; height: 300px"/>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple-light">
                                    <v-chart :options="polarLine" style="width: 300px; height: 300px"/>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <div class="grid-content bg-purple">
                                    <!--折线图-->
                                    <v-chart :options="polarSeries" style="width: 500px; height: 300px"/>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple-light">
                                    <!--饼图-->
                                    <v-chart :options="polarRadius" style="width: 350px; height: 300px"/>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <div class="grid-content bg-purple">
                                    <!--散点图-->
                                    <v-chart :options="polarScatter" style="width: 500px; height: 300px"/>
                                </div>
                            </el-col>
                        </el-row>
                        <!--end main-->
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import ECharts from 'vue-echarts'
    import 'echarts/lib/chart/bar' // 引入柱状图组件
    import 'echarts/lib/chart/line' // 引入折线图
    import 'echarts/lib/chart/pie' // 饼图
    import 'echarts/lib/chart/scatter' // 散点图

    // 引入提示框和title组件
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/title'
    import 'echarts/lib/component/polar'
    export default {
        components: {
            'v-chart': ECharts
        },
        name: "index",
        data () {
            // 极坐标双数值轴
            let data = []
            for (let i = 0; i <= 360; i++) {
                let t = i / 180 * Math.PI
                let r = Math.sin(2 * t) * Math.cos(2 * t)
                data.push([r, i])
            }
            // 散点图
            var scatter = [
                [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
                [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
            ]
            return {
                polar: {
                    title: {
                        text: '趋势图',
                        left: 'center'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar', // line折线  bar矩形 pie饼图
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                },
                polarLine: {
                    title: {
                        text: '极坐标双数值轴'
                    },
                    legend: {
                        data: ['line']
                    },
                    polar: {
                        center: ['50%', '54%']
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    angleAxis: {
                        type: 'value',
                        startAngle: 0
                    },
                    radiusAxis: {
                        min: 0
                    },
                    series: [
                        {
                            coordinateSystem: 'polar',
                            name: 'line',
                            type: 'line', // line折线  bar矩形 pie饼图
                            showSymbol: false,
                            data: data
                        }
                    ],
                    animationDuration: 2000
                },
                polarSeries: {
                    title:{ text:'ECharts 折线图' },
                    tooltip:{},
                    legend:{ data:['用户来源'] },
                    xAxis:{
                        data: ["Android","IOS","PC","Ohter"]
                    },
                    yAxis:{},
                    series:[{
                            name:'访问量',
                            type:'line', // line折线  bar矩形 pie饼图
                            data:[500,200,360,100]
                    }]
                },
                polarRadius:{
                    title:{ text:'ECharts 饼图' },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'right',
                        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                },
                polarScatter: {
                    backgroundColor: new ECharts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                        offset: 0,
                        color: '#fff'
                    }, {
                        offset: 1,
                        color: '#fff'
                    }]),
                    title: {
                        text: '散点图'
                    },
                    legend: {
                        right: 10,
                        data: ['1990', '2015']
                    },
                    xAxis: {
                        splitLine: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        }
                    },
                    yAxis: {
                        splitLine: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
                        scale: true
                    },
                    series: [{
                        name: '1990',
                        data: scatter[0],
                        type: 'scatter',
                        symbolSize: function (data) {
                            return Math.sqrt(data[2]) / 5e2;
                        },
                        label: {
                            emphasis: {
                                show: true,
                                formatter: function (param) {
                                    return param.data[3];
                                },
                                position: 'top'
                            }
                        },
                        itemStyle: {
                            normal: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(120, 36, 50, 0.5)',
                                shadowOffsetY: 5,
                                color: new ECharts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                    offset: 0,
                                    color: 'rgb(251, 118, 123)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(204, 46, 72)'
                                }])
                            }
                        }
                    }, {
                        name: '2015',
                        data: scatter[1],
                        type: 'scatter',
                        symbolSize: function (data) {
                            return Math.sqrt(data[2]) / 5e2;
                        },
                        label: {
                            emphasis: {
                                show: true,
                                formatter: function (param) {
                                    return param.data[3];
                                },
                                position: 'top'
                            }
                        },
                        itemStyle: {
                            normal: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(25, 100, 150, 0.5)',
                                shadowOffsetY: 5,
                                color: new ECharts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                    offset: 0,
                                    color: 'rgb(129, 227, 238)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(25, 183, 207)'
                                }])
                            }
                        }
                    }]
                }
            }
        }
    }
</script>

