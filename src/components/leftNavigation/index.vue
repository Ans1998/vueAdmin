<template>
    <el-menu
            class="el-menu-vertical-demo"
            default-active="2"
            :router="true"
            :default-active="defaultActive"
            @open="handleOpen"
            @close="handleClose"
            @select="select"
    >
        <el-menu-item index="/">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>首页</span>
            </template>
        </el-menu-item>
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span>用户管理</span>
            </template>
            <el-menu-item-group>
                <template slot="title">用户列表</template>
                <el-menu-item index="/user/index">用户列表</el-menu-item>
                <el-menu-item index="/user/add">新增用户</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/order/index">
            <i class="el-icon-goods"></i>
            <span slot="title">订单管理</span>
        </el-menu-item>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span>商品管理</span>
            </template>
            <el-menu-item-group>
                <template slot="title">商品列表</template>
                <el-menu-item index="/shop/deploy">商品部署</el-menu-item>
                <el-menu-item index="/shop/specimen">商品样品</el-menu-item>
                <el-menu-item index="/shop/details">商品详情</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                defaultActive: '' // 导航栏标识
            }
        },
        // created activated
        activated() {
            // console.log(this.$route.path)
            if (typeof this.$route.path === 'string') {
                // 进入页面默认选中导航栏
                let val = this.$route.path
                this.defaultActive = val
            }
        },
        methods: {
            // 切换导航栏
            select(key, keyPath) {
                this.defaultActive = key
                console.log(key, keyPath)
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>
