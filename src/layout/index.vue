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

                    <!--<el-breadcrumb>-->
                        <!--<el-breadcrumb-item>表单管理</el-breadcrumb-item>-->
                        <!--<el-breadcrumb-item>表单样式</el-breadcrumb-item>-->
                    <!--</el-breadcrumb>-->

                    <el-main>

                        <appMain />

                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import {appMain, leftNavigation, headNavigation} from './components/index'
    export default {
        name: "index",
        components: {
            appMain,
            leftNavigation,
            headNavigation
        },
        data() {
            return{
            }
        },
        methods: {
        }
    }
</script>

<style>

</style>
